// Importing necessary data and utility functions
import { BELTS, CHAMPIONS } from "./data"; // Importing BELTS and CHAMPIONS data
import { filterItemsByTerm } from "./lib"; // Importing filterItemsByTerm utility function

// Definition of State class for managing application state
export class State {
  // Defining private properties for State class
  #belts = BELTS; // Private property for belt data

  #champions = CHAMPIONS; // Private property for champion data

  #search = ""; // Private property for search query

  get data() {
    // Getter method for data property
    const filteredResults = filterItemsByTerm({
      // Filtering data based on search query
      terms1: this.#champions, // Passing champions data as terms1
      terms2: this.#belts, // Passing belts data as terms2
      actionTerm: this.#search, // Passing search query as actionTerm
    });

    return {
      // Returning filtered data
      champions: filteredResults.terms1, // Returning filtered champions data
      belts: filteredResults.terms2, // Returning filtered belts data
    };
  }

  get searchState() {
    // Getter method for searchState property
    return this.#search; // Returning search query
  }

  set searchState(value) {
    // Setter method for searchState property
    this.#search = value; // Updating search query with new value
  }
}
