import React, { useState } from 'react';

const Signup = () => {
    const [user, setUser] = useState<{ firstname: string, lastname: string, email: string, password: string }>({ firstname: "", lastname: "", email: "", password: "" });

    const [myform, setMyform] = React.useState({});

    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyform((previous) => ({
            ...previous,
            [event.target.name]: event.target.value,
        }));
    };

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(myform);
        alert("Form submitted successfully!");

    }

    React.useEffect(() => {
        console.log(Signup);
    }, [Signup]);

    return (
        <div>
            <h1>SignUp form</h1>
        <form onSubmit={submitForm}>
            <label htmlFor="firstname">First Name:</label><br />
            <input type="text" id="firstname" name="firstname" placeholder="First Name" onChange={saveFields} /><br />

            <label htmlFor="lastname">Last Name:</label><br />
            <input type="text" id="lastname" name="lastname" placeholder="Last Name" onChange={saveFields} /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" placeholder="Email" onChange={saveFields} /><br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" placeholder="Password" onChange={saveFields} /><br />

            <button type="submit">Submit</button>
        </form>
        </div>
    );
};


export default Signup;