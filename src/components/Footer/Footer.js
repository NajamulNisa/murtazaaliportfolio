import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  //  background-image: url(/footer_wave.svg);
  background-color:black;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
  
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container text-center p-6 bg-black footer"/>
        <span class="text-white">&copy; created by CQAI WEB TEAM </span>
    </FooterSection>
  );
}

export default Footer;
