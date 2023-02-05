import { useDispatch } from 'react-redux';

import { ReactComponent as Trash } from '../../../assets/trash.svg';
import { removeContact } from '../../../model/contactsSlice';

import Field from './template';

const Contact = ({ contact }) => {
    const dispatch = useDispatch()

    return (
        <li className="list-group-item m-2 d-flex align-items-center justify-content-between">
                <span className='d-flex flex-column w-auto align-items-center span'>
                    <Field contact={{contact, value: "name"}} />
                    <Field contact={{contact, value: "phone"}} />
                </span>
                <Trash width="20px" height="30px" className="trash" onClick={() => dispatch(removeContact(contact.id))} />
            </li>
    )
};

export default Contact;