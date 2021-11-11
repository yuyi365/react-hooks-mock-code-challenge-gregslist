import React from "react";
import ListingCard from "./ListingCard";

const ListingsContainer = ({allListings, handleDelete}) => {

  const mapListings = allListings.map((listing) => {
    return <ListingCard 
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      handleDelete={handleDelete}
    />
  })

  return (
    <main>
      <ul className="cards">
        {mapListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
