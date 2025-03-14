import React, { Fragment } from 'react';
import { Stack, ProgressBar } from 'react-bootstrap';
import { BsLinkedin, BsGithub, BsGlobe } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import { HiLocationMarker, HiOfficeBuilding, HiOutlineMail, HiPhone } from 'react-icons/hi';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';

function PdfComponent() {
  const profile = useSelector(state => state.profile) || {};
  const name = profile?.name?.split(" ") || ["", ""];
  const file = useSelector(state => state.file) || '';
  const about = useSelector(state => state.about) || '';
  const experienceList = useSelector(state => state.experienceList) || [];
  const educationList = useSelector(state => state.educationList) || [];
  const skills = useSelector(state => state.skills) || [];

  const getRandomColor = () => {
    const colors = ['primary', 'success', 'danger', 'warning', 'info'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const createAndDownloadPdf = async () => {
    try {
      const data = { profile, name, file, about, experienceList, educationList, skills };
      await axios.post('http://localhost:5000/create-pdf', data);
      const res = await axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' });
      saveAs(new Blob([res.data], { type: 'application/pdf' }), 'newPdf.pdf');
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };

  const GetLinks = () => {
    const links = [
      { icon: <HiOutlineMail size={30} />, link: profile.email },
      { icon: <HiPhone size={30} />, link: profile.contact },
      { icon: <BsLinkedin size={30} />, link: profile.linkedin },
      { icon: <BsGithub size={30} />, link: profile.github },
      { icon: <BsGlobe size={30} />, link: profile.website },
    ].filter(item => item.link);

    return links.length > 0 ? (
      links.map((item, id) => (
        <div className={`d-flex align-items-start bg-${id % 2 ? '3' : '2'} text-white p-3`} key={id}>
          {item.icon}
          <span className="mx-2"></span>
          <p className="m-0">{item.link}</p>
        </div>
      ))
    ) : <p>No contact information available.</p>;
  };

  return (
    <Fragment>
      <div className="d-grid col-2 mx-auto mt-4">
        <button className="btn btn-dark p-2 rounded" onClick={printDocument}>Download Image as PDF</button>
        <button className="btn btn-dark p-2 rounded mt-2" onClick={createAndDownloadPdf}>Download Version 2.0</button>
      </div>

      <div className="container d-flex justify-content-center p-4">
        <div className="row pdf bg-light" id="divToPrint">
          <div className="col-md-5 bg-1 p-2 text-center">
            {file && <img src={file} className="pdf-profile-image" alt="Profile" />}
            <Stack className="text-center mt-2">
              <span className="font-weight-bold">{name[0]}</span>
              <span className="font-weight-light">{name[1]}</span>
              <p>{profile.tagline || "No tagline available"}</p>
              <p><HiOfficeBuilding size={20} /> {profile.position || "Position not specified"}</p>
              <p><HiLocationMarker size={20} /> {profile.location || "Location not specified"}</p>
            </Stack>
            <GetLinks />

            <h4>Skills</h4>
            {skills.length > 0 ? (
              skills.map((item, id) => (
                <div key={id} className="d-flex flex-column align-items-start">
                  <ProgressBar
                    now={item.progress || 0}
                    label={`${item.skill} - ${item.progress || 0}%`}
                    variant={getRandomColor()}
                    style={{ width: "100%", marginBottom: "5%" }}
                  />
                </div>
              ))
            ) : <p>No skills added.</p>}
          </div>

          <div className="col-md-7 p-4">
            <h4>About Me</h4>
            <p>{about || "No description provided."}</p>
            <hr />

            <h4>Experience</h4>
            {experienceList.length > 0 ? (
              experienceList.map((item, id) => (
                <div key={id} className="d-flex py-2">
                  <HiOfficeBuilding size={30} />
                  <div className="px-3">
                    <h5>{item.title}</h5>
                    <p>{item.company} • {item.startMonth} {item.startYear} - {item.isWorking ? "Present" : `${item.endMonth} ${item.endYear}`}</p>
                    <p>{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            ) : <p>No work experience added.</p>}
            <hr />

            <h4>Education</h4>
            {educationList.length > 0 ? (
              educationList.map((item, id) => (
                <div key={id} className="d-flex py-2">
                  <GiGraduateCap size={40} />
                  <div className="px-3">
                    <h5>{item.institute}</h5>
                    <p>{item.degree} • {item.fieldOfStudy}</p>
                    <p>{item.startYear} - {item.endYear} • Grade: {item.grade}</p>
                  </div>
                </div>
              ))
            ) : <p>No education details added.</p>}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PdfComponent;
