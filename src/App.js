import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from './navbar'
import Footer from './footer'

const App = () => {
  const [arr, setarr] = useState([]);
  useEffect(() => {
    var promise = new Promise((resolve, reject) => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=R4s5xcOxoYklREakJOSoeNMCOK4tpM8iqg6slJ15&count=10&hd=true"
        )
        .then((res) => {
          resolve(res.data);
          reject("not found");
        });
    });
    promise.then((res) => {
      setarr(res);
    });
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container">
        {arr.map((val, i) => {
          return (
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators"></div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={val.hdurl}
                    key={i}
                    className="d-block w-100 image"
                    alt="img"
                  ></img>
                  <div className="badge text-wrap" >
                    {val.explanation}
                  </div>
                  <br />
                </div>
              </div>
              <br />
              <br />
            </div>
          );
        })}
        <div className="end">Refresh to read more</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
