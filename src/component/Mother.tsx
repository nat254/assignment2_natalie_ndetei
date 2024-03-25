import React, { useState } from 'react';
import Daughter from "./Daughter";

const Mother = () => {
    const[advise, setAdvise] = useState("I hope you are becoming the woman I trained you to be.");
    return <Daughter advise = {advise}/>;
}

export default Mother;
