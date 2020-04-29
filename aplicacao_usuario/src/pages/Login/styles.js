import styled from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    background: #7159c1;
    border: 0;
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;
