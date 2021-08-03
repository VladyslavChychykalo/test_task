import GeneralInfo from "../components/GeneralInfo";
import Workers from "../components/Workers";
import ModalWindow  from "../components/ModalWindow";
import { useRef, useState } from "react";
import { TableElementsI } from '../utils/interfaces'

const App: React.FC = () => {
  const [tableElements, setElements] = useState<TableElementsI[]>([
    {
      name: "Vlad",
      date: "30.11.1995",
      profession: "programmer",
      experience: 2,
      gender: "male",
    },
  ]);

  const formRef = useRef<any>();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };
  // let submitMyForm: any = null;

  // const handleSubmitMyForm = (e: any) => {
  //   if (submitMyForm) {
  //     submitMyForm(e);
  //   }
  // };

  // const bindSubmitForm = (submitForm: any) => {
  //   submitMyForm = submitForm;
  // };

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
      {/* <GeneralInfo bindSubmitForm={bindSubmitForm} />
      <button type="button" onClick={handleSubmitMyForm}>
        Check form
      </button> */}
      <GeneralInfo formRef={formRef} />
      <Workers tableElements={tableElements} />
      <ModalWindow />
      <button type="button" onClick={handleSubmit}>
        Check form
      </button>
    </div>
  );
};

export default App;
