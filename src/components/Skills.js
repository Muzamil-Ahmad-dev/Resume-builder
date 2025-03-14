import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAddCircleOutline, MdClose } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function Skills() {
  const skills = useSelector(state => state.skills); // Ensure skills contain both skill name and progress
  const dispatch = useDispatch();
  const { addSkill, removeSkill, updateSkillProgress } = bindActionCreators(actionCreators, dispatch);

  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [progress, setProgress] = useState(0);  // Track progress for new skills
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => setInput(e.target.value);
  const handleProgressChange = (e) => setProgress(e.target.value);  // Handle progress slider change

  const handleSkills = (e) => {
    e.preventDefault();
    const valid = e.currentTarget;
    if (!valid.checkValidity()) {
      setValidated(true);
    } else {
      addSkill({ skill: input, progress: Number(progress) }); // Add new skill with progress
      setInput('');
      setProgress(0); // Reset progress
    }
  };

  const handleDelete = (id) => {
    removeSkill(id);
  };

  const getProgressBarColor = (progress) => {
    if (progress < 30) return 'bg-danger';
    if (progress < 60) return 'bg-warning';
    return 'bg-success';
  };

  useEffect(() => {
    // Logic to update if skills are empty
  }, [skills]);

  return (
    <Row className="justify-content-center mt-2">
      <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
        <h5 className="m-0">Skills</h5>
        <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow} />
      </Col>
      <Col md={8} sm={12}>
        <Row className="border-bottom pt-3">
          <Col md={12} className="d-flex flex-wrap">
            {skills.map((skillObj, id) => (
              <div key={id} className="mb-3 w-100">
                <ProgressBar
                  now={skillObj.progress}
                  label={`${skillObj.skill} - ${skillObj.progress}%`}
                  variant={getProgressBarColor(skillObj.progress)}  // Dynamic color based on progress
                  style={{
                    height: '40px',  // Increased height for better visibility
                    borderRadius: '5px',  // Rounded corners
                    color: '#fff',  // White text on the progress bar
                    fontSize: '14px',  // Smaller font size for the label
                    display: 'flex',  // Flexbox to center the skill inside the bar
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Col>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Add Skill</Modal.Title>
          <MdClose size={30} className="rounded edit" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSkills}>
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Enter Skill"
                value={input}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skill Progress</Form.Label>
              <Form.Control
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                style={{
                  height: '20px', // Increased height of the range slider
                  borderRadius: '5px', // Rounded corners for the range input
                }}
              />
              <Form.Text>{`${progress}%`}</Form.Text>
            </Form.Group>

            <button type="submit" className="rounded edit m-0 mx-2">
              Add Skill
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </Row>
  );
}

export default Skills;
