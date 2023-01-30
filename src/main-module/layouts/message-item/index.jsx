import { useSelector, useDispatch } from 'react-redux';
import { removeMessage, editMessage } from '../../model/contactsSlice';

import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Pencil } from '../../assets/pencil.svg';

import './style.scss';

const MessageItem = () => {
    const contacts = useSelector(state => state.counter),
        dispatch = useDispatch();

    const oldMessages = []

    const changeOnInput = (e) => {
        const target = document.querySelector('.message-text');
        target.contentEditable === "false" ? target.contentEditable = "true" : target.contentEditable = "false";
        target.focus();
    }

    const changeContentEditable = (e) => {
        return e.target.contentEditable === "true" ? e.target.contentEditable = "false" : null
    }

    contacts.map(({ phone, name, id, messages }) => messages.map((message) => {
        return oldMessages.push({ date: message.date, text: <li className="list-group-item m-2 d-flex border-top border-bottom my-2 text-center flex-column" key={message.id}>
            <h5 className='font-weight-normal mb-5 mt-3 message-text'
            contentEditable="false"
            suppressContentEditableWarning={true}
            onKeyDown={(e) => {
                const messageText = document.querySelector('.message-text');
                return e.code === 'Enter' ? dispatch(editMessage({ contactId: id, messageId: message.id, text:  messageText.innerText})) && changeContentEditable(e) : null
            }}>{message.text}</h5>
            <span className='d-flex justify-content-between align-items-center'>
                <span className='d-flex flex-column'>
                    <h6 className='font-weight-light'>{name}</h6>
                    <h6 className='font-weight-light'>{phone}</h6>
                </span>
                <span className='d-flex'>
                    <Pencil width="20" height="30" className='pencil mr-5' onClick={(e) => changeOnInput(e)} />
                    <Trash width="20" height="30" className="trash" onClick={() => {
                        dispatch(removeMessage({
                            id,
                            messageId: message.id
                        }))
                    }}/>
                </span>
            </span>
        </li>})
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