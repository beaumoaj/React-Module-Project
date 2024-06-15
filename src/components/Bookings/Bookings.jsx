import { useState } from "react";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };
  const saveBooking = (e) => {
    e.preventDefault();
    const form = e.target.form;
    const booking = {
      id: bookings.length + 1,
      title: form.title.value,
      firstName: form.firstName.value,
      surname: form.surname.value,
      email: form.email.value,
      roomId: form.roomId.value,
      checkInDate: form.checkInDate.value,
      checkOutDate: form.checkOutDate.value,
    };
    form.reset();
    setBookings([...bookings, booking]);
    //return false;
  };

  return (
    <main className="bookings">
      <Search search={search} />
      {<SearchResults results={bookings} />}
      <form>
        <label htmlFor="title">Title:</label>
        <select id="title" name="title">
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" />
        <label htmlFor="surname">Surname:</label>
        <input type="text" id="surname" name="surname" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" autocomplete="off" />
        <label htmlFor="roomId">Room ID:</label>
        <input type="number" id="roomId" name="roomId" />
        <label htmlFor="checkInDate">Check In Date:</label>
        <input type="date" id="checkInDate" name="checkInDate" />
        <label htmlFor="checkOutDate">Check Out Date:</label>
        <input type="date" id="checkOutDate" name="checkOutDate" />
        <br />
        <button onClick={saveBooking}>Submit</button>
      </form>
    </main>
  );
};

export default Bookings;
