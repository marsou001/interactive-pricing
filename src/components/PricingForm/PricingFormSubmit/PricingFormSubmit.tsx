import styled from "styled-components";
import PricingFormSubmitBenefitsList from "./PricingFormSubmitBenefitsList/PricingFormSubmitBenefitsList";
import PricingFormSubmitBenefitsListItem from "./PricingFormSubmitBenefitsListItem/PricingFormSubmitBenefitsListItem";
import PricingFormSubmitButton from "./PricingFormSubmitButton/PricingFormSubmitButton";

const PricingFormSubmitContainer = styled.div`
    font-size: 0.7rem;
    font-weight: 700;
    margin-top: 2.9rem;
    @media screen and (min-width: 500px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

function PricingFormSubmit() {
    return (
        <PricingFormSubmitContainer>
            <PricingFormSubmitBenefitsList>
                <PricingFormSubmitBenefitsListItem>
                    Unlimited websites
                </PricingFormSubmitBenefitsListItem>
                <PricingFormSubmitBenefitsListItem>
                    100% data ownership
                </PricingFormSubmitBenefitsListItem>
                <PricingFormSubmitBenefitsListItem>
                    Email reports
                </PricingFormSubmitBenefitsListItem>
            </PricingFormSubmitBenefitsList>
            <PricingFormSubmitButton type="submit" data-testid='start-my-trial' value="Start my trial" />
        </PricingFormSubmitContainer>
    );
}

export default PricingFormSubmit;
