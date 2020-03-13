import React, { Component } from 'react';

export default class PrivacyPolicy extends Component {
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
    <h2 className="fs-title">Privacy Policy</h2>
    <h3 className="fs-subtitle">Guaranteed safety</h3>
    <input type="checkbox" className="chk-box" onChange={handleChange('ch_box')}/><p >By checking this box, you agree to the terms and conditions of our privacy policy.</p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button className="Back" onClick={this.back}>« Back</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
    <input type="submit" name="submit" className="submit action-button" value="Submit" onChange={handleChange('submit')}/>
  </fieldset>
            </form>   
            </>
        );
    }
}



