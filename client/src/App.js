import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationSearchPage from "./pages/Destination search page/DestinationSearchPage";
import HotelDetails from "./pages/Hotel details/HotelDetails";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Book from "./pages/booking/Book";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DestinationSearchPage />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
