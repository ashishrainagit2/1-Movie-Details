import React , {Component} from 'react';
import classes from './Contactus.module.css';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import Backdrop from '../../components/UIcomponents/Backdrop/Backdrop';
import Input from '../../components/UIcomponents/Input/Input';
import Button from '../../components/UIcomponents/Button/Button';
import axios from '../../axios-orders2';


class Contactus extends Component {

    state = {
        orderForm : {
            // firstname,lastname, username, phone number , password, verify password, gender , address
            firstname : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                        required: true
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
                        required: true
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
                        required: true
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
            verify_password : {
                elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder: 'Verify Password'
                },
                value: '',
                validation: {
                        required: true
                },
                valid: false,
                touched: false
            },
            // gender1 :{
            //     elementType : 'radio',
            //     elementConfig : {
            //         type: 'radio',
            //         placeholder : '',
            //         name: 'gender'
            //     },
            //     label: 'male',
            //     value : '',
            //     validation: {
            //             required: true
            //     },
            //     valid: false,
            //     touched: false
            // },
            // gender2 :{
            //     elementType : 'radio',
            //     elementConfig : {
            //         type: 'radio',
            //         placeholder : '',
            //         name : 'gender'
            //     },
            //     label: 'female',
            //     value : '',
            //     validation: {
            //             required: true
            //     },
            //     valid: false,
            //     touched: false
            // },
            // textarea :{
            //     elementType : 'textarea',
            //     elementConfig : {
            //         type: 'textarea',
            //         placeholder : 'Write your message here ...'
            //     },
            //     value: '',
            //     validation: {
            //             required: true
            //     },
            //     valid: false,
            //     touched: false
            // },
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
            console.log(formData);
            axios.post('/formdata.json', formData)
            .then(response => {
                    this.setState({ loading: false, formFilled : true });
                    // this.props.history.push('/');
                    console.log('data posted');
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

        return isValid;
}

    inputChangedHandler = (event, inputIdentifier) => {
        console.log('inputidentifier' , inputIdentifier);
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
        console.log('orderForm', this.state);
    }
    render (){
        const formElementsArray = [];
                for (let key in this.state.orderForm) {
                        formElementsArray.push({
                                id: key,
                                config: this.state.orderForm[key]
                        });
                }
        console.log(formElementsArray);

        let form = (
            <form onSubmit={this.orderHandler} >
                {formElementsArray.map((formElement) => ( 
                    <Input 
                    key = {formElement.id}
                    elementType = {formElement.id}
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium pariatur officiis nostrum? Provident, odio voluptate dicta soluta consequuntur eligendi facilis eveniet laudantium, nostrum, iste voluptatem itaque illo. Impedit, nam.
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