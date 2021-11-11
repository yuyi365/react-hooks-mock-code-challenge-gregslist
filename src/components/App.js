import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const App = () => {
  
  const [allListings, setAllListings] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((data) => setAllListings(data))
  }, [])

  const handleDelete = (clickedId) => {
    setAllListings(allListings.filter((listing) => {
      return listing.id !== clickedId;
    }))
  }

  const listingsToDisplay = allListings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase());
  })

  const addListing = (newListing) => {
    setAllListings([
      ...allListings,
      newListing
    ])
  }

  return (
    <div className="app">
      <Header 
        setSearch={setSearch}
        addListing={addListing}
      />
      <ListingsContainer 
        allListings={listingsToDisplay}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
