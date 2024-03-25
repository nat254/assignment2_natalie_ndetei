import React from 'react';





const DummyForm = () => {

    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");

    const [myform, setMyform] = React.useState({});

    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyform((previous) => ({
                ...previous,
                [event.target.name]: event.target.value,
            }));
    };

    React.useEffect(() => {
        console.log(DummyForm);
    }, [DummyForm]);

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
        // console.log("First Name: ", fname);
        // console.log("Last Name: ", lname);

        console.log({DummyForm});

    }
    
  return (
    <form onSubmit={submitForm}>
        <label htmlFor="fname">First Name:</label><br />
        <input type="text" id="fname" name="fname"
        // onChange={(event) => setFname(event.target.value)}
        onChange={saveFields}/><br />

        <label htmlFor="lname">Last Name:</label><br />
        <input type="text" id="lname" name="lname"
        // onChange = {(event) => setLname(event.target.value)}
        onChange={saveFields}/><br />

        <button type="submit">Submit</button>
    </form>
  )
}

export default DummyForm