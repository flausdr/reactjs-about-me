import { ReactComponent as Trash } from '../../assets/trash.svg';

const ListUsers = () => {
    return (
        <div>
            <h2 className='text-center m-5 font-weight-lighter'>Contacts</h2>
            <ul className="list-group m-5 list-group-flush">
                <li className="list-group-item m-2">1
                    {/* <Trash width="20px" height="30px" /> */}
                </li>
                <li className="list-group-item m-2">2</li>
                <li className="list-group-item m-2">3</li>
                <li className="list-group-item m-2">4</li>
            </ul>
        </div>
    )
};

export default ListUsers;