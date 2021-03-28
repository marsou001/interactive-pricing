import styled from 'styled-components';

const CustomCheckbox = styled.div`
    background-color: hsl(223, 50%, 87%);
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 9999px;
    transition-property: background-color;
    transition-duration: 0.4s;
    &::before {
        content: "";
        background-color: white;
        position: absolute;
        bottom: 6px;
        left: 6px;
        width: 23px;
        height: 23px;
        border-radius: 9999px;
        transition-property: left;
        transition-duration: 0.4s;
    }
`;

export default CustomCheckbox;