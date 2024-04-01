let initialState = {
   contactList: [],
}
let nextId = 1
function reducer(state = initialState, action) {
   const { type, payload } = action
   switch (type) {
      case 'ADD_CONTACT':
         return {
            ...state,
            contactList: [...state.contactList, { id: nextId++, name: payload.name, phoneNumber: payload.phoneNumber }],
         }
      case 'SEARCH_BY_USERNAME':
         return { ...state, keyword: payload.keyword }
      case 'DELETE_CONTACT':
         return {
            ...state,
            contactList: state.contactList.filter((contact) => contact.id !== payload.contactId),
         }
      default:
         return { ...state }
   }
}

export default reducer
