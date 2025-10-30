// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import Register from "@/pages/Register";
import OTPVerification from "@/pages/OTPVerification";
import RequestAccess from "@/pages/RequestAccess";
import AuthCallback from "@/pages/AuthCallback";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Page Container ensures consistent horizontal spacing */}
          <Container className="py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-otp" element={<OTPVerification />} />
              <Route path="/request-access" element={<RequestAccess />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
            </Routes>
          </Container>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
