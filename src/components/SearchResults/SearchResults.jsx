import "./SearchResults.scss";
import SearchRow from "./SearchRow";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <table key="srtable" className="table  table-bordered">
        <thead key="srth" className="thead-light">
          <tr>
            <th key={"thID"} scope="col">
              ID
            </th>
            <th key={"thTitle"} scope="col">
              Title
            </th>
            <th key={"thFIRST"} scope="col">
              First Name
            </th>
            <th key={"thLAST"} scope="col">
              Surname
            </th>
            <th key={"thEMAIL"} scope="col">
              Email
            </th>
            <th key={"thROOM"} scope="col">
              Room Num
            </th>
            <th key={"thCI"} scope="col">
              Check-in
            </th>
            <th key={"thCO"} scope="col">
              Check-out
            </th>
          </tr>
        </thead>
        <tbody key="srtb">
          {results.map((result) => (
            <SearchRow result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
