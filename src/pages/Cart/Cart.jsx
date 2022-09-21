import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector((state) => state.productReducer);
  console.log(cart)
  //const dispatch = useDispatch();

  //map la san pham trong cart
  const renderCart = () => {
    return cart.map((prod) => {
      return (
        <tr className="table-light text-center">
          <td scope="row"></td>
          <td>{prod.id}</td>
          <td>{prod.image}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
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
              <th></th>
              <th>id</th>
              <th>img</th>
              <th>name</th>
              <th>price</th>
              <th>quatity</th>
              <th>total</th>
              <th>action</th>
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
