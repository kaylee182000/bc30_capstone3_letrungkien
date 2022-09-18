import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductApi } from "../../redux/reducers/productReducer";
import { NavLink } from "react-router-dom";

export default function Index() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getAllProduct = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };

  React.useEffect(() => {
    getAllProduct();
  });

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-lg-4 col-12 mt-2" key={index}>
          <div className="card shadow p-3 mb-4 bg-body rounded border-white">
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <div className="d-flex flex-column">
                <div>
                  <p className="fw-semibold">{item.name}</p>
                  <p className="fw-semibold">{item.price}$</p>
                </div>
                <NavLink className="btn btn-dark" to={`/detail/${item.id}`}>
                  View detail
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <div>
              <img
                src="https://www.glab.vn/storage/uploads/advert/5ee88f140efd4.jpg"
                width="100%"
                height="auto"
                alt="..."
              />
            </div>
            {/* <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div> */}
          </div>
          <div className="carousel-item">
            <div>
              <img
                src="https://www.glab.vn/storage/uploads/advert/62da3e54b0a26.jpg"
                width="100%"
                height="auto"
                alt="..."
              />
            </div>
            {/* <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div> */}
          </div>
          <div className="carousel-item">
            <div>
              <img
                src="https://www.glab.vn/storage/uploads/advert/5f47b8a34de8f.jpg"
                width="100%"
                height="auto"
                alt="..."
              />
            </div>
            {/* <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <h2 className="text-center m-4">-Product-</h2>
        <div className="row">{renderProduct()}</div>
      </div>
    </div>
  );
}
