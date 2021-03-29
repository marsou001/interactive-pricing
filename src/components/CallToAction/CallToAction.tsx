import styled from "styled-components";

const CallToActionContainer = styled.section`
    font-size: 15px;
    margin-bottom: 3rem;
`;

const CallToActionHeader = styled.h2`
    color: hsl(227, 35%, 25%);
`;

const CallToActionParagraph = styled.p`
    color: hsl(225, 15%, 71%);
    line-height: 1.4rem;
`;

function CallToAction() {
    return (
        <CallToActionContainer id="call-to-action">
            <CallToActionHeader>
                Simple, traffic-based pricing
            </CallToActionHeader>
            <CallToActionParagraph>
                Sign-up for our 30-day trial.
                <br /> No credit card required
            </CallToActionParagraph>
        </CallToActionContainer>
    );
}

export default CallToAction;
