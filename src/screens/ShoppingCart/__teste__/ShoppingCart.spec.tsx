import React from "react";
import render from 'react-test-renderer';
import ShoppingCart from "../index";

test('Check render Shopping screen', ()=>{
  const ShoppingCartRender = render.create(<ShoppingCart/>).toJSON();
  
  expect(ShoppingCartRender).toMatchSnapshot();
});