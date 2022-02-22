/**
 * Implementing a search by zip code, which will display the addresses of Krogers in that zip code
 */
import React from "react";
import { useState } from "react";

const accessToken =
  "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiIsImV4cCI6MTY0NTU1MDQwNiwiaWF0IjoxNjQ1NTQ4NjAxLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjkyNjAxZDY0LTI2N2UtNTk5Ny1iMjRmLTVkZjM2MTM1NmM5NiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjQ1NTQ4NjA2OTMzMTgzMDAxLCJhenAiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiJ9.fzgAprKyYugvefBZJeaGLSoeYdSODYxtuET22VRGtcnyHSQviV0Jyii-lbyW7c0zrjVXlt26NXtqBxSR5lvcguAOsgz3SMveoVU9FBQo5IqB0JGmyG_78l2w8uahPGaNa21nawyvzPytNfNMeAVtx7U0DFiPArRh16uvwooAgHdroDNyh-CqGuLfDeZaznayUPKAOtdPbRtEAVp9iK8NfpQXzLiuSwsrAXx8RCjeLatOHS9WjJC41RMn-awxB2SZALPZ9WgcE7qFfg2iBJi6-d_8dc0aNp9ZZXFcqF316Gbll3tYqp8xnDkyZBzztt4pW5qdVtT5RY3oa8A3AEJ62g";
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
      newOutput.push(result.data[i].address.addressLine1);
    }

    setOutput(newOutput);
    newOutput.forEach((element) => {
      console.log(element.address.addressLine1);
    });
  };
  return (
    <div>
      <input id="myInput" type="text" />
      <input type="submit" value="Submit" onClick={onSubmit} />
      <br />
      <ul>
        {output.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default LocationSearch;
