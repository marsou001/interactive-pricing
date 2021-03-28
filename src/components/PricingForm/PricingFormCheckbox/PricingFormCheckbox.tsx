import styled, { createGlobalStyle } from "styled-components";
import PricingFormCheckboxFlex from './PricingFormCheckboxFlex/PricingFormCheckboxFlex';
import CheckboxLabel from './CheckboxLabel/CheckboxLabel';
import CustomCheckbox from './CustomCheckbox/CustomCheckbox';
import Input from './Input/Input';
import Discount from './Discount/Discount';

interface PricingFormCheckboxProps {
    isYearly: boolean;
    handleClick: () => void;
}

const GlobalStyle = createGlobalStyle`
    .checkbox-active {
        background-color: hsl(174, 77%, 80%);
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
                    <CheckboxLabel>
                        <Input type="checkbox" />
                        <CustomCheckbox
                            onClick={handleClick}
                            className={isYearly ? "checkbox-active" : ""}
                        />
                    </CheckboxLabel>
                    <YearlyBilling>Yearly billing</YearlyBilling>
                    <Discount>-25% <span>discount</span></Discount>
                </PricingFormCheckboxFlex>
            </PricingFormCheckboxContainer>
        </>
    );
}

export default PricingFormCheckbox;
