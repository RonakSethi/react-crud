import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    console.log("Before load home page ");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link className="btn btn-primary mr-2">View</Link>
                    <Link className="btn btn-outline-primary mr-2">Edit</Link>
                    <Link className="btn btn-danger mr-2">Delete</Link>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
