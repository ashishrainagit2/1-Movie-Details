import React , { Component } from 'react';
import Input from '../../components/UIcomponents/Input/Input';
import Button from '../../components/UIcomponents/Button/Button';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import Backdrop from '../../components/UIcomponents/Backdrop/Backdrop';
import axios from '../../axios-orders2';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './Auth.module.css';

class Auth extends Component {

    state = {
        formElements : {
            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder: 'email'
                },
                value: '',
                validation: {
                        required: true,
                        minLength :6,
                        type: 'email'
                },
                valid: false,
                touched: false
            },
            password : {
                elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                        required: true,
                        minLength :6,
                },
                valid: false,
                touched: false
            }
        },
        isSignUp : false
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    AllLetter = (inputtxt) => {

        const letters = /^[A-Za-z]+$/;
        if(inputtxt.match(letters))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    alphanumeric = (inputtxt) => {

        var letterNumber = /^[0-9a-zA-Z]+$/;
        if(inputtxt.match(letterNumber)) 
        {
             return true;
        }
        else
        { 
            return false; 
        }
    }

    ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
        return (false)
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
                isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
                isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.type) {
            switch(rules.type){
                case('textonly'):
                    isValid = this.AllLetter(value) && isValid;
                break;
                case('alphanumeric'):
                    isValid = this.alphanumeric(value) && isValid;
                break;
                case ('email'):
                    isValid = this.ValidateEmail(value) && isValid;
                default :
                    break
            }
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedOrderForm =  {
            ...this.state.formElements
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        updatedFormElement.touched = true;

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
                formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({formElements : updatedOrderForm , formIsValid: formIsValid})
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.props.onAuth( this.state.formElements.email.value, this.state.formElements.password.value, this.state.isSignup );
    }

    render (){
        const formElementsArray = [];
        for (let key in this.state.formElements) {
            formElementsArray.push({
                id: key,
                config: this.state.formElements[key]
            });
        }

        let form = (
            <div>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">{this.state.isSignup ? 'REGISTER' : 'LOGIN'}</Button>
                <form onSubmit={this.orderHandler} >
                    {formElementsArray.map((formElement) => ( 
                        <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        label={formElement.config.label}
                        invalid={!formElement.config.valid}
                        shouldValidate = {formElement.config.validation.required}
                        touched = {formElement.config.touched}
                        changed = {(event) => this.inputChangedHandler(event , formElement.id)}
                        />
                    ))}
                <Button btnType="Success">SUBMIT</Button>
                </form>
                
            </div>
        )

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
    
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/"/>
        }

        return (
            <div className={classes.AuthForm}>
                {authRedirect}
                {form}
                <div className={classes.error}>{errorMessage}</div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated : state.auth.token != null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) )
        //onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Auth);
