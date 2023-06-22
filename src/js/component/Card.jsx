import React from "react";

const Card = ()=>{
    return (
        <div className="card">
        <img className="card-img-top" src='http://via.placeholder.com/500x325.jpg'alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="card-footer">
        <a href="" className="btn btn-primary">
                Find out more!
            </a>
        </div>
    </div>
    )
}

export default Card