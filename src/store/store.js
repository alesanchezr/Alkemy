const getState = ({ getStore, setStore }) => {
    return {
        store: {
            searchResults: [],
        },
        actions: {
            search: queryResult => {
                // let store = getStore()
                setStore({searchResults: queryResult})
            },
        },
    }
}

export default getState
