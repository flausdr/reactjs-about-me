import { useSelector } from 'react-redux';
import Contact from './contact';

import './style.scss';

const Contacts = () => {
    const contacts = useSelector((state) => state.counter);

    return (
        <>
            {
                contacts.map(contact => {
                    return <Contact contact={contact} key={contact.id} />
                })
            }
        </>
    )
};

export default Contacts;