import Contacts from '../contacts';
import ContactAdd from '../contact-add';

import './style.scss';

const ListUsers = () => {
    return (
        <div>
            <h2 className='text-center m-5 font-weight-lighter'>Contacts</h2>
            <ContactAdd />
            <ul className="list-group my-5 list-group-flush w-75 mx-auto">      
                <Contacts />          
            </ul>
        </div>
    )
};

export default ListUsers;