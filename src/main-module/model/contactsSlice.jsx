import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Max Rychkov",
        phone: "+380992522549",
        id: 'first',
        messages: []
    },
    {
        name: "Barbara Santiago",
        phone: "+380677126790",
        id: 'second',
        messages: []
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
                contact.name = payload.name
                contact.phone = payload.phone
                return contact
            } else {
                return contact
            }
        }))
    }
})

const { actions, reducer } = contactsSlice;

export const { addContact, removeContact, removeAllContacts, editContact } = actions;

export default reducer;