const selectLanguage = (languageId, componentLanguage = "EN") => {
  let language;
  switch (languageId) {
    case "EN":
      language = componentLanguage.english;
      break;
    case "HR":
      language = componentLanguage.croatian;
      break;
    case "DE":
      language = componentLanguage.german;
      break;
    default:
      language = componentLanguage.english;
      break;
  }
  return language;
};

export default selectLanguage;
