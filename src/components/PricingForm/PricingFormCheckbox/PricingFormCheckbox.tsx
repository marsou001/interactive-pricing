import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PricingFormCheckboxFlex from "./PricingFormCheckboxFlex/PricingFormCheckboxFlex";
import CheckboxContainer from "./CheckboxContainer/CheckboxContainer";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
import Input from "./Input/Input";
import Discount from "./Discount/Discount";
import VisuallyHiddenLabel from "../../../Utils/VisuallyHiddenLabel/VisuallyHiddenLabel";

interface PricingFormCheckboxProps {
    isAnnual: boolean;
    handleEvent: () => void;
}

const GlobalStyle = createGlobalStyle`
    .custom-checkbox-focus {
        outline: 2px solid black;    
    }
    .custom-checkbox-active {
        background-color: hsl(174, 86%, 45%);
        &::before {
            left: clamp(55%, 57%, 60%);
        }
    }
`;

const PricingFormCheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const MonthlyBilling = styled.span``;

const AnnualBilling = styled.span``;

function PricingFormCheckbox({
    isAnnual,
    handleEvent,
}: PricingFormCheckboxProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    const customCheckboxRef = useRef<HTMLDivElement>(null);
    
    const customCheckboxClick = () => {
        inputRef.current?.focus();
        inputRef.current?.click();
    }

    const handleHiddenInputClick = (): void => handleEvent();

    const handleHiddenInputFocus = (): void => {
        customCheckboxRef.current?.classList.add("custom-checkbox-focus");
    };

    const handleHiddenInputBlur = (): void => {
        customCheckboxRef.current?.classList.remove("custom-checkbox-focus");
    };

    const handleHiddenInputKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (e.code === "Spacebar" || e.code === "Enter") {
            handleEvent();
        }        
    };
    return (
        <>
            <GlobalStyle />
            <PricingFormCheckboxContainer>
                <PricingFormCheckboxFlex>
                    <MonthlyBilling>Monthly billing</MonthlyBilling>
                    <CheckboxContainer>
                        <VisuallyHiddenLabel htmlFor="billing-type">
                            Choose between monthly billing and annual billing
                        </VisuallyHiddenLabel>
                        <Input
                            ref={inputRef}
                            type="checkbox"
                            role="switch"
                            id="billing-type"
                            name="annual"
                            onClick={handleHiddenInputClick}
                            onFocus={handleHiddenInputFocus}
                            onBlur={handleHiddenInputBlur}
                            onKeyDown={handleHiddenInputKeyDown}
                            aria-checked={isAnnual}
                        />
                        <CustomCheckbox
                            ref={customCheckboxRef}
                            onClick={customCheckboxClick}
                            className={isAnnual ? "custom-checkbox-active" : ""}
                            aria-hidden="true"
                            data-testid='custom-checkbox'
                        />
                    </CheckboxContainer>
                    <AnnualBilling>Annual billing</AnnualBilling>
                    <Discount>
                        -25% <span>discount</span>
                    </Discount>
                </PricingFormCheckboxFlex>
            </PricingFormCheckboxContainer>
        </>
    );
}

export default PricingFormCheckbox;
