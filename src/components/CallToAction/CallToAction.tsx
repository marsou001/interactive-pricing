import styled from 'styled-components';

const CallToActionContainer = styled.section`
    font-size: 15px;
    color: hsl(227, 35%, 25%);
`;

const CallToActionHeader = styled.h2``;
const CallToActionParagraph = styled.p`
    line-height: 1.5rem;
`;

function CallToAction() {
    return (
        <CallToActionContainer>
            <CallToActionHeader>Simple, traffic-based pricing</CallToActionHeader>
            <CallToActionParagraph>Sign-up for our 30-day trial.<br /> No credit card required</CallToActionParagraph>
        </CallToActionContainer>
    )
}

export default CallToAction;