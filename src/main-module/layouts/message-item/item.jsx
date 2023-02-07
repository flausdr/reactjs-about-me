import { useDispatch } from 'react-redux';
import useFocusInsideContentEditable from '../../hooks/focus';

import { removeMessage, editMessage } from '../../model/contactsSlice';

import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Pencil } from '../../assets/pencil.svg';

const Item = ({ contact }) => {
    const dispatch = useDispatch(),
        { name, phone, id, message} = contact;

    const [contentEdit, contentEditableRef, {
        setContentFalse,
        setContentToggle,
    }] = useFocusInsideContentEditable(false);

    return (
        <li className="list-group-item m-2 d-flex border-top border-bottom my-2 text-center flex-column" key={message.id}>
            <h5 className='font-weight-normal mb-5 mt-3 message-text'
            contentEditable={contentEdit}
            suppressContentEditableWarning={true}
            ref={contentEditableRef}
            onKeyDown={(e) => {
                const messageText = document.querySelector('.message-text');
                return e.code === 'Enter' ? dispatch(editMessage({ contactId: id, messageId: message.id, text:  messageText.innerText})) && setContentFalse() : null
            }}>{message.text}</h5>
            <span className='d-flex justify-content-between align-items-center'>
                <span className='d-flex flex-column'>
                    <h6 className='font-weight-light'>{name}</h6>
                    <h6 className='font-weight-light'>{phone}</h6>
                </span>
                <span className='d-flex'>
                    <Pencil width="20" height="30" className='pencil mr-5' onClick={() => setContentToggle()} />
                    <Trash width="20" height="30" className="trash" onClick={() => {
                        dispatch(removeMessage({
                            id,
                            messageId: message.id
                        }))
                    }}/>
                </span>
            </span>
        </li>
    )
};

export default Item;