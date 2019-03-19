import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  StyledAboutItem,
  SmallImage,
  Description,
  DescTitle,
  DescSubtitle,
  SmallIcon,
  InnerIcon
} from "./AboutContainer.style";

const rawHtml = content => ({
  __html: `${content}`
});

const getIcon = icon => {
  switch (icon) {
    case "plus-about-icon":
      return <FontAwesomeIcon icon="plus" />;
    case "mobile-about-icon":
      return <FontAwesomeIcon icon="mobile-alt" />;
    case "user-about-icon":
      return <FontAwesomeIcon icon="user-circle" />;
  }
};

const AboutItem = ({ aboutItem }) => (
  <Fragment>
    <StyledAboutItem>
      {aboutItem.imgSrc.indexOf("-about-icon") === -1 ? (
        <SmallImage src={aboutItem.imgSrc} />
      ) : (
        <SmallIcon>{getIcon(aboutItem.imgSrc)}</SmallIcon>
      )}
      <Description>
        <DescTitle dangerouslySetInnerHTML={rawHtml(aboutItem.title)} />
        {aboutItem.subTitle && (
          <DescSubtitle>{aboutItem.subTitle}</DescSubtitle>
        )}
      </Description>
    </StyledAboutItem>
  </Fragment>
);
export default AboutItem;
