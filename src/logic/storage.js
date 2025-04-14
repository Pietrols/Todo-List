export { saveState, loadState, storageKey };

// Key used for local storage
const storageKey = "todoAppData";

// Function to convert project into a string, saving it in local storage and handling error if unable to save.
function saveState(projectsArray) {
  const JsonString = JSON.stringify(projectsArray);

  try {
    localStorage.setItem(storageKey, JsonString);
  } catch (err) {
    console.error("Error saving state:", err);
  }
}

// Function to convert stored data back from Json Ns display when page is reloaded.
function loadState() {
  const savedDataString = localStorage.getItem(storageKey);
  if (savedDataString == null) return [];
  else
    try {
      const parsedData = JSON.parse(savedDataString);
      if (Array.isArray(parsedData)) {
        return parsedData;
      } else {
        console.warn(
          "Loaded data is not an array. Clearing storage and returning default."
        );
        localStorage.removeItem(storageKey);
        return [];
      }
    } catch (err) {
      console.error("Error loading state:", err);
      localStorage.removeItem(storageKey);
      return [];
    }
}
