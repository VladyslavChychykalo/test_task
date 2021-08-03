import GeneralInfo from "../components/GeneralInfo";
import Workers from "../components/Workers";
import ModalWindow  from "../components/ModalWindow";
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
        padding: "24px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <GeneralInfo bindSubmitForm={bindSubmitForm} />
      <Workers tableElements={tableElements} openModal={() => setModal(true)} />
      {isModalOpen && <ModalWindow closeModal={() => setModal(false)} />}
      <button type="button" onClick={handleSubmitMyForm}>
        Check form
      </button>
    </div>
  );
};

export default App;
