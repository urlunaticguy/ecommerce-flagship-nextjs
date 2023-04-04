import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(false);
  // initally user is not signed in - so false

  useEffect(() => {}, []);

  // check auth or app navigators here

  return (
    <>
      <div>{isSignedIn ? "true" : "false"}</div>
      {
        isSignedIn ? (
          <HomeScreen /> // if signed in - user goes to homescreen
        ) : (
          <LoginScreen changeFlagVariable={setIsSignedIn} />
        ) // if not - user goes to login screens
      }
    </>
  );
}

export default App;
