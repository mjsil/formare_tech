import styled from 'styled-components';

export const Owner = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;

    h1 {
        color: #333;
        font-size: 15px;
        align-items: center;

        span {
            margin-left: 5px;
            font-size: 25px;
            color: #7159c1;
        }
    }
`;

export const ChatList = styled.ul`
    margin-top: 20px;
    list-style: none;

    li {
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }

        display: flex;
        border: 1px solid #eee;
        padding: 15px 10px;
        border-radius: 4px;
        justify-content: space-between;
        align-items: center;

        & + li {
            margin-top: 10px;
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        span {
            margin-top: 5px;
        }
    }
`;

export const DateInfo = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        margin-top: 5px;
        align-self: flex-end
    }
`;
