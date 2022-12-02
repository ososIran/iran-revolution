import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/be_our_voice.jpg";
import voice from "../../Assets/14.jpeg";
import banner from "../../Assets/WLF-DFI-banner-eng.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";

import { HashLink } from 'react-router-hash-link';
import {
  MdOutlineTheaterComedy,
  MdHowToVote
}
  from "react-icons/md";

import { CSSTransition } from 'react-transition-group';
import GetImages from "../Gallery/Data";
import "./Revolution.css";

export default function About() {

  const images = GetImages('all');

  const [image, setImage] = useState(images[0]);

  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  return (

    <div style={{ position: "relative" }}>


      <Container fluid id="about">

        <Container>



          <Row md={8}>



            <Col className="home-about-description">


              <div  style={{padding:0}}>
                <img className="icon_img"
                  src="https://ik.imagekit.io/hcdblkujo/icon.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669948091459">
                </img>

                <div className="purple-revolution-title"> We are People of Iran</div>
              </div>

              <p className="home-about-body">
          
          
                We are fighting for <b className="purple"> gender equality, freedom of speech, and freedom of religion.</b>
                <br />
                <br />

                We are fighting against systematic oppression of <b className="purple">minorities and women</b>.
                <br />
                <br />


                We are fighting for <b className="purple">children and future</b>. We are fighting against <span className="red-bold">child murder, marriage</span><span className="red">, labor and abuse.</span>


                {/* <b className="purple-bold"> 13</b> is the minimum age of marriage for girls under islamic law and we will not let it stay for long. */}


                <br />
                <br />


                We are fighting for <b className="purple">justice</b> for crimes against humanity and we will not stop until the trial of <b className="red">Ali Khamenei</b> is held in <b className="purple">Iran</b>.
                <br />
                <br />

                We will not stop until we see <b className="purple">Iran</b> without islamic republic. <b className="purple">We will not compromise</b>.
                <br />
                <br />




                <b className="purple-bold">We Shall Prevail</b>
                <br />
                <br />
                <b className="purple-bold">Women Life Freedom</b>
                <br />
                <b className="purple-bold">Human Life Liberty</b>




              </p>
            </Col>

            <Col md={4} className="myAvtar">
              {/* <img src="assets/20.jpeg" className="img-fuild" width={400} /> */}
              <div className="title"> Please sign    <HashLink className="petition-bold" smooth to="/petition"



              >
                <MdHowToVote style={{ marginBottom: "2px" }} /> Our Petition

              </HashLink> <div className="title-bold">Stand with us</div>
              </div>
              <div className="img-fluid" style={{ paddingTop: 5 }}>
                <CSSTransition nodeRef={nodeRef} in={inProp} timeout={2000}>

                  <img src={image} className="item" />
                </CSSTransition>

              </div>



              <br />
              <br />


            </Col>

          </Row>


          <Row>
            <Col md={12} className="home-about-social">
              <h1></h1>
              <p>
                <a href="https://www.iranianscholarsforliberty.com/" className="purple">Iranian Scholars for Liberty</a> is a group of Iranian scholars who are fighting for the freedom of Iran.
              </p>


            </Col>
          </Row>
        </Container>
      </Container ></div>
  );
}


