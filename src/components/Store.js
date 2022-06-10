import React from "react";
import { useParams } from "react-router-dom";

/**TODO:
 * use product api to lookup products and display them with check boxes
 * allow user to add product to their cart
 */
const Store = () => {
  let params = useParams();

  const getProducts = () => {};
  return (
    <div>
      <h2>Store ID: {params.locationId}</h2>
    </div>
  );
};

export default Store;
