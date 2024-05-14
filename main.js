// Importing necessary components and state management
import Search from "./src/components/search"; // Importing Search component
import Table from "./src/components/table"; // Importing Table component
import { State } from "./src/state"; // Importing State class for managing app state

const appElement = document.getElementById("app"); // Getting reference to app element in DOM

const state = new State(); // Creating a new instance of State class for managing app state

// render the UI
function render(st) {
  appElement.innerHTML = `
    ${Search({ searchValue: st.searchState })} 
    ${Table({
      // Rendering Table component with data and headers
      col1: st.data.belts, // Passing belt data as col1 prop
      col2: st.data.champions, // Passing champion data as col2 prop
      col1Header: "Belt", //  header for column 1
      col2Header: "Champion", //  header for column 2
    })}
  `;

  const searchInput = document.getElementById("search"); // Getting reference to search input element
  const searchValueLen = searchInput.value.length; // Getting length of search input value

  searchInput.focus(); // Focusing on search input
  searchInput.setSelectionRange(searchValueLen, searchValueLen); // Setting selection range to the end of the search input value

  searchInput.addEventListener("input", (e) => {
    // Updating searchState in the state object when input changes
    // eslint-disable-next-line no-param-reassign -- It's a class with a setter!
    st.searchState = e.target.value; // Updating searchState in state object with new input value
    render(st);
  });
}

render(state); // Initial rendering of UI with initial state
// Utilizes the render function to dynamically update the UI based on changes in the application state.
