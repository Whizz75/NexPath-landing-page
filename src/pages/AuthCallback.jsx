import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { applyActionCode, getIdToken } from "firebase/auth";
import api from "@/lib/api";

export default function AuthCallback() {
  const [status, setStatus] = useState("Verifying your email...");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode");
    const oobCode = searchParams.get("oobCode");

    if (mode === "verifyEmail" && oobCode) {
      verifyEmail(oobCode);
    } else {
      setStatus("Invalid verification link.");
    }
  }, [searchParams]);

  const verifyEmail = async (oobCode) => {
    try {
      await applyActionCode(auth, oobCode);
      setStatus("✅ Email verified. Finalizing session...");

      const user = auth.currentUser;
      if (!user) {
        setStatus("User not logged in. Please sign in on landing to continue.");
        return;
      }

      const idToken = await getIdToken(user, true);

      const resp = await api.post("/auth/sessionLogin", { idToken });

      if (!resp.data.success) {
        setStatus("Failed to create session. Try signing in on the dashboard.");
        return;
      }

      window.location.href = resp.data.redirect;
    } catch (err) {
      console.error("Verification error:", err);
      setStatus("Verification failed. The link may be invalid or expired.");
    }
  };

  return (
    <div className="container py-20 flex justify-center">
      <div className="w-[420px] text-center space-y-4">
        <h2 className="text-2xl font-semibold">Email Verification</h2>
        <p>{status}</p>
      </div>
    </div>
  );
}
