/**
 * Implementing a search by zip code, which will display the addresses of Krogers in that zip code
 */
import React from "react";
import { useState } from "react";
import StoreHeader from "./StoreHeader";
import { headers } from "../request_config";
import { topNav } from "../Styles";
import { Outlet } from "react-router-dom";

const searchStoreByZip = async (zip_code) => {
  const response = await fetch(
    `https://api.kroger.com/v1/locations?filter.zipCode.near=${zip_code}&filter.chain=Kroger`,
    {
      method: "get",
      headers: headers,
    }
  );
  const myJson = await response.json();

  return myJson;
};

const LocationSearch = () => {
  const [output, setOutput] = useState([]);

  const onSubmit = async () => {
    const searchTerm = document.getElementById("myInput").value;
    let result = await searchStoreByZip(searchTerm);
    const newOutput = [];
    console.log(result.data);
    for (let i = 0; i < result.data.length; i++) {
      newOutput.push(result.data[i].address?.addressLine1);
    }

    setOutput(newOutput);
  };
  return (
    <div>
      <input id="myInput" type="text" />
      <input type="submit" value="Submit" onClick={onSubmit} />
      <br />
      <div style={topNav}>
        {output.map((store) => {
          return (
            <li>
              <StoreHeader storeName={store} />
            </li>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default LocationSearch;
