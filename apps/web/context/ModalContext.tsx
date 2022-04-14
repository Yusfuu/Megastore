import { createContext, useState, FC } from 'react';

interface ModalOpenContext {
  isModalOpen: boolean;
  toggleModal?: () => void;
  form: string;
  setForm: (form: string) => void;
}

const defaultState = {
  isModalOpen: false,
  form: 'login',
  setForm: () => {},
};

export const ModalContext = createContext<ModalOpenContext>(defaultState);

export const ModalProvider: FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultState.isModalOpen);
  const [form, setForm] = useState(defaultState.form);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        form,
        setForm,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
