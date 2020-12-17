import React from 'react';
///import SignInUp from '../../pages/sign-in-up/sign-in-up.component';
import FormInput from '../../components/form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component'



class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})

    }


    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]:value })
    }


    render() {
        return(
            <div className='sign-in'>
                <h2>Please Log In</h2>
                

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email'
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label='email'
                    required />

                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required />


                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn;