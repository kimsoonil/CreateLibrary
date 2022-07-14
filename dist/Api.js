import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./button.css";
/**
 * Primary UI component for user interaction
 */

export const APi = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const [dataState, setDataState] = useState([]);
  useEffect(() => {
    const res = fetch("https://service.clozup.kr/api/questions").then(res => res.json()).then(res => {
      console.log(res);
      setDataState(res.result);
    });
  }, []);
  return dataState.length !== 0 ? /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, dataState.map((stateItem, index) => {
    return /*#__PURE__*/React.createElement("div", {
      style: itemStyle,
      key: index
    }, /*#__PURE__*/React.createElement("div", null, stateItem.brand_name), /*#__PURE__*/React.createElement("div", null, stateItem.name), /*#__PURE__*/React.createElement("div", null, stateItem.email), /*#__PURE__*/React.createElement("div", null, stateItem.title, " ", stateItem.content));
  })) : /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, "\uB85C\uB529\uC911");
};
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const itemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: 10,
  margin: 5,
  border: "1px solid #dedede",
  "& > div": {
    width: 100,
    height: 30
  }
};
APi.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};
APi.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined
};