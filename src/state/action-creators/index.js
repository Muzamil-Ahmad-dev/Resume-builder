// Action to add a skill
export const addSkill = (skill) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_SKILL",
            payload: skill
        });
    };
};

// Action to remove a skill by index
export const removeSkill = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_SKILL",
            payload: index
        });
    };
};

// Action to update skill progress by index
export const updateSkillProgress = (index, progress) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SKILL_PROGRESS",
            payload: { index, progress }
        });
    };
};

// Action to manage the profile image/file
export const manageFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_FILE",
            payload: file
        });
    };
};

// Action to manage the "about me" section
export const manageAbout = (about) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_ABOUT",
            payload: about
        });
    };
};

// Action to manage the general profile data
export const manageProfile = (profile) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_PROFILE",
            payload: profile
        });
    };
};

// Action to add a new experience
export const addExperience = (form) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EXPERIENCE",
            payload: form
        });
    };
};

// Action to edit an existing experience
export const editExperience = (form) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_EXPERIENCE",
            payload: form
        });
    };
};

// Action to remove an experience by index
export const removeExperience = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EXPERIENCE",
            payload: index
        });
    };
};

// Action to add a new education entry
export const addEducation = (form) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EDUCATION",
            payload: form
        });
    };
};

// Action to edit an existing education entry
export const editEducation = (form) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_EDUCATION",
            payload: form
        });
    };
};

// Action to remove an education entry by index
export const removeEducation = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EDUCATION",
            payload: index
        });
    };
};
