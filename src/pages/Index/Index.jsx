import React from "react";

export default function Index() {
  return (
    <div>
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="First slide"
          />
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to={1}
            aria-label="Second slide"
          />
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to={2}
            aria-label="Third slide"
          />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="holder.js/900x500/auto/#777:#555/text:First slide"
              className="w-100 d-block"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>Description</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="holder.js/900x500/auto/#666:#444/text:Second slide"
              className="w-100 d-block"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>Description</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="holder.js/900x500/auto/#666:#444/text:Third slide"
              className="w-100 d-block"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>Description</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
