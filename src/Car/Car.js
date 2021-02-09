import React from 'react';
// import Radium from 'radium';
import './Car.css';

class Car extends React.Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps()', nextProps, prevState);
  //   return prevState;
  // }
  componentDidMount() {
    console.log('Car componentDidMount()');
  }
  componentWillUnmount() {
    console.log('Car componentWillUnmount()');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Car shouldComponentUpdate()', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Car getSnapshotBeforeUpdate()', prevProps, prevState);
    return null;
  }
  componentDidUpdate() {
    console.log('Car componentDidUpdate()');
  }

  render() {
    console.log('Car Render');
    // if (Math.random() > 0.7) {
    //   throw new Error('Car random error');
    // }
    const inputClasses = ['input'];
    this.props.name !== ''
      ? inputClasses.push('green')
      : inputClasses.push('red');
    if (this.props.name.length > 4) {
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
        <h3>Car name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>delete</button>
      </div>
    );
  }
}

export default Car;
