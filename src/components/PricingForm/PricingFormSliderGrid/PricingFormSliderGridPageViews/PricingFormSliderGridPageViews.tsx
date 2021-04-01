import styled from "styled-components";

const PricingFormSliderGridPageViews = styled.span`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;
    grid-area: PageViews;
    padding-left: 30px;
    .absolute {
        position: absolute;
        left: 98px;
    }
    @media screen and (min-width: 500px) {
        text-align: left;
        padding-left: 17px;
        .absolute {
            left: 0px;
        }
    }
`;

export default PricingFormSliderGridPageViews;
