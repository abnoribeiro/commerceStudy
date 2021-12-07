import React from "react";
import render from 'react-test-renderer';
import App from "../App";

test('Check render App', ()=>{
  const AppRender = render.create(<App/>).toJSON();
  expect(AppRender).toMatchSnapshot();
});