import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from "../../layout/sidebar";
import { response } from "express";

const Allcenter = () => {

  const [centers, setCenters] = useState();
  const [message, setMessage] = useState('Ola');

  // useEffect(async () => {
  //   try {
  //     const response = await axios.post("http://localhost:8000/centers");
  //     console.log(response);
  //       setCenters(response)
  //       setMessage('');

  //       setIsLoading(false);
  //     }
  //     catch (error) {
  //     setIsLoading(false);
  //     setMessage(error);
  //     console.log(error);
  //   }
  // }, [])
 
  return (
    <>
      <Sidebar />
      <MDBContainer

        style={{ marginLeft: "260px", marginTop: "80px" }}
      >
        <MDBRow className="row-cols-1 row-cols-md-4 g-4">
          
          {
            centers & centers.map((center, index) => (
              <div key={index}>
                <MDBCol>
                  <MDBCard>
                    <MDBCardImage
                      src={center.img}
                      position="top"
                      alt="..."
                    />

                    <MDBCardBody>
                      <MDBCardTitle>{center.centerName}</MDBCardTitle>
                      <MDBCardText>{center.capacity}</MDBCardText>
                      <MDBBtn href={`/centers/${center.id}`}>Center Details</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </div>
            ))
          }
          {/* <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>Onikan Center</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title
                </MDBCardText>
                <MDBBtn href="#">Center</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>Onikan Center</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title
                </MDBCardText>
                <MDBBtn href="#">Center detail</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>Onikan Center</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title
                </MDBCardText>
                <MDBBtn href="#">Center</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>Onikan Center</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title
                </MDBCardText>
                <MDBBtn href="#">Center</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>Onikan Center</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title
                </MDBCardText>
                <MDBBtn href="#">Center</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Allcenter;

// import React from "react";
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";

// const Allcenter = () => {
//   return (
//     <MDBRow className="row-cols-1 row-cols-md-4 g-4">
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/city/041.webp"
//             alt="..."
//             position="top"
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/city/042.webp"
//             alt="..."
//             position="top"
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/city/043.webp"
//             alt="..."
//             position="top"
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/city/044.webp"
//             alt="..."
//             position="top"
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// };
// export default Allcenter;
