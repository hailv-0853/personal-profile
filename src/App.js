import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderContainer from "./HeaderContainer";
import AboutContainer from "./AboutContainer";
import FriendContainer from "./FriendContainer";
import TopNav from "./TopNavContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisH,
  faPlus,
  faUserCircle,
  faMobileAlt,
  faSearch,
  faGlobe,
  faComment,
  faSortUp,
  faSortDown,
  faCamera
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

library.add(
  faEllipsisH,
  faPlus,
  faUserCircle,
  faMobileAlt,
  faSearch,
  faGlobe,
  faComment,
  faSortUp,
  faSortDown,
  faCamera
);

const AppContainer = styled.div`
  width: 800px;
  margin: auto;
`;

function App() {
  return (
    <Router>
      <TopNav />
      <AppContainer>
        <HeaderContainer />
        <AboutContainer />
        <FriendContainer />
      </AppContainer>
    </Router>
  );
}

export default App;
