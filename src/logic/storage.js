// --- START: src/logic/storage.js ---

// Imports required for Rehydration:
import { Project } from "./Project.js"; // Use named import for Project
import Todo from "./Todo.js"; // Use default import for Todo

// Key used for local storage
const storageKey = "todoAppData";

// Function to save the projects array to localStorage
// Note: This still only saves projects. Saving currentProjectId could be added later.
function saveState(projectsArray) {
  try {
    // Only save the projects array for now
    const jsonString = JSON.stringify(projectsArray);
    localStorage.setItem(storageKey, jsonString);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
}

// Function to load AND REHYDRATE data from localStorage
function loadState() {
  const savedDataString = localStorage.getItem(storageKey);
  if (savedDataString == null) {
    console.log("No saved data found, returning empty array.");
    return []; // Return empty array if nothing saved
  }

  // If data exists, try to parse and rehydrate
  try {
    const parsedData = JSON.parse(savedDataString);

    // Check if the parsed data is an array before proceeding
    if (Array.isArray(parsedData)) {
      // *** Start of Rehydration Logic ***
      console.log("Saved data found, rehydrating projects and todos...");
      const rehydratedProjects = parsedData.map((plainProject) => {
        // Create a real Project instance using data from the plain object
        const project = new Project(plainProject.name, plainProject.id);

        // Rehydrate the todos within this project
        if (Array.isArray(plainProject.todos)) {
          // Check if todos array exists and is valid
          project.todos = plainProject.todos.map((plainTodo) => {
            // Create a real Todo instance using data from the plain object
            // Ensure this argument order matches your Todo constructor!
            return new Todo(
              plainTodo.title,
              plainTodo.description,
              plainTodo.dueDate,
              plainTodo.priority,
              plainTodo.notes,
              plainTodo.isComplete,
              plainProject.id, // Assign parent project ID during rehydration
              plainTodo.id
            );
          });
        } else {
          // If loaded project has no valid 'todos' array, initialize it as empty
          console.warn(
            `Project "${plainProject.name}" loaded without a valid todos array.`
          );
          project.todos = [];
        }
        return project; // Return the Project class instance
      });

      console.log("Rehydration complete.");
      return rehydratedProjects; // Return the array of REAL Project instances
      // *** End of Rehydration Logic ***
    } else {
      // Parsed data wasn't an array - data corruption likely
      console.warn(
        "Loaded data is not an array. Clearing storage and returning default.",
        parsedData
      );
      localStorage.removeItem(storageKey); // Clear bad data
      return []; // Return default empty array
    }
  } catch (err) {
    // Handle errors during JSON.parse
    console.error("Error parsing state from localStorage:", err);
    localStorage.removeItem(storageKey); // Clear corrupt data
    return []; // Return default empty array on error
  }
}

// Export the functions and key
export { saveState, loadState, storageKey };
