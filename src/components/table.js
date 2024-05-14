// Exporting Table component as default
export default function Table({ col1, col2, col1Header, col2Header }) {
  // Returning JSX template for Table component
  return `
    <table class="container mx-auto text-left max-w-fit">
      <thead>
        <tr>
          <th>${col1Header}</th>
          <th>${col2Header}</th>
        </tr>
      </thead>

      <tbody>
        ${col1
          .map(
            (item, index) => `
          <tr>
            <td>${item}</td>
            <td>${col2[index] || ""}</td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}
//    Iterates over the col1 array (assuming both col1 and col2 have the same length) and maps each item to a table row. For each item, displays the corresponding data in col1 and col2.
