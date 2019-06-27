import React from 'react';
import CountUp from 'react-countup'
import { Watch } from 'scrollmonitor-react';
import Loading from './loading.jsx'


const Counter = props => (
  <h2><CountUp start={0} end={props.num} duration={5} separator=',' redraw={false}/></h2>
)

class ReactCounter extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    render() {
        return (
            <>
                {!this.props.isInViewport || this.props.isInViewport ? (
                    <Counter num={Number(this.props.theNumber)} />
                ) : (
                    <Loading className="my-4" />
                )}
            </>
        )
    }
}

export default Watch(ReactCounter)
