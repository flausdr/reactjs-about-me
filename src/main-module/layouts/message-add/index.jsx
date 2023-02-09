import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeAllMessages } from '../../model/contactsSlice';

import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';

import './style.scss';
import Modal from '../modal';

const MessageAdd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false),
        dispatch = useDispatch();

    return (
        <div className='z-index-1'>
            <h2 className='text-center m-5 font-weight-lighter'>Messages</h2>

            <span className='d-flex justify-content-center'>
                <span className="span-mail d-flex w-25 justify-content-around align-items-center mr-5 border border-dark rounded py-2 px-4 btn-outline-secondary"
                onClick={() => setIsModalOpen(true)}>
                    Do you want to send a message? 
                    <Mail className="mail" width={25} height={25}/>
                </span>
                <span className="span-clear d-flex w-auto justify-content-around align-items-center border border-dark btn-danger rounded py-2 px-4"
                onClick={() => dispatch(removeAllMessages())}>
                    Clear all messages
                    <Delete className="clear ml-3" width={20} height={20}/>
                </span>
            </span>

            <Modal state={{isModalOpen, setIsModalOpen}}/>
        </div>
    )
};

export default MessageAdd;