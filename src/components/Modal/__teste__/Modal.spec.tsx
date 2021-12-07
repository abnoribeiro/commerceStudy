import React from "react";
import render from 'react-test-renderer';
import Modal from "../index";

test('Check render Modal component', ()=>{
  const ModalRender = render.create(<Modal/>).toJSON();
  expect(ModalRender).toMatchSnapshot();
});