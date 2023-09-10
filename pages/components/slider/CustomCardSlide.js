import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Card, Button } from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
      <Button as='a' class="card-link" href="#">
        <Card fluid>
          <Card.Content>
            <Card.Header>{cardProps.header}</Card.Header>
            <Card.Description>{cardProps.meta}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <></>
          </Card.Content>
        </Card>
      </Button>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
