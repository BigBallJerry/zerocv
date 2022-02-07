import { memo } from "react";
import "./taby.scss";
import { sampleData } from "../SampleResume";
import styled from "styled-components";
import {
  Button,
  Card,
  Col,
  Container,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";

const profileBg = "#fff";
const skillsBg = "#3d3e42";
const profileColor = "#9099a0";
const skillsColor = "#9099a0";
const linkColor = "#66cc99";
const boldColor = "#4a4e51";
const time = "0.6s";

const ResumeWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  min-height: 600px;
`;

const LeftSection = styled.section`
  background: ${profileBg};
  width: 40%;
  float: left;
  color: ${profileColor};
  padding: 60px 60px 40px 40px;

  @include breakpoint(brother-bear) {
    padding: 80px 15% 40px 10%;
  }
  @include breakpoint(baby-bear) {
    padding: 40px 10% 20px 5%;
  }

  @include breakpoint(brother-bear) {
    width: 100%;
  }
  .name-wrapper {
    float: left;
    width: 60%;
  }
  h1 {
    font-size: 2.5em;
    text-align: left;
    font-family: "Varela Round", sans-serif;
    color: ${boldColor};
    text-transform: uppercase;
    line-height: 1em;
    padding-top: 40px;
    @include breakpoint(mama-bear) {
      padding-top: 20px;
    }
    @include breakpoint(baby-bear) {
      font-size: 1.8em;
      padding-top: 20px;
    }
  }
  li {
    margin-bottom: 10px;
  }

  .picture-resume {
    width: 220px;
    height: 220px;
    background-size: cover;
    border-radius: 50%;
    margin-right: 0px;
    display: table;
    position: relative;
    vertical-align: middle;
    span {
      display: table-cell;
      vertical-align: middle;
      position: relative;
      margin: 0 auto;
      z-index: 10;
      text-align: center;
    }
    img {
      border-radius: 50%;
      max-width: 100%;
      @include breakpoint(papa-bear) {
        width: 80px;
      }
      @include breakpoint(mama-bear) {
        width: 120px;
        height: 120px;
      }
    }
    @include breakpoint(papa-bear) {
      width: 150px;
      height: 150px;
    }
    @include breakpoint(mama-bear) {
      width: 200px;
      height: 200px;
    }
    @include breakpoint(baby-bear) {
      width: 180px;
      height: 180px;
    }
  }
  .contact-info {
    margin-top: 100px;
    font-weight: 300;
    @include breakpoint(mama-bear) {
      margin-top: 70px;
    }
    @include breakpoint(baby-bear) {
      margin-top: 50px;
    }
  }
  .list-titles {
    float: left;
    text-align: left;
    font-weight: 600;
    width: 40%;
    color: ${boldColor};
    list-style: none;
  }
  .list-content {
    float: left;
    width: 60%;
    text-align: left;
    font-weight: 300;
    list-style: none;
  }
  .contact-presentation {
    text-align: left;
    font-weight: 300;
    margin-top: 100px;
    margin-bottom: 100px;
    @include breakpoint(mama-bear) {
      margin-top: 70px;
      margin-bottom: 70px;
    }
    @include breakpoint(brother-bear) {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
  .st0,
  .st1 {
    fill: #66cc99;
  }
`;

const AvatarWrapper = styled.div`
  overflow: none;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 100%;
  @include breakpoint(papa-bear) {
    width: 80px;
  }
  @include breakpoint(mama-bear) {
    width: 120px;
    height: 120px;
  }
`;

const RightSection = styled.section`
  background: ${skillsBg};
  width: 60%;
  float: left;
  position: relative;
  color: ${skillsColor};
  font-weight: 300;
  min-height: 100vh;

  padding: 60px 60px 40px 40px;
  @include breakpoint(brother-bear) {
    padding: 80px 15% 40px 10%;
  }
  @include breakpoint(baby-bear) {
    padding: 40px 10% 20px 5%;
  }

  @include breakpoint(brother-bear) {
    width: 100%;
  }
  h3.experience-title {
    color: ${linkColor};
    text-align: left;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 400;
  }
  .company-wrapper {
    width: 30%;
    float: left;
    text-align: left;
    padding-right: 5%;
    margin-bottom: 60px;
    @include breakpoint(baby-bear) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .job-wrapper {
    width: 70%;
    float: left;
    text-align: left;
    padding-right: 5%;
    margin-bottom: 60px;
    @include breakpoint(baby-bear) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  .experience-title {
    color: white;
    margin-bottom: 15px;
  }
`;

const Taby = (data) => {
  data = sampleData[0];

  return (
    <ResumeWrapper>
      <LeftSection>
        <Container>
          <Row>
            <Col sm={4}>
              <AvatarWrapper>
                {/* <span>
                  <img src={data.basics.image} alt="" />
                </span> */}
                <Image src={data.basics.image} alt="" />
              </AvatarWrapper>
            </Col>
            <Col sm={8}>
              <div class="name-wrapper">
                <h1>
                  John <br />
                  Anderson
                </h1>
              </div>
            </Col>
          </Row>
          <Row></Row>
          <Row></Row>

          <div class="clearfix"></div>
          <div class="contact-info clearfix">
            <ul class="list-titles">
              <li>Call</li>
              <li>Mail</li>
              <li>Web</li>
              <li>Home</li>
            </ul>
            <ul class="list-content ">
              <li>+34 123 456 789</li>
              <li>j.anderson@gmail.com</li>
              <li>
                <a href="#">janderson.com</a>
              </li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
          <div class="contact-presentation">
            <p>
              <span class="bold">Lorem</span> ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus euismod congue nisi, nec consequat quam.
              In consectetur faucibus turpis eget laoreet. Sed nec imperdiet
              purus.{" "}
            </p>
          </div>
          <div class="contact-social clearfix">
            <ul class="list-titles">
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Codepen</li>
            </ul>
            <ul class="list-content">
              <li>
                <a href="">@janderson</a>
              </li>
              <li>
                <a href="">janderson</a>
              </li>
              <li>
                <a href="">janderson</a>
              </li>
            </ul>
          </div>
        </Container>
      </LeftSection>

      <RightSection>
        <ContentContainer>
          <h3 class="experience-title">Experience</h3>

          <div class="experience-wrapper">
            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2012 - Present</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Front End Developer </div>
              <div class="company-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>

            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2012 - Present</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Front End Developer </div>
              <div class="company-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>

            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2012 - Present</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Front End Developer </div>
              <div class="company-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>

            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2010 - Present</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">
                Freelance, Web Designer / Web Developer
              </div>
              <div class="company-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>

            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2009 - Nov 2010</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Web Designer </div>
              <div class="company-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>
          </div>

          <div class="section-wrapper clearfix">
            <h3 class="section-title">Skills</h3>
            <ul>
              <li class="skill-percentage">HTML / HTML5</li>
              <li class="skill-percentage">CSS / CSS3 / SASS / LESS</li>
              <li class="skill-percentage">Javascript</li>
              <li class="skill-percentage">Jquery</li>
              <li class="skill-percentage">Wordpress</li>
              <li class="skill-percentage">Photoshop</li>
            </ul>
          </div>

          <div class="section-wrapper clearfix">
            <h3 class="section-title">Hobbies</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              elit facilisis, adipiscing leo in, dignissim magna.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              elit facilisis, adipiscing leo in, dignissim magna.
            </p>
          </div>
        </ContentContainer>
      </RightSection>

      <div class="clearfix"></div>
    </ResumeWrapper>
  );
};

export default memo(Taby);
