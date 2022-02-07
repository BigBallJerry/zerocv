import React from "react";
import styled from "styled-components";
import Taby from "../themes/Taby";
import TheOne from "../themes/TheOne";

const ThemeColors = {
  profileBg: "#fff",
  skillsBg: "#3d3e42",
  profileColor: "#9099a0",
  skillsColor: "#9099a0",
  linkColor: "#66cc99",
  boldColor: "#4a4e51",
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ResumePreviewer = (id) => {
  return (
    <Container>
      {/* <Taby /> */}
      <TheOne />
    </Container>
  );
};

export default ResumePreviewer;
