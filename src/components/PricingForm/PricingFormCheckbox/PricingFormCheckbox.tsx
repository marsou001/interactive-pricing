import styled, { createGlobalStyle } from "styled-components";
import PricingFormCheckboxFlex from './PricingFormCheckboxFlex/PricingFormCheckboxFlex';
import CheckboxContainer from './CheckboxContainer/CheckboxContainer';
import CustomCheckbox from './CustomCheckbox/CustomCheckbox';
import Input from './Input/Input';
import Discount from './Discount/Discount';
import VisuallyHiddenLabel from "../../../Utils/VisuallyHiddenLabel/VisuallyHiddenLabel";

interface PricingFormCheckboxProps {
    isYearly: boolean;
    handleClick: () => void;
}

const GlobalStyle = createGlobalStyle`
    .checkbox-active {
        background-color: hsl(174, 86%, 45%);
        &::before {
            left: 40px;
        }
    }
`;

const PricingFormCheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const MonthlyBilling = styled.span``;

const YearlyBilling = styled.span``;

function PricingFormCheckbox({
    isYearly,
    handleClick,
}: PricingFormCheckboxProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <PricingFormCheckboxContainer>
                <PricingFormCheckboxFlex>
                    <MonthlyBilling>Monthly billing</MonthlyBilling>
                    <CheckboxContainer>
                        <VisuallyHiddenLabel htmlFor='billing-type'>Choose between monthly billing and yearly billing</VisuallyHiddenLabel>
                        <Input type="checkbox" id='billing-type' />
                        <CustomCheckbox
                            onClick={handleClick}
                            className={isYearly ? "checkbox-active" : ""}
                        />
                    </CheckboxContainer>
                    <YearlyBilling>Yearly billing</YearlyBilling>
                    <Discount>-25% <span>discount</span></Discount>
                </PricingFormCheckboxFlex>
            </PricingFormCheckboxContainer>
        </>
    );
}

export default PricingFormCheckbox;
