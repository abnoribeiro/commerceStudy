import React from "react";
import render from 'react-test-renderer';
import CardProductShoppingList from "../index";

test('Check render home screen', ()=>{
  const CardProductShoppingListRender = render.create(<CardProductShoppingList/>).toJSON();
  expect(CardProductShoppingListRender).toMatchSnapshot();
});