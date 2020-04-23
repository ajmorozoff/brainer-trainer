import styled from 'styled-components';

const InlineButton = styled.button`
    font-size: 0.75rem;
    padding: 0;
    margin: 0 1rem;
    cursor: pointer;
    background: none;
    font-weight: bold;
    color: #80D34A;
    border: none;
    transition: color 300ms;
    &:hover {
        color: #61A138;
    }
    &:focus {
        outline: 1px solid black;
    }
`;

export default InlineButton;