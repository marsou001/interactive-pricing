import styled from "styled-components";
import PricingFormSliderGridPageViews from "./PricingFormSliderGridPageViews/PricingFormSliderGridPageViews";
import PricingFormSlider from "./PricingFormSlider/PricingFormSlider";
import PricingFormSliderGridPrice from "./PricingFormSliderGridPrice/PricingFormSliderGridPrice";

interface PricingFormSliderGridProps {
    thumbBackgroundColorOnFocus: string;
    pageViews: string;
    isAnnual: boolean;
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
    isAnnual,
    handleChange,
}: PricingFormSliderGridProps): JSX.Element {
    const pageviews: string = pageViews.toString().replace(/000$/, "");
    const displayedPageViews: string =
        parseInt(pageViews) >= 10_000 ? pageviews : `0${pageviews}`;

    const monthlyPrice: number = Math.floor(parseInt(pageViews) / 2);
    const annualPrice: number = Math.floor(monthlyPrice * (10 / 12));
    const price: number = isAnnual ? annualPrice : monthlyPrice;
    const modifiedPrice: string = price
        .toFixed(2)
        .toString()
        .replace(/\d{3}\.00/, "");
    const displayedPrice: string = parseInt(modifiedPrice) >= 10 ? modifiedPrice : `0${modifiedPrice}`;

    return (
        <PricingFormSliderGridContainer>
            <PricingFormSliderGridPageViews pageViews={pageViews} data-testid="page-views">
                <span>
                    <span className="absolute">{displayedPageViews}</span>k
                    pageviews
                </span>
            </PricingFormSliderGridPageViews>
            <PricingFormSlider
                pageViews={pageViews}
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                handleChange={handleChange}
            />
            <PricingFormSliderGridPrice data-testid="price-per-month">
                <span>
                    <span className="price">
                        ${displayedPrice === '0' ? '00' : displayedPrice}
                    </span>
                    <span className="period">/ month</span>
                </span>
            </PricingFormSliderGridPrice>
        </PricingFormSliderGridContainer>
    );
}

export default PricingFormSliderGrid;
