import { useEffect, useRef } from 'react'
import { useFormik } from "formik";
import { StyledOverlay, StyledModal } from './StyledModalWindow'
import { modalInputArray, conditionInput } from '../../helpers/inputsArray'
import { Input, Title, Select } from '../shared'

const ModalWindow: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const overlayRef = useRef(null)

  const handleKeyPress = (e: any) => {
    if (e.code !== 'Escape') return;
    closeModal()
  }

  const handleOverlayClick = (e: any) => {
    const { current } = overlayRef
    if (current && e.target !== current) return;
    closeModal()
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      experience: "",
      gender: "",
      profession: {}
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      console.log(values);
    },
    // validate: (values) => validateForm(values)
  });

  const { errors, handleSubmit, handleChange, handleBlur, touched, values } = formik

  return (
    <StyledOverlay ref={overlayRef} onClick={handleOverlayClick}>
      <StyledModal>
        <Title>Add user</Title>
        <p>Check all fields before click on Save button</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            {modalInputArray.map(({ name, type, label }) => !!type ? <Input
              key={label}
              name={name}
              type={type}
              label={label}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
              values={values}
            /> : <Select />)}
          </div>

          {values.date && <Input {...conditionInput} errors={errors} touched={touched} onChange={handleChange} onBlur={handleBlur} values={values} />}

          <button type="submit">Create</button>
        </form>
      </StyledModal>
    </StyledOverlay>
  );
};

export default ModalWindow;
