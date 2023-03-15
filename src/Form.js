import React from "react";

const Form = ({ email, setEmail, password, setPassword }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email"></label>
      <input
        id="email"
        type="text"
        required
        placeholder="Email address or phone number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password"></label>
      <input
        id="password"
        type="text"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="loginBtn">
        Log in
      </button>
      <p className="forgot">Forgotten password?</p>
      <div className="lineDiv"></div>
      <button type="submit" className="createBtn">
        Create new account
      </button>
    </form>
  );
};

export default Form;
