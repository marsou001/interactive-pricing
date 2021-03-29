import styled from "styled-components";
import PricingFormSliderGridPageViews from "./PricingFormSliderGridPageViews/PricingFormSliderGridPageViews";
import PricingFormSlider from "./PricingFormSlider/PricingFormSlider";
import PricingFormSliderGridPrice from "./PricingFormSliderGridPrice/PricingFormSliderGridPrice";

interface PricingFormSliderGridProps {
    thumbBackgroundColorOnFocus: string;
    pageViews: number;
    isYearly: boolean;
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
    isYearly,
    handleChange,
}: PricingFormSliderGridProps): JSX.Element {
    const monthlyPrice: number = Math.floor(pageViews / 2);
    const annualPrice: number = Math.floor(monthlyPrice * (10 / 12));
    const price: number = isYearly ? annualPrice : monthlyPrice;    

    return (
        <PricingFormSliderGridContainer>
            <PricingFormSliderGridPageViews>
                {pageViews.toString().replace(/000$/, 'k')} pageviews
            </PricingFormSliderGridPageViews>
            <PricingFormSlider
                pageViews={pageViews}
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                handleChange={handleChange}
            />
            <PricingFormSliderGridPrice>
                <span className="price">${price.toFixed(2).toString().replace(/\d{3}(?=\.00)/, '')}</span>
                <span className="period"> / month</span>
            </PricingFormSliderGridPrice>
        </PricingFormSliderGridContainer>
    );
}

export default PricingFormSliderGrid;
