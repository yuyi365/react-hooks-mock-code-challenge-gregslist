import React, {useState} from "react";

const ListingCard = ({id, description, image, location, handleDelete}) => {

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((favorite) => !favorite);
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method : "DELETE",
    })
    .then((res) => res.json())
    .then(() => handleDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
