import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector((state) => state.productReducer);
  //console.log(cart)
  //const dispatch = useDispatch();

  //map la san pham trong cart
  const renderCart = () => {
    return cart.map((prod) => {
      return (
        <tr className="table-light text-center">
          <td scope="row">{prod.id}</td>
          <td>
            <img src={prod.image} alt="" width={50}/>
          </td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <button className="btn btn-dark mx-2">+</button>
            <span>{prod.count}</span>
            <button className="btn btn-dark mx-2">-</button>
          </td>
          <td></td>
          <td>
            <button className="btn btn-secondary me-2">Edit</button>
            <button className="btn btn-dark">Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">-Carts-</h2>
      <div className="table-responsive mt-5 mb-5">
        <table
          className="table table-striped
  table-hover	
  table-borderless
  table-dark
  align-middle"
        >
          <thead className="table-light"></thead>
          <tbody>
            <tr className="text-center">
              <th>Id</th>
              <th>Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quatity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody className="table-group-divider">
            {/* <tr className="table-light text-center">
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button className="btn btn-dark mx-2">+</button>
                <span>1</span>
                <button className="btn btn-dark mx-2">-</button>
              </td>
              <td></td>
              <td>
                <button className="btn btn-secondary me-2">Edit</button>
                <button className="btn btn-dark">Delete</button>
              </td>
            </tr> */}
            {renderCart()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
