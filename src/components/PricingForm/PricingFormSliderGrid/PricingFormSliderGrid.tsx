import styled from "styled-components";
import PricingFormSlider from "./PricingFormSlider/PricingFormSlider";

interface PricingFormSliderGridProps {
    thumbBackgroundColorOnFocus: string;
    price: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PricingFormSliderGridContainer = styled.div`
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

function PricingFormSliderGrid({
    thumbBackgroundColorOnFocus,
    price,
    handleChange,
}: PricingFormSliderGridProps) {
    return (
        <PricingFormSliderGridContainer>
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
        </PricingFormSliderGridContainer>
    );
}

export default PricingFormSliderGrid;
