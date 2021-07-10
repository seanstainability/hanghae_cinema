import React from "react";
import { Card } from "antd";

const Movie = (props) => {
  return (
    <React.Fragment>
      <Card
        hoverable
        style={{ padding: 0 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      ></Card>
    </React.Fragment>
  );
};

Movie.defaultProps = {};

export default Movie;
