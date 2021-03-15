import React from "react"
import Header from "../components/header"
import Modal from "../components/modal"

interface IModalContext {
  show: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
}

export const ModalContext = React.createContext<IModalContext>({
  show: false, setShow: () => {}
});

export default function Home() {
  const [show, setShow] = React.useState(false);

  return (
    <ModalContext.Provider value={{ show, setShow }}>
      <Header />
      {show && (
        <Modal />
      )}
    </ModalContext.Provider>
  );
}