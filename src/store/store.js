const getState = ({ getStore, setStore }) => {
    return {
        store: {
            searchString: ''
        },
        actions: {
            search: (query)=>{
                let store = getStore()
                store.searchString = query
                setStore(store)
            }
        },
    }
}

export default getState
