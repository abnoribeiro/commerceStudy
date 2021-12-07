import React from "react";
import render from 'react-test-renderer';
import Home from "../index";

test('Check render Home screen', ()=>{
  const HomeRender = render.create(<Home/>).toJSON();
  expect(HomeRender).toMatchSnapshot();
});