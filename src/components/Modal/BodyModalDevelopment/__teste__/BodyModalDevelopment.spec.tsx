import React from "react";
import render from 'react-test-renderer';
import BodyModalDevelopment from "../index";

test('Check render BodyModalDevelopment component', ()=>{
  const BodyModalDevelopmentRender = render.create(<BodyModalDevelopment/>).toJSON();
  expect(BodyModalDevelopmentRender).toMatchSnapshot();
});