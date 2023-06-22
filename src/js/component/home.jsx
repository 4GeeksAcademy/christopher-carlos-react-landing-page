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
            <div className="card-deck justify-content-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />

        </div>
	);
};

export default Home;