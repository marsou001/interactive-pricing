import styled from "styled-components";

const PricingFormSubmitButton = styled.input`
    font-size: inherit;
    color: inherit;
    background-color: hsl(227, 35%, 25%);
    padding: 10px 35px;
    border: none;
    outline: none;
    border-radius: 9999px;
    cursor: pointer;
    &:hover {
        color: hsl(230, 100%, 99%);
    }
    &:focus {
        color: hsl(230, 100%, 99%);
        background-color: hsl(227, 35%, 14%);
    }
`;

export default PricingFormSubmitButton;
