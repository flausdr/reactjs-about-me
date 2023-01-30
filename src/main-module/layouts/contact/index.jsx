import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Pencil } from '../../assets/pencil.svg';
import { removeContact, editContact } from '../../model/contactsSlice';

import './style.scss';

const Contact = () => {
    const contacts = useSelector((state) => state.counter),
        dispatch = useDispatch();

    const changeOnInput = (e) => {
        const target = e.currentTarget.parentElement.firstChild;
        target.contentEditable === "false" ? target.contentEditable = "true" : target.contentEditable = "false";
        target.focus();
    }

    const changeContentEditable = (e) => {
        return e.target.contentEditable === "true" ? e.target.contentEditable = "false" : null
    }

    const listContacts = contacts.map(contact => {
        return <li className="list-group-item m-2 d-flex align-items-center justify-content-between" key={contact.id}>
                <span className='d-flex flex-column w-auto align-items-center span'>
                    <span className='d-flex align-items-center'>
                        <p className="d-flex align-items-center font-weight-light h4 px-2 my-2 name border-bottom py-1 px-4" 
                        contentEditable="false"
                        suppressContentEditableWarning={true}
                        onKeyDown={(e) => {
                            const obj = {
                                name: e.target.innerText,
                                phone: contact.phone,
                                id: contact.id
                            }
                            return e.code === 'Enter' ? dispatch(editContact(obj)) && changeContentEditable(e) : null}
                        }>{contact.name}</p>
                        <Pencil width="18px" height="18px" className="pencil mx-4" onClick={(e) => {
                            changeOnInput(e);
                        }} />
                    </span>
                    <span className='d-flex align-items-center'>
                        <p className="d-flex align-items-center font-weight-light h5 px-2 my-2 phone" 
                        contentEditable="false"
                        suppressContentEditableWarning={true}
                        onKeyDown={(e) => {
                            const obj = {
                                name: contact.name,
                                phone: e.target.innerText,
                                id: contact.id
                            }
                            return e.code === 'Enter' ? dispatch(editContact(obj)) && changeContentEditable(e) : null
                        }}>{contact.phone}</p>
                        <Pencil width="18px" height="18px" className="pencil mx-4" onClick={(e) => {
                            changeOnInput(e);
                        }}/>
                    </span>
                </span>
                <Trash width="20px" height="30px" className="trash" onClick={() => dispatch(removeContact(contact.id))} />
            </li>
    })

    return (
        <>
            {
                listContacts
            }
        </>
    )
};

export default Contact;