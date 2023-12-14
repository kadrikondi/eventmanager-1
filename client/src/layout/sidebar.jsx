import React, { useState } from "react";
import "./sidebar.css";
import Elogo from "../asset/eventlogo.jpg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  //   MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBCollapse
        show={showShow}
        tag="nav"
        className="d-lg-block bg-white sidebar"
      >
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded rounded"
              >
                <MDBIcon fas icon="tachometer-alt me-3" />
                <Link to="/allcenter"> Main Dashboard </Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
                active
                aria-current="true"
              >
                <MDBIcon fas icon="chart-area me-3" />
                <Link to="/addcenter">Add Center</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="lock me-3" />
                <Link to="userprofile/3">Profile</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="chart-line me-3" />
                <Link to="/allcenter">All center</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="chart-pie me-3" />
                <Link to="/">Logout</Link>
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleShow}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#">
              <img src={Elogo} height="60" alt="" loading="lazy" />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput
                  label='Search (ctrl + "/" to focus)'
                  id="form1"
                  type="text"
                />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <Link to="/">
                    {" "}
                    <MDBBtn className="btn btn-danger">Logout</MDBBtn>{" "}
                  </Link>
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color="danger" notification pill>
                    3
                  </MDBBadge>
                </MDBDropdownToggle>

                {/* <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      Something else here
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu> */}
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              {/* <MDBNavbarLink href="#">
                <MDBIcon fas icon="fill-drip" />
              </MDBNavbarLink> */}
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3 me-lg-0">
              {/* <MDBNavbarLink href="#">
                <MDBIcon fab icon="github" />
              </MDBNavbarLink> */}
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </MDBDropdownToggle>

                {/* <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">My profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Settings</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Logout</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu> */}
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Sidebar;
