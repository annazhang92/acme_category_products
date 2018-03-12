import React, { Component } from 'react';

export default class Products extends React.Component{


    render(){
        const Products=this.props.Products;
        const ProductsList = Products.map((product)=>{
            return <option key={product.id}>{product.name}</option>})

        return(
        <div>
    <form onSubmit ={this.props.submitChange}>
    <select name="name" onChange={this.props.handleChange}>
    <option>None</option>
    {ProductsList}
    </select>
     <button type="submit">Change</button>
    </form>
        </div>
        )

    }
}
