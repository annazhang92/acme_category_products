import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    Link
  } from 'react-router-dom';
import Products from './Products';



export default class App extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
          regProducts:[],
          speProducts:[],
          inputValue:''
        };
        this.submitChangeReg = this.submitChangeReg.bind(this);
        this.submitChangeSpe = this.submitChangeSpe.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount () {
        axios.get('/api/regProduct/')
          .then(res => res.data)
          .then(products => {
            this.setState({ regProducts:products })
          });

          axios.get('/api/speProduct/')
          .then(res => res.data)
          .then(products => {
            this.setState({ speProducts:products })
          });
    }

    handleChange (evt) {
        const value = evt.target.value;
        this.setState({
          inputValue: value
        });
        

    }

    submitChangeReg(evt){
        evt.preventDefault();
        console.log(this.state.inputValue)
   
        axios.post('/api/speProduct', {name:this.state.inputValue})
        .then(res => res.data)
        .then(result => {
          console.log(result) // response json from the server!
        })

        window.location.reload();


        this.setState({
            inputValue: ''
        })
    }

    submitChangeSpe(evt){
        evt.preventDefault();
        console.log(this.state.inputValue)
   
        axios.post('/api/regProduct', {name:this.state.inputValue})
        .then(res => res.data)
        .then(result => {
          console.log(result) // response json from the server!
        })

        window.location.reload();


        this.setState({
            inputValue: ''
        })
    }

    render(){

        return(
        <div>
        <Products Products={this.state.regProducts} submitChange={this.submitChangeReg} handleChange={this.handleChange}/>
        <hr/>
        <Products Products={this.state.speProducts} submitChange={this.submitChangeSpe} handleChange={this.handleChange}/>
        </div>
        )

    }
}
