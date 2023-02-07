import { useSelector } from 'react-redux';

import Item from './item';

import './style.scss';

const MessageItem = () => {
    const contacts = useSelector(state => state.counter);

    const oldMessages = []

    contacts.map(({ phone, name, id, messages }) => messages.map((message) => {
        return oldMessages.push({ date: message.date, text: <Item contact={{ phone, name, id, message}} />})
    }))

    return (
        <>
            {
                oldMessages.sort((a, b) => a.date - b.date).map(item => item.text)
            }
        </>
    )
};

export default MessageItem;