import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

class ComplaintsForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            fullName:"",
            email:"",
            reason:"",
            reasonOptions: [
                "My account was debited erroneously",
                "My card is expired",
                "My transaction failed",
                "Others"
            ],
        };
    }

    handleFullNameChange = (event) => {
        this.setState({fullName: event.target.value})
        console.log(this.state.fullName)
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handleReasonChange = (event) => {
        this.setState({reason: event.target.value})
    };

    render () {
        return (
            <div className="row mt-4">
                <form>
                    <Input 
                    name="fullName" 
                    title="Full Name" 
                    inputType="text" 
                    placeholder="Enter your full name" 
                    handleChange={this.handleFullNameChange} 
                    value={this.state.fullName}
                    />

                    <Input 
                    name="email" 
                    title="Email" 
                    inputType="text" 
                    placeholder="Enter your email address" 
                    handleChange={this.handleEmailChange} 
                    value={this.state.email}
                    />

                    <Select 
                    title="Reason of Contact"
                    name="reason"
                    value={this.state.reason}
                    options={this.state.reasonOptions}
                    handleChange={this.handleReasonChange}
                    />
                </form>
            </div>
        )
    }
}

export default ComplaintsForm;