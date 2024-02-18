import React, { useState } from 'react';
import StudentComponent from './StudentComponent';
import Student from './Student';
const App = () => {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null); 
  const [editIndex, setEditIndex] = useState(null);
  const studentInfo = {
    name: "nitay sason",
    age: 41,
    email: "nitaysason@gmail.com"
  };
  const addCar = () => {
    if (name.trim() !== '' && brand.trim() !== '' && price.trim() !== '' && image) {
      if (editIndex !== null) {
        const newCars = [...cars];
        newCars[editIndex] = { name: name.trim(), brand: brand.trim(), price: price.trim(), image: image };
        setCars(newCars);
        setName('');
        setBrand('');
        setPrice('');
        setImage(null);
        setEditIndex(null);
      } else {
        setCars([...cars, { name: name.trim(), brand: brand.trim(), price: price.trim(), image: image }]);
        setName('');
        setBrand('');
        setPrice('');
        setImage(null);
      }
    }
  };

  const removeCar = (index) => {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
  };

  const editCar = (index) => {
    setName(cars[index].name);
    setBrand(cars[index].brand);
    setPrice(cars[index].price);
    setImage(cars[index].image);
    setEditIndex(index);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="container-sm">
      <h2 className="text-center mb-4">Garage Inventory</h2>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Car Name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="form-control"
            placeholder="Brand"
          />
        </div>
        <div className="col">
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="col">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <button onClick={addCar} className="btn btn-primary">{editIndex !== null ? 'Update Car' : 'Add Car'}</button>
        </div>
      </div>
      <div className="row">
        {cars.map((car, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={car.image} className="card-img-top" alt="Car" />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Brand: {car.brand}</p>
                <p className="card-text">Price: {car.price}</p>
                <button onClick={() => removeCar(index)} className="btn btn-danger mr-2">Remove</button>
                <button onClick={() => editCar(index)} className="btn btn-secondary">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1>Student Management System without props</h1>
      <StudentComponent name="John Doe" age={25} email="john@example.com" />
      <br></br>
      <h1>Student Management System with props</h1>
      <Student student={studentInfo} />
    </div>
  );
}

export default App;
