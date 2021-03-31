import styled from "styled-components";
import iconSlider from "../../../../images/icon-slider.svg";
import VisuallyHiddenLabel from "../../../../Utils/VisuallyHiddenLabel/VisuallyHiddenLabel";

interface PriceSliderProps {
    pageViews: string;
    thumbBackgroundColorOnFocus: string;
}

interface PricingFormSliderProps extends PriceSliderProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sliderThumbStyle = `
    appearance: none;
    background-color: hsl(174, 86%, 45%);
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 40px;
    width: 40px;
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0px 18px 18px 9px hsla(174, 86%, 45%, 0.3);
`;

const sliderTrackStyle = `    
    appearance: none;
    width: 100%;
    height: 8.4px;
    border-radius: 6px;
    cursor: pointer;
`;

const PricingFormSliderContainer = styled.div`
    grid-area: Slider;
`;

const PriceSlider = styled.input`
    ${sliderTrackStyle}
    background-image: ${(props: PriceSliderProps): string =>
        `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${parseInt(props.pageViews) / 1000}%, hsl(218, 67%, 95%) ${parseInt(props.pageViews) / 1000}%, hsl(218, 67%, 95%))`};
    margin: 2.2rem 0;
    &::-webkit-slider-thumb {
        ${sliderThumbStyle}
    }
    &::-moz-range-thumb {
        ${sliderThumbStyle}
        border: none;
    }
    &:focus {
        outline: none;
        &::-webkit-slider-thumb {
            background-color: hsl(174, 67%, 41%);
            background-color: ${(props: PriceSliderProps): string =>
                props.thumbBackgroundColorOnFocus};
        }
        &::-moz-range-thumb {
            background-color: hsl(174, 67%, 41%);
            background-color: ${(props: PriceSliderProps): string =>
                props.thumbBackgroundColorOnFocus};
        }
    }
    &::-moz-range-track {
        ${sliderTrackStyle}
        background-image: ${(props: PriceSliderProps): string =>
            `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${props.pageViews}%, hsl(218, 67%, 95%) ${props.pageViews}%, hsl(218, 67%, 95%))`};
    }
`;

function PricingFormSlider({
    pageViews,
    thumbBackgroundColorOnFocus,
    handleChange,
}: PricingFormSliderProps): JSX.Element {
    return (
        <PricingFormSliderContainer>
            <VisuallyHiddenLabel htmlFor="page-views">
                Select number of page views
            </VisuallyHiddenLabel>
            <PriceSlider
                type="range"
                id="page-views"
                name="page views"
                min={1_000}
                max={100_000}
                step={1000}
                aria-valuemin={1_000}
                aria-valuemax={100_000}
                aria-valuenow={parseInt(pageViews)}
                pageViews={pageViews}
                thumbBackgroundColorOnFocus={thumbBackgroundColorOnFocus}
                onChange={handleChange}
                value={pageViews}
            />
        </PricingFormSliderContainer>
    );
}

export default PricingFormSlider;
