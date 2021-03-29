import styled from "styled-components";
import iconCheck from "../../../../images/icon-check.svg";

const PricingFormSubmitBenefitsListItem = styled.li`
    position: relative;
    width: fit-content;
    margin: auto;
    padding-bottom: 0.8rem;
    padding-left: 25px;
    &::before {
        content: "";
        background-image: url(${iconCheck});
        position: absolute;
        top: 5px;
        left: 0px;
        width: 9px;
        height: 8px;
    }
    @media screen and (min-width: 500px) {
        margin: 0;
    }
`;

export default PricingFormSubmitBenefitsListItem;
