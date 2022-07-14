import React from "react";
import { APi } from "./Api"; // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: "Example/APi",
  component: APi,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = args => /*#__PURE__*/React.createElement(APi, args);

export const testApi = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

testApi.args = {};