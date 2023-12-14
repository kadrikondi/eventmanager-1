import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from "../../layout/sidebar";

const Addcenter = () => {
  const [namec, setName] = useState();
  const [capacity, setCapacity] = useState();
  const [address, setAddress] = useState();
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [contactinfo, setContactInfo] = useState();
  const [handleSetFile, sethandleSetFile] = useState([]);

  const handleSubmitCenter = async (e) => {
    e.preventDefault();
    const id = JSON.parse(localStorage.getItem("userId"));

    setIsLoading(true);
    if (!namec || !address || !contactinfo || !capacity) {
      setMessage("Fill all required field ---");
      setIsLoading(false);
    } else {
      const formdata = new FormData();
      formdata.append("image", handleSetFile);
      formdata.append("name", namec);
      formdata.append("address", address);
      formdata.append("contactinfo", contactinfo);
      formdata.append("capacity", capacity);
      formdata.append("uploadby", id);

      try {
        const User = await axios.post(
          `http://localhost:8000/registercenter/${id}`,
          formdata
        );
        console.log(User);
        if (User.data.message === "Center created successfully") {
          setMessage(User.data.message);
          history.push("/allcenter");
          setIsLoading(false);
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
      <Sidebar />

      <MDBContainer style={{ marginLeft: "260px", marginTop: "80px" }}>
        <MDBInput
          wrapperClass="mb-4"
          id="form6Example3"
          label="Name"
          value={namec}
          onChange={(e) => setName(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          id="form6Example4"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="text"
          id="form6Example5"
          label="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="tel"
          id="form6Example6"
          label="contact info"
          value={contactinfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
        <MDBInput
          id="file"
          type="file"
          className="form-control"
          onChange={(e) => sethandleSetFile(e.target.value)}
        />

        {message ? <div className="alert alert-danger">{message}</div> : null}
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form6Example8"
          label="Create an account?"
          defaultChecked
        />

        <MDBBtn
          className="mb-4"
          type="submit"
          block
          onClick={handleSubmitCenter}
        >
          Submit
        </MDBBtn>
      </MDBContainer>
    </div>
  );
};

export default Addcenter;
