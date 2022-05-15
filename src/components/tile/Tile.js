import React from "react";

export const Tile = (props) => {
  const arr = Object.values(props.obj);
  console.log(arr)
  return (
    <div className="tile-container">
      {
      arr.map((item, index) => {
        if(index === 0){
          return <p className="tile-title" key={index}>{item}</p>
        }
        return <p className="tile" key={index}>{item}</p>
      })}
    </div>
  );
};
