import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
        <div className="container">
            <Navbar />
            <Jumbotron />
            <div className="card-container">
                <div className="row">
                    <Card text = "venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo"/>
                    <Card text = "vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla"/>
                    <Card text = "eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium"/>
                    <Card text = "pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
                </div>
            </div>
            <Footer />

        </div>
	);
};

export default Home;