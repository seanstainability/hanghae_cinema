import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/async/movie";
import { Layout, Row, Col } from "antd";
import Movie from "../components/Movie";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { Spinner, Input } from "../elements";
// import InfinityScroll from "../shared/InfinityScroll";
import { Pagination } from "antd";

const Main = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  //   const user_info = useSelector((state) => state.user.user);
  const { list, paging, isDone, isLoading } = useSelector(
    (state) => state.movie
  );
  // const [scrollY, setScrollY] = useState(sessionStorage.getItem("scrollY"));
  const [current, setCurrent] = useState(1);
  console.log(paging);

  useEffect(() => {
    // sessionStorage.setItem("scrollY", 0);
    // setScrollY(sessionStorage.getItem("scrollY"));
    // if (list.length < 2) {
    dispatch(getMovies({ current }));
    // }
  }, [current]);

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };

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
        {isLoading && <Spinner />}
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
              sessionStorage.setItem("scrollY", window.scrollY);
              setScrollY(sessionStorage.getItem("scrollY"));
              dispatch(getMovies());
            }}
            isNext={paging.next}
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
        <Pagination
          simple
          style={{ margin: "30px", textAlign: "center", paddingBottom: "60px" }}
          defaultCurrent={1}
          current={current}
          onChange={onChangePage}
          total={paging.total}
        />
        {/* </Layout.Content> */}
      </Layout>
    </>
  );
};

export default Main;
