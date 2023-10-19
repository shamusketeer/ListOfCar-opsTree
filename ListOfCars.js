import react, { useState } from "react";

function ListOfCars() {
  const [car, setCar] = useState([]);
  const [newCar, setNewCar] = useState({ name: "", model: "", pages: 0 });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar({
      ...newCar,
      [name]: name === "Quantity" ? parseInt(value, 10) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingCarIndex = car.findIndex((b) => b.name === newCar.name);

    if (existingCarIndex !== -1) {
      const updatedCars = [...car];
      updatedCars[existingCarIndex] = {
        ...updatedCars[existingCarIndex],
        Quantity: updatedCars[existingCarIndex].Quantity + newCar.Quantity
      };
      setCar(updatedCars);
    } else {
      setCar([...car, newCar]);
    }
    setNewCar[{ name: "", model: "", Quantity: 0 }];
  };

  return (
    <div>
      <h1>List of Cars</h1>
      <div>
        <h2>Add a Car</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <lable>
          Name:
          <input
            type="text"
            name="name"
            value={newCar.name}
            onChange={handleChange}
          />
        </lable>
        <br />
        <lable>
          Model:
          <input
            type="text"
            name="model"
            value={newCar.model}
            onChange={handleChange}
          />
        </lable>
        <br />
        <lable>
          Quantity:
          <input
            type="number"
            name="Quantity"
            value={newCar.Quantity}
            onChange={handleChange}
          />
        </lable>
        <br />
        <button type="submit"> Add Cars Details</button>
      </form>

      <div>
        <h2> Cars list</h2>
        <ul>
          {car.map((car, index) => (
            <li key={index}>
              {car.name} Model Year {car.model} Quantity {car.Quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ListOfCars;
