// Renders structured/tabular data
const TableResponse = ({ table }) => (
  <table className="table-auto w-full border mt-2">
    <thead>
      <tr>
        {Object.keys(table[0]).map((key) => (
          <th key={key} className="border p-2">{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {table.map((row, idx) => (
        <tr key={idx}>
          {Object.values(row).map((val, i) => (
            <td key={i} className="border p-2">{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
export default TableResponse;
