import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, reload } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export default function OTPVerification() {
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  // Function to update Firestore when verified
  const markVerifiedInFirestore = async (user) => {
    try {
      await updateDoc(doc(db, "users", user.uid), { verified: true });
    } catch (err) {
      console.error("Error updating verification status in Firestore:", err);
    }
  };

  // Poll Firebase every 5 seconds for verification status
  useEffect(() => {
    if (!auth.currentUser && !email) {
      // If user isn't logged in or missing email state, send back to register
      navigate("/register");
      return;
    }

    const interval = setInterval(async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          await reload(user);
          if (user.emailVerified) {
            setVerified(true);
            clearInterval(interval);
            await markVerifiedInFirestore(user);

            // Redirect to student dashboard
            window.location.href =
              import.meta.env.VITE_DASHBOARD_URL || "https://student.nexpath.app/dashboard";
          }
        } catch (err) {
          console.error("Error checking verification status:", err);
          setError("Something went wrong while checking verification. Try again.");
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate, email]);

  // Manual verification re-check
  const handleCheck = async () => {
    if (auth.currentUser) {
      setChecking(true);
      setError("");
      try {
        await reload(auth.currentUser);
        if (auth.currentUser.emailVerified) {
          setVerified(true);
          await markVerifiedInFirestore(auth.currentUser);
          window.location.href =
            import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174/dashboard";
        } else {
          setError("Email not verified yet. Please check your inbox.");
        }
      } catch (err) {
        console.error("Error checking verification:", err);
        setError("Something went wrong. Try again.");
      } finally {
        setChecking(false);
      }
    }
  };

  return (
    <div className="container py-20 flex justify-center">
      <div className="w-[350px] text-center space-y-4">
        <h2 className="text-2xl font-semibold">Verify Your Email</h2>
        <p className="text-gray-600">
          We’ve sent a verification link to <strong>{email}</strong>.
          Please check your inbox and click the link.
        </p>

        {error && <p className="text-red-500">{error}</p>}

        {!verified ? (
          <Button onClick={handleCheck} disabled={checking}>
            {checking ? "Checking..." : "I have verified my email"}
          </Button>
        ) : (
          <p className="text-green-600 font-medium">
            ✅ Verified! Redirecting to your dashboard...
          </p>
        )}
      </div>
    </div>
  );
}
