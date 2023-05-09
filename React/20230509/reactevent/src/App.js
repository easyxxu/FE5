import React, { useState } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import Modal from "./Modal";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };
  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }
  return (
    <>
      {login ? <Homepage /> : <Login user={user} setLogin={setLogin} />}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용약관</h2>
        </Modal>
      )}
    </>
  );
}

export default App;
