import { useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../search';

import useOnClickOutside from '../../../plugins/click-outside';
import { ValidateInputPhone } from "../../../plugins/validations";
import { addMessage, addContact } from '../../model/contactsSlice';

import { ReactComponent as Close } from '../../assets/close.svg';

const Modal = ({ state }) => {
    const numbers = useSelector(state => state.counter),
        dispatch = useDispatch(),
        ref = useRef(),
        { isModalOpen, setIsModalOpen } = state;

    const checkIsReal = (phone) => {
        return numbers.map(item => item.phone).includes(phone)
    }

    useOnClickOutside(ref, () => setIsModalOpen(false));

    return (
        <div style={{ display: isModalOpen ? 'flex' : 'none'}} 
            className="flex-column align-items-center justify-content-around py-4 border border-info rounded w-50 mx-auto popup h-50"
            ref={ref}>

            <Search show={isModalOpen} />

            <textarea className="form-control w-75 textarea-form" rows="5" id="message" placeholder='Enter message..' />
            <div className="btn btn-secondary px-5" onClick={() => {
                const text = document.querySelector('.textarea-form'),
                    phone = document.querySelector('.first-input'),
                    newObj = {};

                const obj =  {
                    date: Date.now(),
                    id: nanoid(),
                    text: text.value,
                }

                numbers.map(el => {
                    if (el.phone !== phone.value) {
                        newObj.name = 'User Name';
                        newObj.phone = phone.value;
                        newObj.id = nanoid();
                        newObj.messages = [obj];
                    }
                })
                
                if (ValidateInputPhone(phone) && checkIsReal(phone.value)) {
                    dispatch(addMessage({ phone: phone.value, obj }))
                    setIsModalOpen(false)
                } else if (ValidateInputPhone(phone)) {
                    dispatch(addContact(newObj));
                    setIsModalOpen(false)
                }
                phone.value = '';
                text.value = '';
            }}>Send message</div>

            <Close width="25" height="25" className="close" onClick={() => setIsModalOpen(false)}/>
        </div>
    )
};

export default Modal;