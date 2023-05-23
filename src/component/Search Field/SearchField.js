import React, { useState } from "react";
import "./searchfield.css";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

import data from "../Data/data";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    const filterdData = data.filter((item) => {
      if (searchTerm === "") {
        return null;
      } else {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setFilterData(filterdData);
  };

  return (
    <div>
      <main>
        <div className="input_field">
          <label for="fname">Name :-</label>
          <input
            type="text"
            className=" inputField custom-inputf"
            placeholder="Enter Your Full Name"
          />
          <br />

          <label for="lname">Email :-</label>
          <input
            type="text"
            className="inputField custom-inputf"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="row justify-content-center mb-2">
          <div className="col-sm-6 custom-searchbar">
            <div className="input-group">
              <input
                onChange={handleSearchChange}
                type="text"
                class="form-control"
                placeholder="Enter Your Search"
              />
              <div className="input-group-append ">
                <button
                    style={{width:"60px"}}
                  className="btn btn-primary "
                  onClick={handleClick}
                  type="button"
                >
                <BsSearch 
                 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="album py-5 bg-body-tertiary ">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {filterData.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img src={item.imageUrl} alt="" />
                    <div className="card-body">
                      <p className="card-text">Title:-{item.title}</p>
                    </div>
                    <div class="button-container">
                      <Link
                        to={`/details/${item.id}`}
                        className="btn btn-outline-primary"
                      >
                        Open Page
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchField;
