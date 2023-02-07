import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage, addContact, removeAllMessages } from '../../model/contactsSlice';
import { ValidateInputPhone } from "../../../plugins/validations";

import MessageItem from '../message-item';
import Search from './search';

import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { ReactComponent as Close } from '../../assets/close.svg';

import './style.scss';
import { nanoid } from '@reduxjs/toolkit';

const MessageAdd = () => {
    const [isShow, setIsShow] = useState(false),
        numbers = useSelector(state => state.counter),
        dispatch = useDispatch();

    const checkIsReal = (phone) => {
        return numbers.map(item => item.phone).includes(phone)
    }
    return (
        <div className='z-index-1'>
            <h2 className='text-center m-5 font-weight-lighter'>Messages</h2>

            <span className='d-flex justify-content-center'>
                <span className="span-mail d-flex w-25 justify-content-around align-items-center mr-5 border border-dark rounded py-2 px-4 btn-outline-secondary"
                onClick={() => setIsShow(true)}>
                    Do you want to send a message? 
                    <Mail className="mail" width={25} height={25}/>
                </span>
                <span className="span-clear d-flex w-auto justify-content-around align-items-center border border-dark btn-danger rounded py-2 px-4"
                onClick={() => dispatch(removeAllMessages())}>
                    Clear all messages
                    <Delete className="clear ml-3" width={20} height={20}/>
                </span>
            </span>

            <div style={{ display: isShow ? 'flex' : 'none'}} className="flex-column align-items-center justify-content-around py-4 border border-info rounded w-50 mx-auto popup h-50">
                <Search show={isShow} />
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
                        setIsShow(false)
                    } else {
                        dispatch(addContact(newObj));
                        setIsShow(false)
                    }
                    phone.value = '';
                    text.value = '';
                }}>Send message</div>
                <Close width="25" height="25" className="close" onClick={() => setIsShow(false)}/>
            </div>

            <ul className="list-group my-5 list-group-flush w-75 mx-auto">      
                <MessageItem />
            </ul>
        </div>
    )
};

export default MessageAdd;