// Exporting Search component as default
export default function Search({ searchValue }) {
  // Returning JSX template for Search component
  return `
    <div class="mb-4">
      <label class="sr-only" for="search">Search champions</label>
      <input 
        type="text" 
        placeholder="Search champions..."
        class="p-2 border border-gray-300 rounded"
        id="search"
        value="${searchValue}"
        autofocus
      />
    </div>
  `;
}
// Utilizes the searchValue prop to initialize the input field with the current search query.
// Renders an input field for searching champions.
//
