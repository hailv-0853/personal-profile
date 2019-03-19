import React from "react";

import {
  AboutContainer,
  Title,
  AboutContentWrapper,
  Icon,
  Description,
  DescTitle,
  DescSubtitle
} from "./AboutContainer.style";

import AboutItem from "./AboutItem";

const ABOUT_LIST = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1551375048-9c5c503d0d2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    title: "Designer at <strong>Jeep Renegade</strong>",
    subTitle: "Past: Lambo and BMW"
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1552017085-f3dfa576f7a5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    title: "In a relationship with <strong>Craig Reid</strong>",
    subTitle: "Together since 15th October, 2015, Good luck!"
  },
  { id: 3, imgSrc: "plus-about-icon", title: "Add a school", subTitle: "" },
  {
    id: 4,
    imgSrc: "mobile-about-icon",
    title: "+01 23 456 789",
    subTitle: "+09 87 654 321"
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1551086054-1bc97d3466ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    title: "Lives in <strong>London, United Kingdom</strong>",
    subTitle: "Originally from Prague, Czech Republic"
  },
  {
    id: 6,
    imgSrc: "user-about-icon",
    title: "https://instagram/lorem",
    subTitle: "https://lorem.com, https://dribbble.com/Lorem"
  }
];

const About = () => (
  <AboutContainer>
    <Title>About</Title>
    <AboutContentWrapper>
      {ABOUT_LIST.map(item => (
        <AboutItem aboutItem={item} key={item.id} />
      ))}
    </AboutContentWrapper>
  </AboutContainer>
);

export default About;
