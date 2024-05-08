import React from "react";
import { stackList } from "../../data/ProjectData";

import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Junaid Akhter</strong>. and I'm a highly skilled professional originally from Kashmir, currently based in Germany. With a passion for cutting-edge technologies and a diverse background in various fields, I bring a unique perspective to every project I undertake.


            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
           A multi-faceted professional with an impressive range of expertise in cutting-edge fields, including Physics Informed Neural Networks, Multi Criteria Learning, Data Science, Tensor Networks, and Quantum Computing. His profound understanding of Physics Informed Neural Networks allows him to construct models that not only excel in performance but also adhere to fundamental physical principles, resulting in highly accurate and interpretable models.
           In the realm of Multi Criteria Learning, Junaid's proficiency in developing algorithms that simultaneously consider multiple objectives and constraints positions him as a problem solver for complex, real-world challenges. His expertise empowers organizations to make informed decisions by striking a balance between competing criteria.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
           My understanding of Quantum Computing positions at the forefront of the next wave of computational innovation. With a deep comprehension of quantum algorithms, quantum gates, and quantum machine learning techniques, I explore the potential of quantum computing to revolutionize various industries, from cryptography and optimization to drug discovery and material science.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
