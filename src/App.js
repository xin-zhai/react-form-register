import React from 'react';
import './styles.css';
import validator from './loginValidator';
import InputField from './utils/inputField';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
  }

  getCurrentLoginState = () => ({
    username: this.state.username,
    password: this.state.password
  });

  validateForm = loginMessage => {
    if (!validator.isValid(loginMessage)) {
      this.setState({
        errors: {
          ...validator.getErrors(loginMessage),
          form: 'please correct the fields above'
        }
      });
      return false;
    }
    return true;
  };

  onRegister = event => {
    event.preventDefault();

    const loginMessage = this.getCurrentLoginState();
    if (!this.validateForm(loginMessage)) return;

    try {
      alert("login sucess");
    } catch (event) {
      this.setState({
        errors: {from:'you login is not success, try again'}
      });
    }
  };

  handleChangeFor = fieldName => event => {
    this.setState({[fieldName]: event.target.value});
  }

  handleBlurFor = fieldName => event => {
    const validate = validator.fields[fieldName];
    this.setState({
      errors: {
        ...this.state.errors,
        [fieldName]: validate(event.target.value)
      }
    });
  }

  render() {
    return (
        <div className="App">
          <div className="logo">
            <img
                src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
                width="100px"
                alt="old_people"
            />
          </div>
          <form>
            <label>
              <span className="label-star">*</span> Username:
              <InputField
                  id="username"
                  type="text"
                  changeHandler={this.handleChangeFor('username')}
                  blurHandler={this.handleBlurFor('username')}
                  error={this.state.errors.username}
              />
            </label>
            <label>
              <span className="label-star">*</span> Password:
              <InputField
                  id="password"
                  type="password"
                  changeHandler={this.handleChangeFor('password')}
                  blurHandler={this.handleBlurFor('password')}
                  error={this.state.errors.password}
              />
            </label>
            <button type="submit" onClick={this.onRegister}>Register</button>
          </form>
        </div>
    );
  }
}
