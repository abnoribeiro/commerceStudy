import React from "react";
import render from 'react-test-renderer';
import App from "../../../App";

test('Check render home screen', ()=>{
  const app = render.create(<App/>).toJSON();
  expect(app).toMatchSnapshot();
});