import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const Movie = (props) => {
  const { id, title, image, history } = props;
  return (
    <React.Fragment>
      <Card
        hoverable
        style={{ padding: 0 }}
        cover={<ImgWrap alt={title} src={image} />}
        onClick={() => {
          history.push(`/movie/${id}`);
        }}
      ></Card>
    </React.Fragment>
  );
};

const ImgWrap = styled.img`
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

Movie.defaultProps = {};

export default Movie;
