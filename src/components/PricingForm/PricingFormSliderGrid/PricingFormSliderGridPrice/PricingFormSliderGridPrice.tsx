import styled from 'styled-components';

const PricingFormSliderGridPrice = styled.span`
    grid-area: Price;
    @media screen and (min-width: 500px) {
        text-align: right;
    }
    .price {
        color: hsl(227, 35%, 25%);
        font-size: 1.9rem;
        font-weight: 700;
    }
    .period {
        display: inline-block;
        transform: translate(5px, -5px);
    }
`;

export default PricingFormSliderGridPrice;