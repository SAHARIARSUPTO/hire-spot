import React, { useState } from "react";
import "./Login.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/__Firebase";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setuser] = useState(null);
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setuser(loggedInUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
 const  handleSignOut = () => {
  console.log('clicek');
  };
  return (
    <div>
      <div>
        <button onClick={handleSignIn}>Log in with Google</button>
        <button onClick={handleSignOut}>Log Out</button>
      </div>
      {user && (
        <div>
          <h1>User Name: {user.displayName}</h1>
          <h1>User Email: {user.email}</h1>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
