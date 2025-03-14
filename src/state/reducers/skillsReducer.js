const skillReducer = (skills = [], action) => {
    switch (action.type) {
      case "ADD_SKILL":
        return [...skills, action.payload];
  
      case "REMOVE_SKILL":
        const updatedSkills = [...skills];
        updatedSkills.splice(action.payload, 1);
        return updatedSkills;
  
      case "UPDATE_SKILL_PROGRESS":
        // This action updates the progress of an existing skill
        return skills.map((skill, index) =>
          index === action.payload.index
            ? { ...skill, progress: action.payload.progress }
            : skill
        );
  
      default:
        return skills;
    }
  };
  
  export default skillReducer;
  