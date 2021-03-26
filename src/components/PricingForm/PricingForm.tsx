import { useState } from "react";
import styled from "styled-components";
import PricingFormSlider from "./PricingFormSlider/PricingFormSlider";

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

const PricingFormSliderGrid = styled.div`
    display: grid;
    grid-template-areas:
        "PageViews"
        "Slider"
        "Price";
    @media screen and (min-width: 500px) {
        grid-template-areas:
            "PageViews Price"
            "Slider Slider";
        align-items: center;
    }
`;

const PricingFormPageViews = styled.span`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    grid-area: PageViews;
    @media screen and (min-width: 500px) {
        text-align: left;
    }
`;

const PricingFormPrice = styled.span`
    grid-area: Price;
    @media screen and (min-width: 500px) {
        text-align: right;
    }
    .price {
        color: hsl(227, 35%, 25%);
        font-size: 1.9rem;
        font-weight: 700;
    }
    .period {
        display: inline-block;
        transform: translate(5px, -5px);
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
            <PricingFormSliderGrid>
                <PricingFormPageViews>100k pageviews</PricingFormPageViews>
                <PricingFormSlider
                    price={price}
                    thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                    handleChange={handleChange}
                />
                <PricingFormPrice>
                    <span className="price">$16.00</span>
                    <span className="period"> / month</span>
                </PricingFormPrice>
            </PricingFormSliderGrid>
        </PricingFormContainer>
    );
}

export default PricingCard;
