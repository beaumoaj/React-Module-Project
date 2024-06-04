const SearchRow = ({ result }) => {
  console.log(result);
  return (
    <tr key={"tr" + result.id}>
      <td key={"id" + result.id}>{result.id}</td>
      <td key={"title" + result.id}>{result.title}</td>
      <td key={"first" + result.id}>{result.firstName}</td>
      <td key={"last" + result.id}>{result.surname}</td>
      <td key={"email" + result.id}>{result.email}</td>
      <td key={"roomID" + result.id}>{result.roomId}</td>
      <td key={"checkin" + result.id}>{result.checkInDate}</td>
      <td key={"checkout" + result.id}>{result.checkOutDate}</td>
    </tr>
  );
};

export default SearchRow;
