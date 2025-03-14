import React, { Fragment, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEdit, MdClose } from 'react-icons/md';
import { HiLocationMarker, HiOfficeBuilding, HiOutlineMail, HiPhone } from 'react-icons/hi';
import { BsGithub, BsLinkedin, BsGlobe } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function Profile() {
  const profile = useSelector(state => state.profile);
  const file = useSelector(state => state.file);
  const dispatch = useDispatch();
  const { manageProfile, manageFile } = bindActionCreators(actionCreators, dispatch);

  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileURL, setProfileURL] = useState("");

  // Define modal handlers
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAlertHide = () => {
    setProfileName("");
    setProfileURL("");
    setAlert(false);
  };

  const handleAlertShow = (Profile, Link) => {
    setProfileName(Profile);
    setProfileURL(Link);
    setAlert(true);
  };

  // Handle file changes
  function handleFile(e) {
    manageFile(URL.createObjectURL(e.target.files[0]));
  }

  // Handle profile input changes
  const handleProfile = (e) => {
    manageProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col md={8} sm={12} className="d-flex justify-content-between img-column">
          <img src={file} className="profile-image" alt="..." />
          <MdEdit size={30} className="rounded edit" onClick={handleShow} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col md={4} sm={6}>
          <h4>{profile.name}</h4>
          <div className="d-flex">
            <HiLocationMarker size={30} className="p-1" />
            <p className="p-1 m-0">{profile.location}</p>
          </div>
          <div className="d-flex">
            <HiOfficeBuilding size={30} className="p-1" />
            <p className="p-1 m-0">{profile.position}</p>
          </div>
          <p className="px-2">{profile.tagline}</p>
        </Col>
        <Col md={4} sm={6} className="d-flex flex-wrap">
          <p className="p-1 m-0" onClick={() => handleAlertShow("LinkedIn Profile", profile.linkedin)}>
            <BsLinkedin size={30} className="p-1" />LinkedIn
          </p>
          <p className="p-1 m-0" onClick={() => handleAlertShow("GitHub Profile", profile.github)}>
            <BsGithub size={30} className="p-1" />GitHub
          </p>
          <p className="p-1 m-0" onClick={() => handleAlertShow("Portfolio", profile.website)}>
            <BsGlobe size={30} className="p-1" />Portfolio
          </p>
          <p className="p-1 m-0" onClick={() => handleAlertShow("Email Address", profile.email)}>
            <HiOutlineMail size={30} className="p-1" />Email
          </p>
          <p className="p-1 m-0" onClick={() => handleAlertShow("Contact Number", profile.contact)}>
            <HiPhone size={30} className="p-1" />Contact Number
          </p>
        </Col>
      </Row>

      {/* Modal for Profile Editing */}
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Profile Details</Modal.Title>
          <MdClose size={30} className="rounded edit" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form>
            {["name", "location", "position", "tagline", "email", "contact", "github", "linkedin", "website"].map((field, index) => (
              <Form.Group key={index} className="mb-3">
                <Form.Control
                  type="text"
                  name={field}
                  size="sm"
                  placeholder={`Enter ${field}`}
                  value={profile[field] || ""}
                  onChange={handleProfile}
                />
              </Form.Group>
            ))}

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" size="sm" onChange={handleFile} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <button type="submit" className="rounded edit px-2" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal to show URL info */}
      <Modal show={alert} onHide={handleAlertHide}>
        <Modal.Header>
          <Modal.Title>{profileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{profileURL}</Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default Profile;
