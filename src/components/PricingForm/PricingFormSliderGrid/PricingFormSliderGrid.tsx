import styled from "styled-components";
import PricingFormSliderGridPageViews from "./PricingFormSliderGridPageViews/PricingFormSliderGridPageViews";
import PricingFormSlider from "./PricingFormSlider/PricingFormSlider";
import PricingFormSliderGridPrice from "./PricingFormSliderGridPrice/PricingFormSliderGridPrice";

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

function PricingFormSliderGrid({
    thumbBackgroundColorOnFocus,
    price,
    handleChange,
}: PricingFormSliderGridProps) {
    return (
        <PricingFormSliderGridContainer>
            <PricingFormSliderGridPageViews>100k pageviews</PricingFormSliderGridPageViews>
            <PricingFormSlider
                price={price}
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                handleChange={handleChange}
            />
            <PricingFormSliderGridPrice>
                <span className="price">$16.00</span>
                <span className="period"> / month</span>
            </PricingFormSliderGridPrice>
        </PricingFormSliderGridContainer>
    );
}

export default PricingFormSliderGrid;
