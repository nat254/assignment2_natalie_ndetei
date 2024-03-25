import React from 'react';
import Grandchild from "./Grandchild";

const Niece = ({advise}: AdviseProps) => {
    return <Grandchild advise = {advise} />;
};

export default Niece;