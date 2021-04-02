import styled from "styled-components";

const PricingFormSliderGridPrice = styled.span`
    grid-area: Price;
    @media screen and (min-width: 500px) {
        text-align: right;
    }
    >div {
        text-align: right;
        position: relative;
        display: inline-block;
        width: 160px;
        .price {
            color: hsl(227, 35%, 25%);
            font-size: 1.9rem;
            font-weight: 700;
            position: absolute;
            top: -19px;
            left: 8px;
        }
        .period {
            display: inline-block;
            margin-left: 5px;
            transform: translateY(-5px);
        }
    }
`;

export default PricingFormSliderGridPrice;
