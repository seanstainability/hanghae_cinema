import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/async/movie";
import { Layout, Row, Col } from "antd";
import Movie from "../components/Movie";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { Spinner, Input } from "../elements";
import InfinityScroll from "../shared/InfinityScroll";

const Main = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  //   const user_info = useSelector((state) => state.user.user);
  const { list, paging, isDone, isLoading } = useSelector(
    (state) => state.movie
  );

  React.useEffect(() => {
    if (list.length < 2) {
      dispatch(getMovies());
    }
  }, []);

  return (
    <>
      <Layout
        style={{
          height: "100vh",
          padding: "0 50px",
          // marginTop: 64,
          backgroundColor: "#111426",
        }}
      >
        {/* {isLoading && <Spinner />} */}
        <Header history={history} />
        {/* <Layout.Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: 64,
            backgroundColor: "#111426",
          }}
        > */}
        <SearchInput />
        <Row gutter={[8, 16]}>
          {/* <InfinityScroll
            callNext={() => {
              dispatch(getMovies(paging.next));
            }}
            isNext={paging.next ? true : false}
            loading={isLoading}
          > */}
          {isDone &&
            list.map((m) => {
              return (
                <Col span={6}>
                  <Movie key={m.id} {...m} history={history} />
                </Col>
              );
            })}
          {/* </InfinityScroll> */}
        </Row>
        {/* </Layout.Content> */}
      </Layout>
    </>
  );
};

export default Main;
