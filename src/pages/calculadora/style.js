import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid black;
    border-radius: 8px;
    padding-inline: 16px;
    padding-block: 8px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    border: 1px solid black;
    color: #4B0082;
    text-transform: uppercase;
    font-weight: bold


`;


export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(to bottom, #BA55D3, #4B0082);
    color: white;

    `;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    padding-inline: 20px;
`;

export const H3 = styled.h3`
`

export const Label = styled.label`
`