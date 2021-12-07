import React from "react";
import render from 'react-test-renderer';
import CardList from "../index";

test('Check render home screen', ()=>{
  const CardListRender = render.create(<CardList/>).toJSON();
  expect(CardListRender).toMatchSnapshot();
});