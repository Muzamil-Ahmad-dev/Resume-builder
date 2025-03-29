import React from "react";
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import { HiLocationMarker, HiOfficeBuilding, HiOutlineMail, HiPhone, HiBriefcase, HiAcademicCap } from "react-icons/hi";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";

function PdfComponent() {
  const profile = useSelector((state) => state.profile) || {};
  const name = profile?.name?.split(" ") || ["", ""];
  const file = useSelector((state) => state.file) || "";
  const about = useSelector((state) => state.about) || "";
  const experienceList = useSelector((state) => state.experienceList) || [];
  const educationList = useSelector((state) => state.educationList) || [];
  const skills = useSelector((state) => state.skills) || [];

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Arial, sans-serif" }}>
      <button onClick={printDocument} style={{ padding: "10px 20px", margin: "10px", fontSize: "16px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Download PDF
      </button>

      <div id="divToPrint" style={{ width: "800px", backgroundColor: "#fff", display: "flex", border: "1px solid #ddd", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
        
        {/* Sidebar - 1/3 */}
        <div style={{ width: "33.33%", backgroundColor: "#2C3E50", color: "#fff", padding: "20px", textAlign: "center" }}>
          {file && <img src={file} alt="Profile" style={{ width: "80%", borderRadius: "50%", marginBottom: "10px" }} />}
          <h2 style={{ marginBottom: "5px" }}>{name[0]} {name[1]}</h2>
          <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{profile.tagline}</p>
          <p><HiOfficeBuilding /> {profile.position}</p>
          <p><HiLocationMarker /> {profile.location}</p>

          {/* 🔹 Social Links */}
          <div style={{ marginTop: "20px" }}>
            {profile.email && <p><HiOutlineMail /> {profile.email}</p>}
            {profile.phone && <p><HiPhone /> {profile.phone}</p>}
            {profile.linkedin && <p><BsLinkedin /> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#1ABC9C", textDecoration: "none" }}>{profile.linkedin}</a></p>}
            {profile.github && <p><BsGithub /> <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: "#1ABC9C", textDecoration: "none" }}>{profile.github}</a></p>}
            {profile.website && <p><BsGlobe /> <a href={profile.website} target="_blank" rel="noopener noreferrer" style={{ color: "#1ABC9C", textDecoration: "none" }}>{profile.website}</a></p>}
          </div>

          {/* 🔹 Skills Section */}
          <h3 style={{ marginTop: "20px", borderBottom: "1px solid #fff", paddingBottom: "5px" }}>Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p style={{ marginBottom: "2px" }}>{skill.skill}</p>
              <div style={{ width: "100%", backgroundColor: "#34495E", borderRadius: "5px", overflow: "hidden", height: "8px" }}>
                <div style={{ width: `${skill.progress}%`, backgroundColor: "#1ABC9C", height: "100%" }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - 2/3 */}
        <div style={{ width: "66.67%", padding: "20px" }}>
          
          <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "5px" }}>About Me</h3>
          <p style={{ textAlign: "justify" }}>{about}</p>

          {/* Experience Section with Icon */}
          <h3 style={{ marginTop: "20px", borderBottom: "2px solid #007bff", paddingBottom: "5px" }}><HiBriefcase /> Experience</h3>
          {experienceList.map((exp, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <h4 style={{ marginBottom: "3px", color: "#007bff" }}>{exp.title}</h4>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {exp.company} | {exp.startMonth} {exp.startYear} - {exp.isWorking ? "Present" : `${exp.endMonth} ${exp.endYear}`}
              </p>
              <p style={{ textAlign: "justify" }}>{exp.description}</p>
            </div>
          ))}

          {/* Education Section with Icon */}
          <h3 style={{ marginTop: "20px", borderBottom: "2px solid #007bff", paddingBottom: "5px" }}><HiAcademicCap /> Education</h3>
          {educationList.map((edu, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <h4 style={{ marginBottom: "3px", color: "#007bff" }}>{edu.institute}</h4>
              <p style={{ fontSize: "14px", color: "#555" }}>{edu.degree} - {edu.fieldOfStudy}</p>
              <p>{edu.startYear} - {edu.endYear}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default PdfComponent;
