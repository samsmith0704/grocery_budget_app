/**
 * Implementing a search by zip code, which will display the addresses of Krogers in that zip code
 */
import React from "react";
import { useState } from "react";

const accessToken =
  "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiIsImV4cCI6MTY0NDg2MTQyNCwiaWF0IjoxNjQ0ODU5NjE5LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjkyNjAxZDY0LTI2N2UtNTk5Ny1iMjRmLTVkZjM2MTM1NmM5NiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjQ0ODU5NjI0NTEzNjgwMzg5LCJhenAiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiJ9.iYkgygYuKc2qhrNGBdaOcls5NZ8E09FVPXGsR06zLlxJbjziQjfnjhzP70NU0lvYbe0wE7Tt9WcpL5elQ75XzR2TMeicjJHBCPARSgL8Dcpl2Hq3Itct652Bi0fZnyWurXdnAQ5QR5pbrxAW_Mw-rdkYWvCnqSj0Fy2viar8rD8BdQbhNJ6Y0YQ9rnYdXmWkPyaTgahG7Y3FwOjmUQoTLerEc2E0VRXGL6acXUiKsEh8ry-Y22zm88hJqyS3TAXag59PbU0JhdjPcWW8Gz3sLxzj_KAj8HUJmMdpo0-PwNcr2X1mjfNFYCZ_uoiGk3G9ww5Ff6B9357c2-v2RIWBiA";
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
  const [output, setOutput] = useState("");

  const onSubmit = async () => {
    const searchTerm = document.getElementById("myInput").value;
    let result = await searchStoreByZip(searchTerm);
    console.log(result);
    //TODO: iterate through all the stores that were returned and just output their addresses
    setOutput(JSON.stringify(result.data[0]));
  };
  return (
    <div>
      <input id="myInput" type="text" />
      <input type="submit" value="Submit" onClick={onSubmit} />
      <br />
      <h2>{output}</h2>
    </div>
  );
};

export default LocationSearch;
