import Header from '../main-module/layouts/header';
import Footer from '../main-module/layouts/footer';
import ListUsers from '../main-module/layouts/list-users';

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