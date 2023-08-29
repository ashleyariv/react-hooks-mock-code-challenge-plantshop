import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant, searchText, updateSearchText}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchText={searchText} updateSearchText={updateSearchText} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
