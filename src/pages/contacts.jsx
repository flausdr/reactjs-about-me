import Header from '../main-module/layouts/header';
import Footer from '../main-module/layouts/footer';
import ListUsers from '../main-module/layouts/list-contacts';

const Contacts = () => {
    return (
        <>
            <Header />
                <ListUsers />
            <Footer />
        </>
    )
}

export default Contacts;