import React from "react";
import Search from "./Search";
import NewItemForm from "./NewItemForm";

const Header = ({setSearch, addListing}) => {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        setSearch={setSearch}
      />
      <NewItemForm 
        addListing={addListing}
      />
    </header>
  );
}

export default Header;
