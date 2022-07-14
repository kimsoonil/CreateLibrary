import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const APi = ({ primary, backgroundColor, size, label, ...props }) => {
  const [dataState, setDataState] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const res = fetch("https://service.clozup.kr/api/questions")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataState(res.result);
      });
  }, []);

  return dataState.length !== 0 ? (
    <div className={classes.customContainer}>
      {dataState.map((stateItem, index) => {
        return (
          <div className={classes.itemStyle} key={index}>
            <div>{stateItem.brand_name}</div>
            <div>{stateItem.name}</div>
            <div>{stateItem.email}</div>
            <div>
              {stateItem.title} {stateItem.content}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>로딩중</div>
  );
};

const useStyles = createUseStyles({
  customContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: 10,
    margin: 5,
    border: "1px solid #dedede",
    cursor: "point",
    "& > div": {
      padding: 5,
    },
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
});

APi.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

APi.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};
