import { useDispatch } from "react-redux";
import useFocusInsideContentEditable from "../../../hooks/focus";

import { ReactComponent as Pencil } from '../../../assets/pencil.svg';
import { editContact } from '../../../model/contactsSlice';

const Field = ({ contact }) => {
    const dispatch = useDispatch();

    const [contentEdit, contentEditableRef, {
        setContentFalse,
        setContentToggle,
    }] = useFocusInsideContentEditable(false);

    return (
        <span className='d-flex align-items-center'>
            <p className="d-flex align-items-center test font-weight-light h4 px-2 my-2 name py-1 px-4"
            style={{border: contentEdit ? "1px solid #929292" : "none"}}
            contentEditable={contentEdit}
            suppressContentEditableWarning={true}
            ref={contentEditableRef}
            onKeyDown={(e) => {
                const obj = {
                    name: contact.value === "name" ? e.target.innerText : contact.contact.name,
                    phone: contact.value === "phone" ? e.target.innerText : contact.contact.phone,
                    id: contact.contact.id
                }
                if (e.target.innerText.length <= 3 && e.code === 'Enter') {
                    e.target.innerText = contact.value === "name" ? contact.contact.name : contact.contact.phone;
                    setContentToggle()
                } else if (e.code === 'Enter' && e.target.innerText.length >= 4) {
                    return e.code === 'Enter' ? dispatch(editContact(obj)) && setContentFalse() : null;
                }
            }}>{contact.value === "name" ? contact.contact.name : contact.contact.phone}</p>
            <Pencil width="18px" height="18px" className="pencil mx-4" onClick={(e) => {
                if (e.currentTarget.parentElement.firstChild.innerText.length <= 3) {
                    e.currentTarget.parentElement.firstChild.innerText = contact.value === "name" ? contact.contact.name : contact.contact.phone;
                }
                setContentToggle();
            }} />
        </span>
    )
}

export default Field;