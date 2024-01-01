import React, { useState } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "./Navbar";


function AddTour() {
  const [tourid, settourid] = useState("");
  const [tourname, settourname] = useState("");
  const [description, setdescription] = useState("");
  const [destination, setdestination] = useState("");
  const [price, setprice] = useState("");
  const [departuredate, setdeparturedate] = useState("");
  const [durationdays, setdurationdays] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const Add = () => {
    const formData = new FormData();
    formData.append("tour_id", tourid);
    formData.append("tour_name", tourname);
    formData.append("description", description);
    formData.append("destination", destination);
    formData.append("price", price);
    formData.append("departure_date", departuredate);
    formData.append("duration_days", durationdays);

    images.forEach((img) => {
      formData.append("image", img);
    });


    let token=localStorage.getItem('token')
    axios
      .post("https://tour-management-app-backend.vercel.app//tour/add", formData, {
        headers: {
           'token':token
        }
        })
      .then((response) => {
        console.log(response);
        const result = response.data;
        const { status, message } = result;
        if (status === "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
    <Navbar/>
      <section className="vh-300">
        <div className="container  " id="cont">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" id="card">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">ADD TOUR</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Tour ID"
                      value={tourid}
                      onChange={(e) => settourid(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Tour Name"
                      value={tourname}
                      onChange={(e) => settourname(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Destination"
                      value={destination}
                      onChange={(e) => setdestination(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Departure Date"
                      value={departuredate}
                      onChange={(e) => setdeparturedate(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Departure Durations"
                      value={durationdays}
                      onChange={(e) => setdurationdays(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="file"
                      className="form-control form-control-lg"
                      multiple
                      onChange={handleImageUpload}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={Add}
                  >
                    Add Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AddTour;

