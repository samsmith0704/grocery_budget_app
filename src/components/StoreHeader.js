//after you search zip code, that returns stores
// This component will represent the stores, and will have functions associated with them
//which allow you to search for the price of an item at that store
import React from "react";
import { headers } from "../request_config";
import { Link, Outlet } from "react-router-dom";
const StoreHeader = ({ store }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  // const searchItem = async (itemName) => {
  //   const response = await fetch(
  //     `https://api.kroger.com/v1/locations?filter.zipCode.near=${zip_code}&filter.chain=Kroger`,
  //     {
  //       method: "get",
  //       headers: headers,
  //     }
  //   );
  //   const myJson = await response.json();

  //   return myJson;
  // };
  const navLinkStyle = {
    backgroundColor: isHovered ? "aqua" : "DarkSeaGreen",
    float: "left",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px",
  };
  const changeHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={changeHover} onMouseLeave={changeHover}>
      <Link
        style={navLinkStyle}
        to={`/${store.locationId}`}
        key={store.locationId}
      >
        {store.name}
      </Link>
    </div>
  );
};

export default StoreHeader;
