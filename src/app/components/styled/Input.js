import styled from 'styled-components';

const Input = styled.input`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #2F3D5C;
    border: none;
    border-radius: 2px;
    color: white;
    &:focus {
        outline: 1px dashed white;
    }
`;

export default Input;