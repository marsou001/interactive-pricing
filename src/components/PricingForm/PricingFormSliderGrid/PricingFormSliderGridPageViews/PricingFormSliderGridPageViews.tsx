import styled from "styled-components";

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
            padding-left: 17px;
            .absolute {
                left: 0px;
            }
        }
    }
`;

export default PricingFormSliderGridPageViews;
