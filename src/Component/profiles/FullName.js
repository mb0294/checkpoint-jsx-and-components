import React from "react";

function myFullName() {
    let name = "Mehdi"
    let lastName = "Bouzghaya"
    let concatFullName = () => `${name} ${lastName}`
    return <div ><p>{concatFullName()}</p><hr /></div>
};

export default myFullName;