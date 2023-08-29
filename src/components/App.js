import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(plants => setPlants(plants))
  }, [])

  const addPlant = (event) => {
    event.preventDefault()
    const newPlant = {
      "name": event.target.name.value, 
      "image": event.target.image.value,
      "price": event.target.price.value
    }

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  const filteredPlants = plants.filter(plant => searchText ? plant.name.toLowerCase().includes(searchText.toLowerCase()) : true)

  const updateSearchText = event => setSearchText(event.target.value)

  // const changeStock = id => {
  //   setPlants(plants.filter(plant => plant.id !== id))
  // }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} addPlant={addPlant} searchText={searchText}  updateSearchText={updateSearchText} />
    </div>
  );
}

export default App;
