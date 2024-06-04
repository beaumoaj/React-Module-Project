import "./SearchResults.scss";
import SearchRow from "./SearchRow";

const SearchResults = ({ results }) => {
  return (
    <div key="search_results" className="search-results">
      <table key="srtable" className="table  table-bordered">
        <thead key="srth" className="thead-light">
          <tr>
            <th key={"srthID"} scope="col">
              ID
            </th>
            <th key={"srthTitle"} scope="col">
              Title
            </th>
            <th key={"srthFIRST"} scope="col">
              First Name
            </th>
            <th key={"srthLAST"} scope="col">
              Surname
            </th>
            <th key={"srthEMAIL"} scope="col">
              Email
            </th>
            <th key={"srthROOM"} scope="col">
              Room Num
            </th>
            <th key={"srthCI"} scope="col">
              Check-in
            </th>
            <th key={"srthCO"} scope="col">
              Check-out
            </th>
          </tr>
        </thead>
        <tbody key="srtb">
          {results.map((result, index) => (
            <SearchRow key={"xyz" + index} result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
