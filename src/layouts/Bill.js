import React, { Component } from 'react';
import Form from '../components/Form';
import axios from 'axios';
class Bill extends Component {
    state={
        productDisplay: [] ,

    }
    getUser=(e)=>{
        e.preventDefault();
        const productId = e.target.elements.username.value;
        axios.get(`https://jsonplaceholder.typicode.com/users/${productId}`)
            .then((res)=>{
                console.log(res);
                this.setState({productDisplay:res.data})
            })
       
    }

    render() { 
        const inValue = ()=>{

        }
        return ( 
            <div>
                <Form getUser={this.getUser}  />
                <br/>
                <div className='offset-md-2 col-md-6'>
                <div className='table-responsive'>
                <table className="table table-light">
                    <thead className="bg-success">
                        <tr className='text-white'>
                        <th scope="col">Product Name</th>
                        <th scope="col">QTY</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{this.state.productDisplay.name}</th>
                        <td>
                            <p>{this.state.productDisplay.phone}</p>
                        </td>
                        <td>{this.state.productDisplay.id}</td>
                        <td>{this.state.productDisplay.status}</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>                            
                        
                    
                    </tbody>
                </table> 
                </div>                 
                </div>
            </div>
         );
    }
}
 
export default Bill;

