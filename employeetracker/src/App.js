import React, { useState } from 'react';
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import Navbar from "./Components/Navbar/navbar"
import SearchForm from './Components/Search/search';
import Title from "./Components/Title/Title";
import Employees from "./employee.json";

function App() {
//   // Setting this.state.friends to the friends json array
const [search, setSearch] = useState("");
console.log(search)

//filter through json .filter .includes
const renderEmployees = () => {
  if (search) {
   return Employees.filter(employee => employee.name.includes(search)).map(employee => (
      <EmployeeCard
        id={employee.id}
        key={employee.id}
        name={employee.name}
        image={employee.image}
        occupation={employee.occupation}
        location={employee.location}
      />))
  }
  else {
  return Employees.map(employee => (
      <EmployeeCard
        id={employee.id}
        key={employee.id}
        name={employee.name}
        image={employee.image}
        occupation={employee.occupation}
        location={employee.location}
      />))
  }
};

//function that returns modified version of json

//

const handleInputChange = event => {
  setSearch(event.target.value);
};


return (
      <div>
        <Title>Employee Tracker</Title>
        <Navbar />
        <SearchForm handleInputChange={handleInputChange}/>
        { renderEmployees() }
      </div>
    );
  }
export default App;
