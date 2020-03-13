import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { Yname, DOB, contact, id, city, area, add_Info, handleChange } = this.props;
        return(
            <>
            <form id="msform">
            <fieldset>
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">We will never sell it</h3>
                <p><label className="fs-subtitle">NAME:</label></p><input type="text" name="Yname" value={Yname} placeholder="Your Name" onChange={handleChange('Yname')}/>
                <p><label className="fs-subtitle">GENDER:</label></p>
                    <select name="Gender" id="gender" onChange={handleChange('gender')}>
                        <option>--Gender--</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                <p><label className="fs-subtitle">D.O.B:</label></p><input type="date" name="DOB" value={DOB} onChange={handleChange('DOB')}/>
                <p><label className="fs-subtitle">CONTACT:</label></p><input type="text" name="contact" placeholder="Phone"  value={contact} onChange={handleChange('contact')}/>
                <p><label className="fs-subtitle">ID:</label></p><input type="text" name="id" placeholder="ID" value={id} onChange={handleChange('id')}/>
                <p><label className="fs-subtitle">CITY:</label></p><input type="text" name="city" placeholder="City" value={city} onChange={handleChange('city')}/>
                <p><label className="fs-subtitle">AREA:</label></p><input type="text" name="area" placeholder="Area" value={area} onChange={handleChange('area')}/>
                <p><label className="fs-subtitle">Additional<br/>Info.:</label></p><textarea name="add_Info" value={add_Info} placeholder="Additional Information about your area" onChange={handleChange('add_Info')}></textarea>
            <button className="Next" onClick={this.continue}>
                Next »
            </button>
            </fieldset>
            </form>
            </>
        );
    }
}

export default PersonalInfo;

