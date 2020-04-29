import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';

import * as MessageActions from '../../store/modules/post/actions';

import api from '../../services/api';

import Container from '../../components/Container';
import {
    Owner, ContainerMessages, ContainerSend, SubmitButton,
    ChatList
} from './styles';

export default function Message() {
    const dispatch = useDispatch();
    const id_friend = localStorage.getItem('friendId');

    const post = useSelector(state => state.post.filter(post => {
        return post.id_friend === id_friend
    }));

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const completeDate = `${day}/${month + 1}/${year}`;
    const completeHours = `${hours}:${minutes}`;

    const [users, setUsers] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function loadMessages() {
            const frind = await api.get(`/friends/${id_friend}`);

            setUsers(frind.data);
        }

        loadMessages();
    }, [id_friend])

    function handleSendMessage() {
        dispatch(MessageActions.sendMessageRequest(id_friend, message, completeDate, completeHours));

        setMessage('');
    }

    return (
        <Container>
            <Owner>
                <Link to="/chat">
                    <FaArrowLeft size={30} color='#7159c1' />
                </Link>
                <img src={users.user_avatar} alt={users.user_name} />
                <h1>{users.user_name}</h1>
            </Owner>
            <ContainerMessages>
                <ChatList>
                    {post.map((postMessage, index) => (
                        <li key={index}>
                            <p>
                                {postMessage.message}
                                <strong>
                                    <span>{postMessage.date}</span>
                                    <span>{postMessage.hours}</span>
                                </strong>
                            </p>
                        </li>
                    ))}
                </ChatList>
            </ContainerMessages>
            <ContainerSend>
                <input
                    type='text'
                    placeholder='Message...'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <SubmitButton onClick={handleSendMessage}>
                    <FaPaperPlane size={20} color='#fff' />
                </SubmitButton>
            </ContainerSend>
        </Container>
    );
}
