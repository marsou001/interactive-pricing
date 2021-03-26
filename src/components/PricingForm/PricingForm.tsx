import { useState } from "react";
import styled from "styled-components";
import PricingFormSliderGrid from "./PricingFormSliderGrid/PricingFormSliderGrid";

const PricingFormContainer = styled.section`
    color: hsl(225, 15%, 71%);
    background-color: #fff;
    font-size: 0.8rem;
    padding: 1.5rem;
    border-radius: 6px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 500px) {
        grid-template-areas:
            "PageViews Price"
            "Slider Slider";
        align-items: center;
        padding: 1.9rem;
    }
`;

let thumbBackgroundColorOnFocus = "";

function PricingCard() {
    const [price, setPrice] = useState("23");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        thumbBackgroundColorOnFocus =
            e.target.valueAsNumber > parseInt(price)
                ? "hsl(174, 67%, 41%)"
                : "hsl(174, 77%, 80%)";
        setPrice(e.target.value);
    };

    return (
        <PricingFormContainer>
            <PricingFormSliderGrid
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                price={price}
                handleChange={handleChange}
            />
        </PricingFormContainer>
    );
}

export default PricingCard;
