import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";


function Home() {
  return (
    <>
     
      <Navbar/>
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="hero-text">
        <h1>Discover the World, Create Memories</h1>

        <p>Unlock the beauty of the world and make lifelong memories.</p>
      </div>
    </>
  );
}

export default Home;
