import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {Shoes: []}
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(res => res.json())
    .then(res => this.setState({Shoes: res}))
  }
  render() {
    return (
      <div>
        <h1>Shoestore</h1>
        <ul>{this.state.Shoes.map(shoe =>{
              return(
                <>
                <li>
                  <ul key = {shoe.size}>
                    Size : {shoe.size}
                  </ul>
                  <ul key = {shoe.manufacturer}>
                    Manufacturer : {shoe.manufacturer}
                  </ul>
                  <ul key = {shoe.color}>
                    Color : {shoe.color}
                  </ul>
                  <ul key = {shoe.material}>
                    Material : {shoe.material}
                  </ul>
                  <ul key = {shoe.shoe_type}>
                    Shoe Type : {shoe.shoe_type}
                  </ul>
                  <ul key = {shoe.fasten_type}>
                    Fasten Type : {shoe.fasten_type}
                  </ul>
                </li>
                <br></br>
                </>
            )
            })}</ul>
      </div>
    )
  }
}

export default App;
