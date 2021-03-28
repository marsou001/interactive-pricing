import styled from "styled-components";
import PricingFormSliderGridPageViews from "./PricingFormSliderGridPageViews/PricingFormSliderGridPageViews";
import PricingFormSlider from "./PricingFormSlider/PricingFormSlider";
import PricingFormSliderGridPrice from "./PricingFormSliderGridPrice/PricingFormSliderGridPrice";

interface PricingFormSliderGridProps {
    thumbBackgroundColorOnFocus: string;
    pageViews: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PricingFormSliderGridContainer = styled.div`
    display: grid;
    grid-template-areas:
        "PageViews"
        "Slider"
        "Price";
    margin-bottom: 1rem;
    @media screen and (min-width: 500px) {
        grid-template-areas:
            "PageViews Price"
            "Slider Slider";
        align-items: center;
    }
`;

function PricingFormSliderGrid({
    thumbBackgroundColorOnFocus,
    pageViews,
    handleChange,
}: PricingFormSliderGridProps): JSX.Element {
    const price: string = Math.floor(parseInt(pageViews) / 2).toFixed(2);

    return (
        <PricingFormSliderGridContainer>
            <PricingFormSliderGridPageViews>
                {pageViews}k pageviews
            </PricingFormSliderGridPageViews>
            <PricingFormSlider
                pageViews={pageViews}
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                handleChange={handleChange}
            />
            <PricingFormSliderGridPrice>
                <span className="price">${price}</span>
                <span className="period"> / month</span>
            </PricingFormSliderGridPrice>
        </PricingFormSliderGridContainer>
    );
}

export default PricingFormSliderGrid;
