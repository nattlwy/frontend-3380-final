import '../styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar from './navbar';
import { Link } from 'react-router-dom';

const BookCard = (props) => (

    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books" 
        height="200" 
      />
      <div className="desc">
        <h2><a href="/show-book/123id">{props.title}</a></h2>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
      </div>

    <button className="remove-card" onClick={() => props.deleteBook(props.key)}>✖</button>

</div>
 

);

{/* <div class="list">
<div class="card-container">
  <img
    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
    alt="Books"
    height="200"
  />
  <div class="desc">
    <h2><a href="/show-book/123id">React.JS 101</a></h2>
    <h3>Raymond Gallagher</h3>
    <p>Introduction to React.JS</p>
  </div>
</div>
</div> */}

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://backend-3380-final.onrender.com')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList..');
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete('https://backend-3380-final.onrender.com/' + id, {})
      .then((response) => {
        console.log(response.data);
        //refreshing instead of only changing frontend
        setBooks(books.filter((el) => el._id !== id));
        // window.location = '/';
      });


  };

  const bookList =
    books.length === 0
      ? 'there is no book record!'
      : books.map((book) => <BookCard title={book.title} key={book._id} author={book.author} description={book.description} deleteBook={deleteBook}/>);



  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-info float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div> 

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

// export default function PlanetList() {
//   const [planets, setPlanetList] = useState([]);
//   useEffect(() => {
//     axios
//       .get('https://planetcard-backend-api.onrender.com/planets/')
//       .then((response) => {
//         setPlanetList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const deletePlanet = (id) => {
//     axios
//       .delete('https://planetcard-backend-api.onrender.com/planets/delete/' + id)
//       .then((response) => {
//         console.log(response.data);
//         //refreshing instead of changing frontend
//         window.location = '/';
//       });

//     // setPlanetList(planets.filter((el) => el._id !== id));
//   };

// //   const editReview = (id) => {
// //     window.location = '/update/' + id;
// //   };

//   return (
//     <div>
//       <Navbar />
//         <div className='container'>
//           {planets.map((planet) => {
//             return (
//               <PlanetCard
//                 name={planet.name}
//                 diameter={planet.diameter}
//                 moons={planet.moons}
//                 desc={planet.desc}
//                 url={planet.url}
//                 keyt={planet._id}
//                 deletePlanet={deletePlanet}
//               />
//             );
//           })}
//           </div>
//     </div>
//   );
// }
