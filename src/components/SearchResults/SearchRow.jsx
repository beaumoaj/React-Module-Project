import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const SearchRow = ({ result }) => {
  const [selected, setSelected] = useState(false);

  function handleChange(e) {
    setSelected(!selected);
  }

  //console.log("---SearchRow--- " + result.id);
  //console.log(result);
  dayjs.extend(customParseFormat);
  const startDate = dayjs(result.checkInDate, "YYYY-MM-DD");
  const endDate = dayjs(result.checkOutDate, "YYYY-MM-DD");
  const days = endDate.diff(startDate, "day");
  let format = "";
  if (selected) {
    format = "search-results__itemselected";
  }
  return (
    <tr
      key={"searchrow_tr_" + result.id}
      className={"search-results__item " + format}
      onClick={handleChange}
    >
      <td key={"search_row_id_" + result.id}>{result.id}</td>
      <td key={"title_" + result.id}>{result.title}</td>
      <td key={"first_" + result.id}>{result.firstName}</td>
      <td key={"last_" + result.id}>{result.surname}</td>
      <td key={"email_" + result.id}>{result.email}</td>
      <td key={"roomID_" + result.id}>{result.roomId}</td>
      <td key={"checkin_" + result.id}>{result.checkInDate}</td>
      <td key={"checkout_" + result.id}>{result.checkOutDate}</td>
      <td key={"days_" + result.id}>{days}</td>
    </tr>
  );
};

export default SearchRow;
