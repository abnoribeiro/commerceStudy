import React from "react";
import render from 'react-test-renderer';
import Header from "../index";

test('Check render Header component', ()=>{
  const HeaderRender = render.create(<Header/>).toJSON();
  expect(HeaderRender).toMatchSnapshot();
});