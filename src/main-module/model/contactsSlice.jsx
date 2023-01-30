import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Max Rychkov",
        phone: "+380992522549",
        id: 'first',
        messages: [{ date: 1, id: 'first-message', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit reiciendis ipsum minima? Omnis, quos nesciunt sapiente dicta nihil consectetur accusamus distinctio ab, corrupti molestiae vero sit pariatur explicabo deleniti.' }]
    },
    {
        name: "Barbara Santiago",
        phone: "+380677126790",
        id: 'second',
        messages: [{ date: 2, id: 'second-message', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit reiciendis ipsum minima? Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit reiciendis ipsum minima? Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit reiciendis ipsum minima?' }]
    },
    {
        name: "Dmytro Komarov",
        phone: "+380973752350",
        id: 'third',
        messages: []
    },
];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: (state, { payload }) => {
            return [...state, payload];
        },
        removeContact: (state, { payload }) => {
            return [...state.filter(contact => contact.id !== payload)];
        },
        removeAllContacts: state => {
            state.length = 0;
            return state;
        },
        editContact: (state, { payload }) => void(state.filter(contact => {
            if (contact.id === payload.id) {
                contact.name = payload.name;
                contact.phone = payload.phone;
                return contact;
            } else {
                return contact;
            }
        })),
        addMessage: (state, { payload }) => void(state.filter(contact => {
            if (contact.phone === payload.phone) {
                contact.messages = [...contact.messages, payload.obj];
                return contact;
            } else {
                return contact;
            }
        })

        ),
        removeMessage: (state, { payload}) => void(state.filter(contact => {
            if (contact.id === payload.id) {
                contact.messages = [...contact.messages.filter(message => message.id !== payload.messageId)];
                return contact;
            } else {
                return contact;
            }
        })),
        removeAllMessages: state => {
            state.map(contact => {
                contact.messages.length = 0 ;
            })
            return state;
        },
        editMessage: (state, { payload }) => void(state.filter(contact => {
            if (contact.id === payload.contactId) {
                return contact.messages.filter(message => {
                    if (message.id === payload.messageId) {
                        message.text = payload.text;
                        return message;
                    } else {
                        return message;
                    }
                })
            } else { 
                return contact
            }
        }))
    }
})

const { actions, reducer } = contactsSlice;

export const { addContact,
            removeContact,
            removeAllContacts,
            editContact,
            addMessage, 
            removeMessage, 
            removeAllMessages,
            editMessage } = actions;

export default reducer;