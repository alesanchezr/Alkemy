// eslint-disable-next-line no-unused-vars
const getState = ({ getStore, setStore }) => {
    return {
        store: {
            searchResults: [],
        },
        actions: {
            search: queryResult => {
                setStore({searchResults: queryResult})
            },
        },
    }
}

export default getState
