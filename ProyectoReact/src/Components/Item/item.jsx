import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({ item }) => {
  return (
    <div className="item">
      <Link to={`/item/${item.id}`}>
        <img src={item.image} alt={item.name} className="item-image" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </Link>
    </div>
  );
};

export default Item;
