import React, { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "./Modal";

const Two = css`
  color: gray;
  width: 200px;
  font-size: 24px;
  border: 0;
  padding: 10px;
  border-radius: 25px;
  background: #f2f2f2;
  display: block;
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
const Three = styled.button`
  ${Two}
`;
const Four = styled.button`
  ${Two}
  color: seagreen;
  border: 1px solid seagreen;
`;
const Five = styled.button`
  ${Two}
  background-color: seagreen;
  color: white;
`;

const App = () => {
  const [modal, setModal] = useState(false);
  function modalOpen() {
    setModal(true);
  }
  function modalClose() {
    setModal(false);
  }
  return (
    <>
      <Three onClick={modalOpen}>Modal</Three>
      <Four>BUTTON</Four>
      <Five>BUTTON</Five>
      {modal && <Modal modalClose={modalClose} />}
    </>
  );
};

export default App;
