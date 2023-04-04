import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function LoginScreen({ changeFlagVariable }) {
  const router = useRouter();
  const handleLogin = () => {
    changeFlagVariable(true);
    router.push("/");
    // console.log("HELLO");
  };
  return (
    <>
      <div>This is Login Screen.</div>
      <div>Login form goes here.</div>
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        LOGIN BUTTON TO GO TO HOME PAGE
      </button>
      <div>Signup button goes here</div>
      <Link href={"/src/screens/SignupScreen"}>SIGNUP BUTTON</Link>
    </>
  );
}

export default LoginScreen;
