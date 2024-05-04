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
            Hello! My name is <strong>Qammar Uz Zamman</strong>. I'm from Kashmir.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            As a seasoned Social Data Scientist, I bring a unique blend of analytical prowess, social media expertise, and strategic insight to drive data-driven decision-making in the digital realm. With a passion for uncovering actionable insights from social media data, I specialize in translating complex datasets into meaningful narratives that inform marketing strategies and business outcomes.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My background in data science combined with a deep understanding of social media dynamics enables me to extract valuable insights from vast and unstructured social media datasets. Leveraging advanced statistical techniques, machine learning algorithms, and natural language processing (NLP) models, I uncover trends, patterns, and correlations that drive business growth and competitive advantage.
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
