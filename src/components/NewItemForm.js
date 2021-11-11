import React, {useState} from 'react'

const NewItemForm = ({addListing}) => {

    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const itemData = 
        {
            description : description,
            image : image,
            location : location,
        }

        fetch('http://localhost:6001/listings', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(itemData),
        })
        .then((res) => res.json())
        .then((newItem) => addListing(newItem))

        setDescription("")
        setImage("")
        setLocation("")
        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Add A Listing</label>
            <br></br>
            <label>Description</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            <label>Image</label>
            <input type="text" onChange={(e) => setImage(e.target.value)}/>
            <label>Location</label>
            <input type="text" onChange={(e) => setLocation(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}

export default NewItemForm
