import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const InjectContext = PassedComponent => {
    class StoreWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = getState({
                getStore: () => this.state.store,
                setStore: updatedStore =>
                    this.setState({
                        store: Object.assign(this.state.store, updatedStore),
                    }),
            });
        }

        componentDidMount() {}

        render() {
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return StoreWrapper;
};

export default InjectContext;
