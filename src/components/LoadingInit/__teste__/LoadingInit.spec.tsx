import React from "react";
import render from 'react-test-renderer';
import LoadingInit from "../index";

test('Check render home screen', ()=>{
  const LoadingInitRender = render.create(<LoadingInit/>).toJSON();
  expect(LoadingInitRender).toMatchSnapshot();
});