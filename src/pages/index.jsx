import React from "react";
import { Link } from "react-router-dom";

//images
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.webp";
import img4 from "../images/4.png";
import img5 from "../images/5.webp";
import img6 from "../images/6.jpeg";

const Home = () => {
  function Card(props) {
    return (
      <>
        {/* <!-- a single post template as a link --> */}
        <Link to="/single" className={props.gridType}>
          <img src={props.image} alt="fitness" />
          <h3 className="first-txt">BLOG NAME {props.id}</h3>
          <h2 className="second-txt">{props.date}</h2>
        </Link>
        {/* <!-- end of single post template --> */}
      </>
    );
  }

  return (
    //  <!-- below is a template for a grid of 6 blog posts -->
    <div className="image-grid">
      {/* <!-- a single post template as a link --> */}
      <Card
        gridType="image image-grid-row-2 "
        image={img1}
        id="1"
        date="02 August, 2022"
      />
      <Card gridType="image" image={img2} id="2" date="02 August, 2022" />
      <Card
        gridType="image image-grid-row-2 "
        image={img3}
        id="3"
        date="02 August, 2022"
      />
      <Card
        gridType="image image-grid-row-2 "
        image={img4}
        id="4"
        date="02 August, 2022"
      />
      <Card gridType="image" image={img5} id="5" date="02 August, 2022" />
      <Card gridType="image" image={img6} id="6" date="02 August, 2022" />
    </div>
  );
};

export default Home;
