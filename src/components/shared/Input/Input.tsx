import styled from "styled-components";

const StyledInputContainer = styled.div`
  position: relative;
  padding-top: 13px;
  margin-bottom: 30px;
`;

const StyledInput = styled.input<{ isError: boolean }>`
  width: 100%;
  border: 0;
  border-bottom: ${({ isError }) =>
    !isError ? "1px solid rgb(133, 133, 133)" : "1px solid red"};
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease-out;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
  }

  &:focus {
    border-bottom: ${({ isError }) => isError ? '2px solid red' : '2px solid #3951b2'}
  }

  &::placeholder {
    color: transparent;
  }

  &:focus:required:invalid {
    border-bottom: 2px solid red;
  }
  /* 
  &:required:invalid + label:before {
    content: "*";
  } */

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 13px;
    top: -5px;
    color: ${({ isError }) => isError ? 'red' : '#3951b2'};
  }

  &:not(:focus) + label {
    color: ${({ isError }) => (!isError ? "rgb(133, 133, 133)" : "red")};
  }
`;

const StyledLabel = styled.label`
  color: rgb(133, 133, 133);
  font-size: 18px;
  pointer-events: none;
  position: absolute;
  top: 8px;
  left: 0;
  transition: all 0.3s ease-out;
`;

const StyledErrorMessage = styled.p`
  color: red;
  margin: 0;
  margin-top: 5px;
`

const Input = (props: any) => {
  const { label, type, name, errors, onChange, onBlur, values, touched } = props;

  return (
    <StyledInputContainer>
      <StyledInput
        name={name}
        placeholder=" "
        type={type}
        isError={!!errors[name] && touched[name]}
        onChange={onChange}
        onBlur={onBlur}
        value={values[name]}
      />
      <StyledLabel>{label}</StyledLabel>
      {errors[name] && touched[name] && (
        <StyledErrorMessage>{errors[name]}</StyledErrorMessage>
      )}
    </StyledInputContainer>
  );
};

export default Input;
