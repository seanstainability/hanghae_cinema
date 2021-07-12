import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/async/movie";
import { Layout, Row, Col } from "antd";
import Movie from "../components/Movie";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { Spinner, Input } from "../elements";

const Main = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  //   const user_info = useSelector((state) => state.user.user);
  //   const movies = useSelector((state) => state.movie.list);

  React.useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {/* <Spinner /> */}
        <Header />
        <Layout.Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: 64,
            backgroundColor: "#111426",
          }}
        >
          <SearchInput />
          <Row gutter={[8, 16]}>
            <Col span={6} style={{ marginTop: 32, borderRadius: 16 }}>
              <Movie />
              {/* {movies.map((m, idx) => {
        return <Movie key={m.id} {...m} />;
      })} */}
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default Main;
