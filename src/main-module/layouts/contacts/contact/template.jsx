import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";

import { ReactComponent as Pencil } from '../../../assets/pencil.svg';
import { editContact } from '../../../model/contactsSlice';

const Field = ({ contact }) => {
    const dispatch = useDispatch(),
        [contentEdit, setContentEdit] = useState(false),
        contentEditableRef = useRef(null);

    useEffect(() => {
        const range = document.createRange(),
            selection = window.getSelection();
        range.selectNodeContents(contentEditableRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        contentEditableRef.current.focus();
    }, [contentEdit]);

    return (
        <span className='d-flex align-items-center'>
            <p className="d-flex align-items-center font-weight-light h4 px-2 my-2 name py-1 px-4"
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
                return e.code === 'Enter' ? dispatch(editContact(obj)) && setContentEdit(false) : null 
            }}>{contact.value === "name" ? contact.contact.name : contact.contact.phone}</p>
            <Pencil width="18px" height="18px" className="pencil mx-4" onClick={(e) => {
                setContentEdit(!contentEdit);
            }} />
        </span>
    )
}

export default Field;