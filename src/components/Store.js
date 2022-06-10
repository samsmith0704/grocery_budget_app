import React from "react";
import { useParams } from "react-router-dom";
import { headers } from "../request_config";
/**TODO:
 * use product api to lookup products and display them with check boxes
 * allow user to add product to their cart
 */
const Store = () => {
  let params = useParams();

  //now should be able to look up products at specific krogers
  //https://api.kroger.com/v1/products?filter.term=milk&filter.brand=Kroger&filter.productId=0001111041660&filter.locationId=01400943
  const searchProducts = async (locationId) => {
    const response = await fetch(
      `https://api.kroger.com/v1/products?filter.term=milk&filter.brand=Kroger&filter.productId=0001111041660&filter.locationId=${locationId}`,
      {
        method: "get",
        headers: headers,
      }
    );
    const myJson = await response.json();

    console.log(myJson);
    return myJson;
  };
  return (
    <div>
      <h2>Store ID: {params.locationId}</h2>
      <button onClick={() => searchProducts(params.locationId)}>Click</button>
    </div>
  );
};

export default Store;
