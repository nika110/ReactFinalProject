import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component';


import './contact.styles.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            text: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ name: '', email: '', text: ''})

    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]:value })
    }

    render() {
        return(
            <div className='contact'>
                <h2>Any Questions?</h2>
                

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='name' 
                    type='text'
                    value={this.state.name} 
                    handleChange={this.handleChange} 
                    label='Your Name'
                    required />

                    
                    <FormInput 
                    name='email' 
                    type='text' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='Your Email'
                    required />
                    
            <div className='contact2'>
                <FormInput 
                name='text' 
                type='text' 
                value={this.state.text} 
                handleChange={this.handleChange} 
                label='Feel Free to ask'
                    
                required />
            </div>


                    <CustomButton type='submit'>Submit</CustomButton>
                </form>

            </div>
        )
    }
}

export default Contact;
