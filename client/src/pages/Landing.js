import { Logo } from "../components";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";
const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
    {user && <Navigate to ='/'/>}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby etsy schlitz hashtag williamsburg af cred grailed
              affogato gorpcore. Tumeric aesthetic austin la croix tumblr
              hammock distillery waistcoat disrupt viral gentrify stumptown bruh
              drinking vinegar.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
