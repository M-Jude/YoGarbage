import React, { Component } from 'react';

class AccountDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { handleChange } = this.props;
        return(
            <>
            <form id="msform">
                <fieldset>
                    <h2 className="fs-title">Create your account</h2>
                    <h3 className="fs-subtitle">This is step 2</h3>
                    <p><label className="fs-subtitle">Email:</label></p><input type="text" name="email" placeholder="Email" onChange={handleChange('email')}/>
                    <p><label className="fs-subtitle">Password:</label></p><input type="password" name="pass" placeholder="Password" onChange={handleChange('pass')}/>
                    <p><label className="fs-subtitle">&nbsp;&nbsp;&nbsp;&nbsp;Confirm<br/>Password:</label></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" name="cpass" placeholder="Confirm Password" onChange={handleChange('cpass')}/>&nbsp;&nbsp;&nbsp;
                
                <button className="Back" onClick={this.back}>
                    « Back
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
                </fieldset>
            </form>
            </>
        );
    }
}

export default AccountDetails;


