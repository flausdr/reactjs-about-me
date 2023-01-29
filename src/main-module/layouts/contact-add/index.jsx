import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ValidateInputName, ValidateInputPhone } from "../../../plugins/validations";
import { addContact, removeAllContacts } from '../../model/contactsSlice';

const ContactAdd = () => {
    const dispatch = useDispatch();

    const clearInput = () => {
        const form = document.querySelector('.form-contacts'),
            inputName = form.querySelector('#user-name'),
            inputPhone = form.querySelector('#user-phone');
            if (ValidateInputName(inputName) && ValidateInputPhone(inputPhone)) {
                const obj = {
                    name: inputName.value,
                    phone: inputPhone.value,
                    id: nanoid()
                }
                dispatch(addContact(obj))
            }
            inputName.value = ''
            inputPhone.value = ''
    }

    return (
        <div className="d-flex form-group w-75 mx-auto justify-content-around align-items-end form-contacts">
            <span className="w-40">
                <label htmlFor="user-name">Name:</label>
                <input type="text" className="form-control" id="user-name" placeholder="Chris Rock" />
            </span>
            <span className="w-40">
                <label htmlFor="user-phone">Phone:</label>
                <input type="text" className="form-control" id="user-phone" placeholder="+3809920232402" />
            </span>
            <button type="button" className="btn btn-outline-secondary text-dark h-100 px-5" onClick={() => {
                clearInput();
            }}>Submit</button>
            <button type="button" className="btn btn-outline-danger text-dark h-100 px-5" onClick={() => {
                dispatch(removeAllContacts())
            }}>Clear all</button>
        </div>
    )
};

export default ContactAdd;