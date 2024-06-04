const SearchRow = ({ result }) => {
  console.log(result);
  return (
    <tr key={"tr" + result.id}>
      <td key={"id_" + result.id}>{result.id}</td>
      <td key={"title_" + result.id}>{result.title}</td>
      <td key={"first_" + result.id}>{result.firstName}</td>
      <td key={"last_" + result.id}>{result.surname}</td>
      <td key={"email_" + result.id}>{result.email}</td>
      <td key={"roomID_" + result.id}>{result.roomId}</td>
      <td key={"checkin_" + result.id}>{result.checkInDate}</td>
      <td key={"checkout_" + result.id}>{result.checkOutDate}</td>
    </tr>
  );
};

export default SearchRow;
