import styled, { createGlobalStyle } from "styled-components";

interface PricingFormCheckboxProps {
    isYearly: boolean;
    handleClick: () => void;
}

const GlobalStyle = createGlobalStyle`
    .checkbox-active {
        background-color: #2196F3;
        &::before {
            left: 40px;
        }
    }
`;

const PricingFormCheckboxFlex = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PricingFormCheckboxContainer = styled.div`
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    width: 90%;
    @media screen and (min-width: 500px) {
        width: 75%;
    }
`;

const MonthlyBilling = styled.span``;

const CheckboxLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 70px;
    height: 34px;
    transform: scale(0.6);
`;
const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const CustomCheckbox = styled.div`
    background-color: #ccc;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 9999px;
    transition-property: background-color;
    transition-duration: 0.4s;
    &::before {
        content: "";
        background-color: white;
        position: absolute;
        bottom: 6px;
        left: 6px;
        width: 23px;
        height: 23px;
        border-radius: 9999px;
        transition-property: left;
        transition-duration: 0.4s;
    }
`;

const YearlyBilling = styled.span``;

const Discount = styled.span`
    color: hsla(15, 100%, 70%, 1);
    background-color: hsla(15, 100%, 70%, 0.2);
    display: inline-block;
    padding: 5px 9px;
    border-radius: 9999px;
    transform: translateX(3px);
`;

function PricingFormCheckbox({
    isYearly,
    handleClick,
}: PricingFormCheckboxProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <PricingFormCheckboxFlex>
                <PricingFormCheckboxContainer>
                    <MonthlyBilling>Monthly billing</MonthlyBilling>
                    <CheckboxLabel>
                        <Input type="checkbox" />
                        <CustomCheckbox
                            onClick={handleClick}
                            className={isYearly ? "checkbox-active" : ""}
                        />
                    </CheckboxLabel>
                    <YearlyBilling>Yearly billing</YearlyBilling>
                    <Discount>-25%</Discount>
                </PricingFormCheckboxContainer>
            </PricingFormCheckboxFlex>
        </>
    );
}

export default PricingFormCheckbox;
