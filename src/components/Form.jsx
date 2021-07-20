import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmailcopy] = useState("");
  const [password, setPassword] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log("Welcome", newUser);
  };
  return (
    <div className="formList">
      <form onSubmit={createUser}>
        {" "}
                    
        <div>
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
                      
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" onChange={(e) => setEmailcopy(e.target.value)} />
        </div>{" "}
                  
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>{" "}
                    
        <input type="submit" value="Create User" />         
      </form>
      <Results username={username} email={email} password={password} />
    </div>
  );
};

const Results = (props) => {
  const { username, email, password } = props;
  return (
    <div>
      <p>{username}</p>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
};

export default Form;
