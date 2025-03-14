const profileReducer = (
    profile = {
        name: "Your Name",
        location: "City, Name",
        github: "",
        linkedin: "",
        website: "",
        email: "",
        contact: "",
        position: "Your Position",
        tagline: "Describe yourself in one line",
    },
    action
) => {
    switch (action.type) {
        case "MANAGE_PROFILE":
            return { ...profile, ...action.payload };

        case "ADD_LANGUAGE":
            return { ...profile, languages: [...profile.languages, action.payload] };

        case "REMOVE_LANGUAGE":
            return {
                ...profile,
                languages: profile.languages.filter((_, index) => index !== action.payload)
            };

        case "UPDATE_LANGUAGE_PROFICIENCY":
            return {
                ...profile,
                languages: profile.languages.map((language, index) =>
                    index === action.payload.index
                        ? { ...language, proficiency: action.payload.proficiency }
                        : language
                )
            };

        case "ADD_HOBBY":
            return { ...profile, hobbies: [...profile.hobbies, action.payload] };

        case "REMOVE_HOBBY":
            return {
                ...profile,
                hobbies: profile.hobbies.filter((_, index) => index !== action.payload)
            };

        default:
            return profile;
    }
};

export default profileReducer;
