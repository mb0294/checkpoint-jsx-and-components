import React from "react";

function Address() {
    let email = "mehdibouzghaya@gmail.com";
    let phone = "+21650522425";
    let add = "Gafsa";

    return <div className="addr">
                <div>{email}</div><hr />
                <div>{phone}</div><hr />
                <div>{add}</div><hr />
            </div>
};

export default Address;