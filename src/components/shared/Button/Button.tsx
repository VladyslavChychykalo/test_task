import styled from "styled-components";

const StyledButton = styled.button<{}>``;

const Button = (props: any) => {
  return <StyledButton>Some text</StyledButton>;
};

export default Button;
