import React from "react";

const ProductTable = ({ data }) => {
  console.log(data);
  const productList = data?.data?.map((prod) => {
    return prod.description;
  });

  return <div>{productList}</div>;
};

export default ProductTable;
