import React from "react";
import { Item } from "./Item";

export const ItemContainer = (props) => {
  const { onAdd, onFav } = props; // props.onAdd

  return (
    <>
      <div className="banner-img">
        <div className="banner-text">
          <h1>Products</h1>
        </div>
      </div>
      <div className="item-container">
        {props.items.map((item, idx) => {
          return <Item onAdd={onAdd} onFav={onFav} item={item} key={idx} />;
        })}
      </div>
    </>
  );
};
