import React from "react";

function ProfilePhoto() {
    return <div className="card profile-photo">
                <img src="/me.jpg" alt="me" />
                <div>
                <button onClick={()=>alert('i like you too')} className="btn btn-primary btn-sm" >Like</button>
                
                </div>
        </div>
};

export default ProfilePhoto;