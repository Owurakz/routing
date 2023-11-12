import React from "react";
import { Link } from "react-router-dom";

const menu = [
  { name: "Pizza", id: 1 },
  { name: "Cake", id: 2 },
  { name: "Beans", id: 3 },
  { name: "HEGO", id: 4 },
];

function Items() {
  return (
    <div>
      <h1>Service Details</h1>
      {menu.map((item) => {
        return (
          <Link key={item.id} to={`/items/${item.id}`}>
            <h1> {item.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default Items;
