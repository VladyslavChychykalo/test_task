import styled from 'styled-components'

const StyledLabel = styled.label``

const StyledInput = styled.input``

const StyledBlock = styled.div``

const Radio = ({text}: {text: string}) => {
  return (
    <StyledLabel htmlFor="customRadioId">
      <StyledInput type="radio" id="customRadioId" name="gender" />
      <StyledBlock></StyledBlock>
      {text}
    </StyledLabel>
  );
};

export default Radio;
