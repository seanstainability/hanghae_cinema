import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {
  const { children, callNext, isNext, isLoading } = props;

  const _handleScroll = _.throttle(() => {
    if (isLoading) {
      return;
    }
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    // console.log("100 / ", scrollHeight - innerHeight - scrollTop);
    // console.log("scrollY", window.scrollY);

    if (scrollHeight - innerHeight - scrollTop < 100) {
      callNext();
    }
  }, 300);

  const handleScroll = useCallback(_handleScroll, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isNext) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNext, isLoading]);

  return (
    <React.Fragment>
      {props.children}
      {/* {isNext && <Spinner />} */}
    </React.Fragment>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  isNext: false,
  isLoading: false,
};

export default InfinityScroll;
