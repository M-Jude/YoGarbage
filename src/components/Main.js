import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import PrivacyPolicy from './PrivacyPolicy';

export default class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        Yname: '',
        gender: '',
        DOB: '',
        contact:'',
        id: '',
        city: '',
        area:'',
        add_Info: '',

        // step 2
        email: '',
        pass: '',
        cpass: '',

        //step 3
        ch_box:'',

    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, Yname, gender, DOB, contact, id, city, area, add_Info, email, pass, cpass, ch_box } = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                Yname={Yname} 
                gender={gender}
                DOB={DOB}
                contact={contact}
                id={id}
                city={city}
                area={area}
                add_Info={add_Info}
            />);
        if(step === 2)
            return (<AccountDetails 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                email={email} 
                pass={pass}
                cpass={cpass}
            />);
        if(step === 3)
            return (<PrivacyPolicy 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                ch_box={ch_box} 
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
        );
    }
}

