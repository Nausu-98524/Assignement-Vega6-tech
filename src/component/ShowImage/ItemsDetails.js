import React, { useRef } from "react";
import "./iyem.css";
import img from "./desktop-img.jpg";
import data from "../Data/data";
import { useParams } from "react-router-dom";

const ItemsDetails = () => {
  const imageRef = useRef(null);
  const textareaRef = useRef(null);

  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === parseInt(id));

  const handleDownload = () => {
    const image = imageRef.current;
    const textarea = textareaRef.current;

    const textFile = new Blob([textarea.value], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(textFile);
    link.download = "textfile.txt";
    link.click();

    const imageLink = document.createElement("a");
    imageLink.href = image.src;
    imageLink.download = "image.jpg";
    imageLink.click();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Add Caption Page
      </h1>
      {selectedItem && (
        <div className="container-fluid " style={{ marginTop: "50px" }}>
          <div class="album py-5 bg-body-tertiary">
            <div class="container ">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={selectedItem.imageUrl} alt="" ref={imageRef} />
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <nav class="navbar navbar-light bg-light ">
                      <span class="navbar-brand mb-0 ml-1 h1 ">
                        &nbsp;&nbsp; Add Caption
                      </span>
                    </nav>

                    <div className="container">
                      <div className="row justify-content-start">
                        <div className="col-lg-6">
                          <textarea
                            className="form-control custom-input"
                            placeholder="Enter Your Text Here..."
                            rows={10}
                            ref={textareaRef}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                      onClick={handleDownload}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsDetails;
