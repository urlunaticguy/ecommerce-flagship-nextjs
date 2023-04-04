import Link from "next/link";
import React from "react";

function SignupScreen() {
  return (
    <>
      <div>This is SignupScreen.</div>
      <div>Signup form goes here</div>
      <Link href={"/src/screens/LoginScreen"}>
        LOGIN BUTTON TO GO TO LOGIN PAGE
      </Link>
    </>
  );
}

export default SignupScreen;
