import React from "react";

const Card = ()=>{
    return (
        <div className="card m-5">
        <img className="card-img-top" src=''alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">card title</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="" className="btn btn-primary">
                Click Me!
            </a>
        </div>
    </div>
    )
}

export default Card