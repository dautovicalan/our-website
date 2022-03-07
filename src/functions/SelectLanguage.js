const selectLanguage = (languageId, componentLanguage) => {
  let language;
  switch (languageId) {
    case 0:
      language = componentLanguage.english;
      break;
    case 1:
      language = componentLanguage.croatian;
      break;
    case 2:
      language = componentLanguage.german;
      break;
    default:
      language = componentLanguage.english;
      break;
  }
  return language;
};

export default selectLanguage;
