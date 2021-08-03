import GeneralInfo from "../components/GeneralInfo";
import Workers from "../components/Workers";
import ModalWindow from "../components/ModalWindow";
import { useState } from "react";
import { TableElementsI } from '../helpers/interfaces'

const App: React.FC = () => {
  const [isModalOpen, setModal] = useState(false)
  const [tableElements, setElements] = useState<TableElementsI[]>([
    {
      name: "Vlad",
      date: "30.11.1995",
      profession: "programmer",
      experience: 2,
      gender: "male",
    },
  ]);

  let submitMyForm: any = null;

  const handleSubmitMyForm = (e: any) => {
    if (submitMyForm) {
      submitMyForm(e);
    }
  };

  const bindSubmitForm = (submitForm: any) => {
    submitMyForm = submitForm;
  };

  return (
    <div
      style={{
        maxWidth: "912px",
        margin: "0 auto",
      }}
    >
      <GeneralInfo bindSubmitForm={bindSubmitForm} />
      <Workers tableElements={tableElements} openModal={() => setModal(true)} />
      {isModalOpen && <ModalWindow closeModal={() => setModal(false)} />}
      <button style={{ display: 'block', margin: '0 auto', marginTop: '20px' }} type="button" onClick={handleSubmitMyForm}>
        Check form
      </button>
    </div>
  );
};

export default App;
