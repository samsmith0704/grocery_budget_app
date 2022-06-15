import React from "react";
import { useParams } from "react-router-dom";
import { headers } from "../request_config";
import ProductTable from "./ProductTable";
/**TODO:
 * use product api to lookup products and display them with check boxes
 * allow user to add product to their cart
 */
const Store = () => {
  let params = useParams();

  //now should be able to look up products at specific krogers
  const searchProducts = async (locationId, category) => {
    const response = await fetch(
      `https://api.kroger.com/v1/products?filter.locationId=${locationId}&filter.term=${category}&filter.limit=20`,
      {
        method: "get",
        headers: headers,
      }
    );
    const myJson = await response.json();

    console.log(myJson);
    return myJson;
  };

  const generateProductTable = (category) => {
    const productData = searchProducts(params.locationId, category);
    return <ProductTable data={productData} />;
  };

  return (
    <div>
      <h2>Store ID: {params.locationId}</h2>
      <select id="category_select">
        <option value="None"></option>
        <option value="dairy">Dairy</option>
        <option value="fruit">Fruit</option>
        <option value="vegetables">Vegetables</option>
      </select>
      {/* <button onClick={() => searchProducts(params.locationId)}>Click</button> */}
      <button
        onClick={() => {
          generateProductTable(
            document.getElementById("category_select").value
          );
        }}
      >
        Click
      </button>
    </div>
  );
};
export default Store;
