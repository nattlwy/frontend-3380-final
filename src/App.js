import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import BookList from "./components/booktList";
import AddNewBook from "./components/addNewBook";

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<BookList />} />
        <Route path="/create-book" element={<AddNewBook />} />
        {/* <Route path="/update/:id" element={<EditReview />} /> */}
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
