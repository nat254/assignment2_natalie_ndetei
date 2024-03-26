import React, { useState } from 'react';

const Login = () => {
    const[firstname, setFirstname] = useState<string>("");
    const[lastname, setLastname] = useState<string>("");

    const[myform, setMyform] = useState({});

    React.useEffect(() => {
        console.log(Login);
    }, [Login]);

  return (
    <div>
      <h1>Login form</h1>
    <form>
        <label htmlFor="firstname">First Name:</label><br />
        <input type="text" id="fname" name="firstname" placeholder="First Name"/><br />

        <label htmlFor="lastname">Last Name:</label><br />
        <input type="text" id="lname" name="lastname" placeholder="Last Name"/><br />

        <button type="submit">Submit</button>

    
    </form>
    </div>
  );
};

export default Login;