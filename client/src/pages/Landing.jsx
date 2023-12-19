import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Header from "../layout/Header";

const Landing = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();
  const history = useHistory();

  const handleSignIn = async (e) => {
    // console.log(username, email, password, cpassword, gender);
    e.preventDefault();
    setIsLoading(true);
    if (!password || !email) {
      setMessage("Fill all required field");
      setIsLoading(false);
    } else {
      const login = {
        password,

        email,
      };
      // console.log(login);
      try {
        const User = await axios.post("http://localhost:8000/login", login);
        console.log(User);
        if (User.data.message === "login") {
          setMessage(User.data.message);

          setIsLoading(false);
          console.log(User.data.user._id);
          window.localStorage.setItem(
            "userId",
            JSON.stringify(User.data.user._id)
          );
          window.localStorage.setItem("token", JSON.stringify(User.data.token));
          history.push("/allcenter");
        } else {
          setMessage(User.data.message);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setMessage(error);
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Header />

      <MDBContainer
        fluid
        className="p-4"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <MDBRow>
          <MDBCol
            md="8"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Book For Best
              <br />
              <span className="text-primary">Events Center in One click</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Welcome to our premier event center booking platform, where your
              dream celebration begins! Discover the perfect venue effortlessly
              with our user-friendly app, designed to simplify your event
              planning journey. Whether you're organizing a wedding, corporate
              event, or a special celebration, we've curated a diverse selection
              of top-tier event centers tailored to your every need. Browse
              through stunning venues, check real-time availability, and secure
              your booking with just a few clicks. Our platform not only
              streamlines the process but also offers expert advice, ensuring
              your event is nothing short of extraordinary. Say goodbye to
              stress and hello to seamless event planning. Let's transform your
              visions into unforgettable moments together. Start exploring now
              and let the magic of your event unfold effortlessly.
            </p>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="d-flex justify-content-center mb-4">
                  {message ? (
                    <div className="alert alert-danger">{message}</div>
                  ) : null}
                </div>

                <MDBBtn className="w-100 mb-4" size="md" onClick={handleSignIn}>
                  {isLoading ? (
                    <span className="loader">signin...</span>
                  ) : (
                    <span> Sign In</span>
                  )}
                </MDBBtn>

                <div className="text-center">
                  <p>
                    or Not a User <a href="/signup"> Sign up </a>
                  </p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Landing;
