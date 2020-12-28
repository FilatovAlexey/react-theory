import React from 'react';
import Radium from 'radium';
import './Car.css';
// function Car() {
//   return <div>Car component</div>;
// }

const car = (props) => {
  const inputClasses = ['input'];
  props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');
  if (props.name.length > 4) {
    inputClasses.push('bold');
  }
  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer',
    },
  };
  return (
    <div className="Car" style={style}>
      <h3>Car name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};
export default Radium(car);
