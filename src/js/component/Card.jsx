import React from "react";
import PropType from "prop-types";

const Card = (props)=>{
    return (
    <div className="col-12 col-md-6 col-lg-3">
        <div className="card mb-4 text-center">
            <img className="card-img-top" src='http://via.placeholder.com/500x325.jpg'alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title pt-2">Card Title</h5>
                <p className="card-text pt-3">{props.text}</p>
            </div>
            <div className="card-footer">
            <a href="" className="btn btn-primary">
                    Find out more!
                </a>
            </div>
        </div>
    </div>
    )
}
Card.propTypes = {
	text: PropType.string
};

export default Card