import React, { useState, useEffect } from "react";
import RandomColor from "../RandomColor";

export default function ImageSlider(props) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setImages(data);
        console.log(data);
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (props.url) {
      fetchImages(props.url);
    }
  }, [props.url]);

  if (loading) {
    return <div>Loading, please wait!</div>;
  }

  if (errorMessage) {
    return <div>Some error has occurred: {errorMessage}</div>;
  }

  return (
    <div className="container-fluid my-height bg-light">
      <div className="row">
        {images && images.length > 0 ? (
          images.map((item, index) => (
            <div className="col-4 d-flex justify-content-center align-items-center mb-4 mt-4" key={index}>

              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={item.download_url}
                  alt={`Image ${index + 1}`}
                />
              </div>
            </div>
          ))
        ) : (
          <div>No images available</div>
        )}
      </div>
    </div>
  );
}
