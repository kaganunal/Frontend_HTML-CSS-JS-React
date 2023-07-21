import React, { useState } from "react";
import users from "../users";
import Card from "./Card";

const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [imageURL, setImgURL] = useState("");
  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "imageURL") {
      setImgURL(value);
    }
  };

  const handleAddCard = () => {
    if (name && age && gender && imageURL) {
      const newCard = {
        id: Date.now(),
        name,
        age,
        gender,
        imageURL,
      };
      setCards([...cards, newCard]);
      setName("");
      setAge("");
      setGender("");
      setImgURL("");
    }
  };

  return (
    <main>
      <div className="input-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-field"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          className="input-field"
          value={age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          className="input-field"
          value={gender}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          className="input-field"
          value={imageURL}
          onChange={handleInputChange}
        />
        <button onClick={handleAddCard} className="add-card">
          Add Card
        </button>
      </div>
      <div className="card-container">
        {users.map((card) => (
          <Card card={card} />
        ))}
        {cards.map((kart) => (
          <Card card={kart} />
        ))}
      </div>
    </main>
  );
};

export default Main;
