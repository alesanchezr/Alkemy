// eslint-disable-next-line no-unused-vars
const getState = ({ getStore, setStore }) => {
    return {
        store: {
            searchResults: [],
            searchTitle: ''
        },
        actions: {
            search: queryResult => {
                setStore({searchResults: queryResult})
            },
            searchTitle: queryResult => {
                setStore({searchTitle: queryResult})
            },
        },
    }
}

export default getState
