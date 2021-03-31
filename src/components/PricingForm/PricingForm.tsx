import { useState } from "react";
import styled from "styled-components";
import PricingFormCheckbox from "./PricingFormCheckbox/PricingFormCheckbox";
import PricingFormSliderGrid from "./PricingFormSliderGrid/PricingFormSliderGrid";
import PricingFormSubmit from "./PricingFormSubmit/PricingFormSubmit";

const PricingFormContainer = styled.section`
    color: hsl(225, 15%, 71%);
    background-color: #fff;
    font-size: 0.7rem;
    padding: 1.5rem;
    border-radius: 6px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 500px) {
        grid-template-areas:
            "PageViews Price"
            "Slider Slider";
        align-items: center;
        padding: 2.5rem;
    }
`;

let thumbBackgroundColorOnFocus: string;

function PricingCard(): JSX.Element {
    const [pageViews, setPageViews] = useState('50000');
    const [isYearly, setIsYearly] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        thumbBackgroundColorOnFocus =
            e.target.valueAsNumber > parseInt(pageViews)
                ? "hsl(174, 67%, 41%)"
                : "hsl(174, 77%, 80%)";
        setPageViews(e.target.value);
    };

    const handleEvent = (): void => setIsYearly((prevState) => !prevState);

    return (
        <PricingFormContainer>
            <PricingFormSliderGrid
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                pageViews={pageViews}
                isYearly={isYearly}
                handleChange={handleChange}
            />
            <PricingFormCheckbox
                isYearly={isYearly}
                handleEvent={handleEvent}
            />
            <PricingFormSubmit />
        </PricingFormContainer>
    );
}

export default PricingCard;
