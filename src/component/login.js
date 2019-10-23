import React from 'react';
import InputDetails from './inputDetails';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    callBack(event){
        /* this.setState({name : event}); */
        console.log(event)
        axios.post('http://localhost:3001/userMgmt/users/element', event)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        }) 
    }

    render() {
        return (
            <div>
               <div>
                   <InputDetails  parentCallBack={this.callBack} />
               </div>
            </div>
        );
    }
}