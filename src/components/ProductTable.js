import React from "react";
import { Button, Table } from "react-bootstrap";

/**
 * TODO:
 * Figure out number, aisle, checkbox
 * @param {*} param0
 * @returns
 */
const ProductTable = ({ data }) => {
  console.log(data);
  const productList = data?.data?.map((prod) => {
    const row = (
      <tr>
        <td>99</td>
        <td> {prod.description}</td>
        <td>{prod.brand}</td>
        <td> AISLE NUMBER</td>
        <td>{prod.items[0].price?.regular}</td>
      </tr>
    );
    return row;
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Aisle</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((row) => {
            return row;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
