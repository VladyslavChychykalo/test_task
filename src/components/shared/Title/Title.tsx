import styled from "styled-components"

const StyledTitle = styled.h3``

const Title: React.FC<{ children: string }> = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default Title