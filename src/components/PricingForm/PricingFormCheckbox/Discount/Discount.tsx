import styled from 'styled-components';

const Discount = styled.span`
    color: hsla(15, 100%, 70%, 1);
    background-color: hsla(15, 100%, 70%, 0.2);
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