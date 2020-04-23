import styled from 'styled-components';

const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background: ${props => props.primary ? "#D7E200" : "white"};
    color: #2F3D5C;
    border: none;
    cursor: pointer;
    transition: background 300ms;
    &:hover {
        background: #A7B000;
    }
    &:focus {
        outline: 1px solid black;
    }
`;

export default Button;