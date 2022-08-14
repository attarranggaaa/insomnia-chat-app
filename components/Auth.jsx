import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

const Auth = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // "", { prompt: "select_account" };
  return (
    <>
      <div className="container mx-auto text-white flex items-center justify-center h-screen">
        <button
          className="btn btn-primary w-52"
          onClick={() => signInWithGoogle("", { prompt: "select_account" })}
        >
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default Auth;
