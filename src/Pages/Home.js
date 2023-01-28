import React, { useState } from "react";
import './Home.css'

import {useDispatch} from 'react-redux'
import { addUser } from "../store/actions/user";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  console.log(user);

  const handleAdd = (event)=>{
    event.preventDefault()
    dispatch(addUser(user))
    setUser({
      name: "",
      email: "",
      contact: "",
      address: "",
  
    })
  }
  return (
    <div className="home">
      <h1>Enter User Info</h1>
      <form className="home__container">
        <input
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          placeholder="Mobile No"
          type="number"
          name="contact"
          value={user.contact}
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          placeholder="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <button onClick={handleAdd}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
