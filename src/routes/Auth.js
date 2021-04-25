import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AuthForm from "../components/AuthForm";
import { authService, firebaseInstance } from "../fireabase";
import "./Auth.css";
function Auth() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="auth__Container">
      <AuthForm />
      <div className="auth__Btns">
        <button className="auth__Btn" name="google" onClick={onSocialClick}>
          Continue with Google
          <FontAwesomeIcon icon={faGoogle} className="auth__Btn__Icon" />
        </button>
      </div>
    </div>
  );
}

export default Auth;
