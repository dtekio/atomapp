import PropTypes from "prop-types";
import React from "react";
import { Button, Container } from "semantic-ui-react";
import { ButtonNext, ButtonBack, Dot } from "pure-react-carousel";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const CustomDotGroup = ({ slides, size }) => (
  <Container textAlign="center">
    <ButtonBack>
      <FaCaretLeft />
    </ButtonBack>
    <Button.Group size={size}>
      {[...Array(slides).keys()].map((slide) => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
    <ButtonNext>
      <FaCaretRight />
    </ButtonNext>
  </Container>
);

CustomDotGroup.defaultProps = {
  size: "mini",
};

CustomDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string,
};

export default CustomDotGroup;
