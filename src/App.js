import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda 1', year: 2010 },
    ],
    pageTitle: 'React Components',
    showCars: false,
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  }

  toggleClassHandler = (newTitle) => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({
      cars,
    });
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    };
    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) => {
              this.onChangeName(event.target.value, index);
            }}
          />
        );
      });
    }
    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleClassHandler.bind(this, 'Changed')}>
          Toggle Cars
        </button>
        <div
          style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px',
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
