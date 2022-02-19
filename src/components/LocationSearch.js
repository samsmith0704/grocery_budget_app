/**
 * Implementing a search by zip code, which will display the addresses of Krogers in that zip code
 */
import React from "react";
import { useState } from "react";

const accessToken =
  "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiIsImV4cCI6MTY0NTMwODc2NywiaWF0IjoxNjQ1MzA2OTYyLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjkyNjAxZDY0LTI2N2UtNTk5Ny1iMjRmLTVkZjM2MTM1NmM5NiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjQ1MzA2OTY3NzYxMTI0ODMyLCJhenAiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiJ9.ISm1OxFWj0W-rFGU1MHNpiwx3V1kHmJxbVj1Jd047Xuvq0WpfYcZirFPjOifHBX1TJDjQ2PnlN1ZRdm0Vthy2PvWU6Fc7TOOmVMTemMM66GocwUlDonXoogiokb2Fy8SY8RuL7ieKxfMNxWd3414BT1ytJ0Vbm1-Gyd5ZDGvAZG2RmGd65BAM7uj_N9VOnRkCcs7KaqCht4iL00d1QXMcDBp5JmJf0cX99eGVxWi_Q_uJuVpygRvMQBeWQCoJ29LcG9ce5Fj7q1aKo3HibmbiXe4U-0xMiP9sqFfIVlxlnxZl18bxx6awzUIkilQeXc1MHbpEVBSIyvQtXMhUTJyMg";
const headers = {
  Authorization: `Bearer ${accessToken}`,
  Accept: "application/json",
};

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
      newOutput.push(result.data[i]);
    }

    setOutput(newOutput);
  };
  return (
    <div>
      <input id="myInput" type="text" />
      <input type="submit" value="Submit" onClick={onSubmit} />
      <br />

      {/* {output.map((element) => {
        return <h3>{element.address}</h3>;
      })} */}
    </div>
  );
};

export default LocationSearch;
