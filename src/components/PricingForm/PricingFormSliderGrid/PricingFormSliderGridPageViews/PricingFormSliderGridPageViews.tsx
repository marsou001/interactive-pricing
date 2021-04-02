import styled from "styled-components";

interface PricingFormSliderGridPageViewsProps {
    pageViews: string,
}

const PricingFormSliderGridPageViews = styled.span`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;
    grid-area: PageViews;
    >div {
        position: relative;
        display: inline-block;
        width: 100px;
        .absolute {
            position: absolute;
            left: -13px;
        }
    }
    @media screen and (min-width: 500px) {
        text-align: left;
        >div {
            padding-left: ${(props: PricingFormSliderGridPageViewsProps) => props.pageViews === '100000' ? '25' : '17'}px;
            .absolute {
                left: 0px;
            }
        }
    }
`;

export default PricingFormSliderGridPageViews;
