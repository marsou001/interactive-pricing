import styled from 'styled-components';

const Discount = styled.span`
    color: hsl(15, 100%, 70%);
    background-color: hsl(14, 92%, 95%);
    display: inline-block;
    margin-left: 5px;
    padding: 5px 9px;
    border-radius: 9999px;
    transform: translateX(3px);
    @media screen and (max-width: 500px) {
        >span {
            display: none;
        }
    }    
`;

export default Discount;