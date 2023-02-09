import MessageItem from "../message-item";
import MessageAdd from "../message-add";

const Messages = () => {
    return (
        <>
            <MessageAdd />
            <ul className="list-group my-5 list-group-flush w-75 mx-auto">      
                <MessageItem />
            </ul>
        </>
    )
};

export default Messages;