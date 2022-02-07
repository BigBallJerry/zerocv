import styled from "styled-components";
import { sampleData } from "../SampleResume";
import { Col, Container, Row } from "react-bootstrap";
import jsPDF from "jspdf";
import { useRef } from "react";

const ThemeColors = {
  profileBg: "#fff",
  skillsBg: "#3d3e42",
  profileColor: "#9099a0",
  skillsColor: "#9099a0",
  linkColor: "#66cc99",
  boldColor: "#4a4e51",
};

const ListTitles = styled.ul`
  list-style: none;
  float: left;
  text-align: left;
  font-weight: 600;
  width: 40%;
  color: ${ThemeColors.boldColor};
`;

const ListContent = styled.ul`
  list-style: none;
  float: left;
  width: 60%;
  text-align: left;
  font-weight: 300;
  color: ${ThemeColors.profileColor};
`;

const styles = {
  root: {
    fontFamily: "Open Sans",
  },
  left: {
    overflowY: "100%",
    padding: "0 2em",
    minHeight: "100vh",
    backgroundColor: "white",
  },
  right: {
    minHeight: "100vh",
    padding: "2em",
    margin: 0,
    overflow: "hidden",
    backgroundColor: "#3d3e42",
    color: "white",
  },
  row: {
    marginBottom: 0,
  },
};

const AvatarImage = styled.span`
  img {
    width: 120px;
    height: 120px;
  }
`;

const AvatarName = styled.h1`
  color: ${ThemeColors.profileColor};
`;

const LanguageName = styled.span`
  color: ${ThemeColors.boldColor};
  font-weight: 400;
`;

const LanguageFluency = styled.span`
  color: ${ThemeColors.profileColor};
  font-weight: 400;
`;

const SectionTitle = styled.h3`
  color: ${ThemeColors.linkColor};
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 400;
`;

const SubjectTitle = styled.div`
  color: white;
  margin-bottom: 5px;
  font-weight: 300;
`;

const LanguageTitle = styled.div`
  font-size: 1.2em;
  margin-bottom: 5px;
  font-weight: 400;
  color: ${ThemeColors.boldColor};
`;

const Description = styled.div`
  color: ${ThemeColors.skillsColor};
  font-weight: 300;
`;

const SkillListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 6px;
    background: ${ThemeColors.boldColor};
    display: block;
    margin-top: 3px;
  }
  &::before {
    content: "";
    height: 6px;
    background: ${ThemeColors.linkColor};
    position: absolute;
    margin-top: 3px;
    bottom: 0;
    width: ${(props) => props.percentage}};
  }
`;

const Blocks = [
  "objective",
  "work",
  "education",
  "projects",
  "awards",
  "certifications",
  "skills",
  "hobbies",
  "languages",
  "references",
];

const TheOne = () => {
  let data = sampleData[0];
  const elementRef = useRef(null);
  const noop = () => {};

  const savePDF = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "letter",
    });
    // HTML element to render, using React's API for accessing DOM elements:
    // https://reactjs.org/docs/refs-and-the-dom.html
    const element = elementRef.current;
    console.log(element);
    const margins = {
      left: 40,
      top: 40,
      bottom: 40,
    };
    const options = {
      width: 522,
    };
    // See example usage from repo: https://github.com/MrRio/jsPDF/blob/b9f932cd2e22c82db0a39f0225521945a2568809/examples/basic.html#L357
    // DOM element, x pos to render on page, y pos to render on page, callback, options
    //doc.fromHTML(element, margins.left, margins.top, options, noop, margins);
    doc.fromHTML(element, margins.left, margins.top, options, noop, margins);
    doc.save("hmw.pdf");

    // doc.html(element, {
    //   callback: function (doc) {
    //     doc.save();
    //   },
    //   x: 10,
    //   y: 10,
    // });
  };

  return (
    <div ref={elementRef}>
      <Container fluid style={styles.root}>
        <button onClick={savePDF}>Generate PDF</button>
        <Row>
          <Col xs={6} md={4} style={styles.left}>
            <Row
              style={{
                minHeight: "100px",
                marginBottom: "2em",
                marginTop: "2em",
              }}
              className="justify-content-center"
            >
              <Col xs={12} md={4}>
                <AvatarImage>
                  <img src={data.basics.image} alt="" />
                </AvatarImage>
              </Col>
              <Col
                className="d-flex align-items-center justify-content-center text-center"
                xs={12}
                md={8}
              >
                <AvatarName>{data.basics.name}</AvatarName>
              </Col>
            </Row>
            <Row style={{ minHeight: "100px", margin: "3em 0" }}>
              <ListTitles>
                <li>Call</li>
                <li>Mail</li>
                <li>Web</li>
                <li>Home</li>
              </ListTitles>
              <ListContent>
                <li>{data.basics.email}</li>
                <li>{data.basics.phone}</li>
                <li>{data.basics.url}</li>
                <li>{data.basics.home}</li>
              </ListContent>
            </Row>
            <Row style={{ minHeight: "100px", margin: "3em 0" }}>
              <p>{data.basics.summary}</p>
            </Row>
            {data.languages.length > 0 && (
              <Row style={{ minHeight: "100px", margin: "3em 0" }}>
                <LanguageTitle>Languages:</LanguageTitle>
                <ul style={{ listStyle: "none" }}>
                  {data.languages.map((item) => (
                    <>
                      <li
                        key={item._id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <LanguageName>{item.language}:</LanguageName>
                        <LanguageFluency>{item.fluency}</LanguageFluency>
                      </li>
                    </>
                  ))}
                </ul>
              </Row>
            )}
          </Col>
          <Col xs={12} md={8} style={styles.right}>
            {data.experience.length > 0 && (
              <Row style={{ minHeight: "100px" }}>
                <SectionTitle>Experience</SectionTitle>
                <ul style={{ listStyle: "none" }}>
                  {data.experience.map((item) => (
                    <>
                      <li key={item._id}>
                        <div className="company-wrapper clearfix">
                          <SubjectTitle>
                            {item.name}, {item.position}
                          </SubjectTitle>
                          <div className="time">
                            {item.startDate} -{" "}
                            {item.endDate ? item.endDate : "Present"}
                          </div>
                        </div>
                        <Description>
                          <p>{item.summary}</p>
                        </Description>
                      </li>
                    </>
                  ))}
                </ul>
              </Row>
            )}
            {data.education.length > 0 && (
              <Row style={{ minHeight: "100px" }}>
                <SectionTitle>Education</SectionTitle>
                <ul style={{ listStyle: "none" }}>
                  {data.education.map((item) => (
                    <>
                      <li key={item._id} style={{ marginBottom: "1em" }}>
                        <div className="company-wrapper clearfix">
                          <SubjectTitle>
                            {item.institution}, {item.subject}, {item.degree}
                          </SubjectTitle>
                        </div>
                        <SubjectTitle>
                          {item.startDate} - {item.endDate}
                        </SubjectTitle>
                      </li>
                    </>
                  ))}
                </ul>
              </Row>
            )}
            {data.projects.length > 0 && (
              <Row style={{ minHeight: "100px" }}>
                <SectionTitle>Projects</SectionTitle>
                <ul style={{ listStyle: "none" }}>
                  {data.projects.map((item) => (
                    <>
                      <li key={item._id}>
                        <div className="company-wrapper clearfix">
                          <div className="experience-title">{item.name}</div>
                        </div>
                        <Description>
                          <p>{item.description}</p>
                        </Description>
                      </li>
                    </>
                  ))}
                </ul>
              </Row>
            )}

            <Row style={{ minHeight: "200px" }}>
              {data.skills.length > 0 && (
                <Col xs={12} md={6}>
                  <SectionTitle>Skills</SectionTitle>
                  <ul
                    style={{
                      listStyle: "none",
                      paddingLeft: 0,
                      paddingRight: "3em",
                    }}
                  >
                    {data.skills.map((item) => (
                      <SkillListItem key={item._id} percentage={item.level}>
                        <div className="experience-title">{item.name}</div>
                      </SkillListItem>
                    ))}
                  </ul>
                </Col>
              )}

              {data.hobbies.length > 0 && (
                <Col xs={12} md={6}>
                  <SectionTitle>Hobbies</SectionTitle>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    {data.hobbies.map((item) => (
                      <>
                        <li key={item._id}>
                          <div className="experience-title">{item.name}</div>
                        </li>
                      </>
                    ))}
                  </ul>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TheOne;
