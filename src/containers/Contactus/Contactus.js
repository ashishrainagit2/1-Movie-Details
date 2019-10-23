import React , {Component} from 'react';
import classes from './Contactus.module.css';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import Backdrop from '../../components/UIcomponents/Backdrop/Backdrop';
import Input from '../../components/UIcomponents/Input/Input';
import Button from '../../components/UIcomponents/Button/Button';
import axios from '../../axios-orders2';
import LoginBox from '../../components/LoginBox/LoginBox';


class Contactus extends Component {
    
    state = {
        orderForm : {
            firstname : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                        required: true,
                        minLength :3,
                        type: 'textonly'
                },
                valid: false,
                touched: false
            },
            lastname : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                        required: true,
                        minLength :3,
                        type: 'textonly'
                },
                valid: false,
                touched: false
            },
            username : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                        required: true,
                        minLength: 5,
                        type : 'alphanumeric'
                },
                valid: false,
                touched: false
            },
            phonenumber : {
                elementType : 'input',
                elementConfig : {
                    type : 'number',
                    placeholder: 'Phone number'
                },
                value: '',
                validation: {
                        required: true,
                        minLength : 10,
                        maxLength : 10
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
                        required: true
                },
                valid: false,
                touched: false
            },
            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                        required: true,
                        minLength: 5,
                        type : 'email'
                },
                valid: false,
                touched: false
            },
            gender :{
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Male', displayValue: 'Male'},
                        {value: 'Female', displayValue: 'Female'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            },
            textarea :{
                elementType : 'textarea',
                elementConfig : {
                    type: 'textarea',
                    placeholder : 'Write your message here ...'
                },
                value: '',
                validation: {
                        
                },
                valid: false,
                touched: false
            },
        },
        loading : false,
        formIsValid : false,
        formFilled : false
    }

    orderHandler = (event) => {
            event.preventDefault();
            this.setState({
                loading : true
            });
            const formData = {};
            for (let formElementIdentifier in this.state.orderForm) {
                formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
            }   
            
            axios.post('/formdata.json', formData)
            .then(response => {
                    this.setState({ loading: false, formFilled : true });
                    // this.props.history.push('/');
            })
            .catch(error => {
                    this.setState({ loading: false });
            });

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

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedOrderForm =  {
            ...this.state.orderForm
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

        this.setState({orderForm : updatedOrderForm , formIsValid: formIsValid})
    }

    render (){
        const formElementsArray = [];
                for (let key in this.state.orderForm) {
                        formElementsArray.push({
                                id: key,
                                config: this.state.orderForm[key]
                        });
                }

        let form = (
            <React.Fragment>
            <h2>Register Now!!</h2>
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

            <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>

            </form>
            </React.Fragment>

        )

        if(this.state.loading){
            form = <Spinner />
        }

        if (this.state.formFilled){
            form = <div className={classes.resisterMessage}>Thanks for registering. Please login </div>
        }
        return (
            <div className={classes.ContactusWrapper}>
                {/* <Spinner /> */}
                <Backdrop />
                <div className={classes.contactusContent}>
                    <div className={classes.contactusText}>
                        <LoginBox />
                    </div>
                    <div className={classes.Contactus}>
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactus;