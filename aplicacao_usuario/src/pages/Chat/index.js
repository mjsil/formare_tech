import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Owner, UserInfo, ChatList, DateInfo } from './styles';

export default function Chat() {
    const history = useHistory();
    const userName = localStorage.getItem('userName')
    const [friends, setFriends] = useState([]);

    const message_ = useSelector(state => state.post.reduce((message, post) => {
        message[post.id_friend] = post.message;

        return message;
    }, {}))

    const date_ = useSelector(state => state.post.reduce((date, post) => {
        date[post.id_friend] = post.date;

        return date;
    }, {}))

    const hour_ = useSelector(state => state.post.reduce((hour, post) => {
        hour[post.id_friend] = post.hours;

        return hour;
    }, {}))

    useEffect(() => {

        async function loadFriend() {
            const response = await api.get('/friends');

            const data = response.data.map(friend => (
                friend
            ))

            setFriends(data);
        }

        loadFriend();
    }, [])

    function handleMessage(id) {
        localStorage.setItem('friendId', id);

        history.push('/send/message');
    }

    return (
        <Container>
            <Owner>
                <h1>Logado com: <span>{userName}</span></h1>
                <Link to="/">
                    <FaSignOutAlt size={30} color='#7159c1' />
                </Link>
            </Owner>

            <ChatList>
                {friends.map((friend, index) => (
                    <li key={index} onClick={() => handleMessage(friend.id)}>

                        <UserInfo>
                            <img src={friend.user_avatar} alt={friend.user_name} />
                            <div>
                                <strong>{friend.user_name}</strong>
                                <span>{message_[friend.id] || ''}</span>
                            </div>
                        </UserInfo>
                        <DateInfo>
                            <span>{date_[friend.id] || ''}</span>
                            <strong>{hour_[friend.id] || ''}</strong>
                        </DateInfo>
                    </li>
                ))}
            </ChatList>
        </Container>
    );
}
