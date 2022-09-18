import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/reducers/productReducer";

export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const params = useParams();

  const getProductDetailApi = () => {
    let { id } = params;
    const action = getProductDetail(id);
    dispatch(action);
  };

  React.useEffect(() => {
    getProductDetailApi();
  }, [params.id]);

  return (
    <div className="container">
      <div className="row mt-5 justify-content-between">
        <div className="col-lg-4 col-12">
          <img
            className="w-100"
            src={productDetail.image}
            alt={productDetail.name}
          />
        </div>
        <div className="col-lg-6 col-12">
          <div className="row mb-4 justify-content-between">
            <h3 className="col-8">{productDetail.name}</h3>
            <p className="col-2 fw-semibold fs-5">{productDetail.price}$</p>
          </div>
          <p className="mb-4">{productDetail.description}</p>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Size</option>
            <option value="36">36</option>
            <option value="37">337</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>

          </select>
          <div className="mt-3">
            <button className="btn btn-light me-2">+</button>
            <span>1</span>
            <button className="btn btn-light ms-2">-</button>
          </div>
          <button className="btn btn-dark mt-3">Add to Cart</button>
        </div>
      </div>
      <h3 className="text-center m-4">Related Product</h3>
      <div className="row mt-2">
        {/*toán tử ?: optional chaining */}
        {productDetail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-lg-4 col-12 mt-2" key={index}>
              <div className="card shadow p-3 mb-5 bg-body rounded border-white">
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <div className=" row justify-content-between">
                    <div className="col-xl-8 col-12">
                      <p className="fw-bold">{item.name}</p>
                    </div>
                    <div className="col-xl-3 col-12">
                      <p className="fw-semibold">{item.price}$</p>
                    </div>
                  </div>
                  <NavLink className="btn btn-dark" to={`/detail/${item.id}`}>
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
