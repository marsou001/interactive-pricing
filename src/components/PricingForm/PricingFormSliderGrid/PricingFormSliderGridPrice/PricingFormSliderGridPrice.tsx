import styled from "styled-components";

const PricingFormSliderGridPrice = styled.span`
    grid-area: Price;
    @media screen and (min-width: 500px) {
        text-align: right;
    }
    >span {
        text-align: right;
        position: relative;
        display: inline-block;
        width: 110px;
        margin: .5rem 0;
        .price {
            color: hsl(227, 35%, 25%);
            font-size: 1.9rem;
            font-weight: 700;
            position: absolute;
            top: -15px;
            left: 8px;
        }
        .period {
            display: inline-block;            
        }
    }
`;

export default PricingFormSliderGridPrice;
