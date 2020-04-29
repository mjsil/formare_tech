import styled from 'styled-components';

export const Owner = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;

    img {
        margin-left: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    h1 {
        margin-left: 10px;
    }
`;

export const ContainerMessages = styled.div`
    padding: 10px 20px;
    border: 1px solid #7159c1;
    border-radius: 4px;
    margin-top: 10px;
`;

export const ContainerSend = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #7159c1;
        border-radius: 4px;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ChatList = styled.ul`
    list-style: none;
    height: 400px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }

    li {
        display: flex;
        justify-content: flex-end;

        & + li {
            margin-top: 15px;
        }

        p {
            word-wrap: break-word;
            max-width: 50%;
            background: #7159c1;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            line-height: 20px;

            strong {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                margin-top: 5px;

                span {
                    font-size: 10px;

                    & + span {
                        margin-top: -5px;
                        font-weight: bold;
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;
