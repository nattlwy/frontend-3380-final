import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CreatePlanet() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const bookvar = {
      title: title,
      author: author,
      description: description
    };

    axios
      .post('https://backend-3380-final.onrender.com', bookvar)
      .then((res) => {
        window.location = '/';
      });
  };

  return (

    <div className="CreateBook">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <br />
          <Link
              to='/'
              className='btn btn-info float-right'
            >
              Show Book List
            </Link>
          {/* <a className="btn btn-info float-left" href="/">Show BooK List</a> */}
        </div>
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Add Book</h1>
          <p className="lead text-center">Create new book</p>
          <form novalidate="" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                class="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                spellcheck="false"
                data-ms-editor="true"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Author"
                name="author"
                class="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                spellcheck="false"
                data-ms-editor="true"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Describe this book"
                name="description"
                class="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                spellcheck="false"
                data-ms-editor="true"
              />
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
   
  );
}
