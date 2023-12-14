import React, { useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Header from "../layout/Header";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const [message, setMessage] = useState();
  const[isLoading , setIsLoading]= useState(false)
  const history = useHistory()
  const [gender, setGender] = useState();


  const handleUser= (e)=>{
    setUsername(e.target.value)
    console.log(username)
  }
  const handleSignUp = async (e) => {
    // console.log(username, email, password, cpassword, gender);
    e.preventDefault();
setIsLoading(true)
    if (!username || !password || !email || !cpassword || !gender) {
      setMessage("Fill all required field");
setIsLoading(false)

    }
    if (password != cpassword) {
      setMessage("password not match");
setIsLoading(false)

    } else {
      const user = {
        username,
        password,
        gender,
        email,
      };
      console.log(user);
try{
      const User= await axios.post("http://localhost:8000/user",user)
      console.log(User)
      if(User.data.message=='successful signup'){
        setMessage(User.data.message)
       history.push('/')
setIsLoading(false)

      }
    }
    catch(error){

setIsLoading(false)
setMessage(error)
      console.log(error)
    }
      
    }
  };
  return (
    <>
      <Header />

      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your username"
              size="lg"
              id="form1"
              type="text"
              value={username}
              onChange={handleUser}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            l

            <select
              name=""
              id=""
              className="form-control mb-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            {message ? (
              <div className="alert alert-danger">{message}</div>
            ) : null}
      
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              onClick={handleSignUp}
          >
          {isLoading ? <span className="loader">...</span>:
              <span>Register</span>}
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Signup;
