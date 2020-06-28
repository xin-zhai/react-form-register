import React from 'react';
import './styles.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="logo">
          <img
            src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
            width="100px"
            alt={'old_man'}
          />
        </div>
        <form noValidate>
          <label for="username">
            <span className="label-star">*</span> Username:
            <input
              id="username"
              name="username"
              placeholder="6~10 characters"
              type="text"
              noValidate
            />
          </label>
          <label for="password">
            <span className="label-star">*</span> Password:
            <input
              id="password"
              name="password"
              placeholder="6~10 numbers"
              type="password"
              noValidate
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
