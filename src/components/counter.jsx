import React from 'react';
import CountUp from 'react-countup'
import { Watch } from 'scrollmonitor-react';
import Loading from './loading.jsx'


const Counter = props => (
  <h1><CountUp start={0} end={props.num} duration={3} separator=',' /></h1>
)

export default Watch(
  class ReactCounter extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }

    render() {
      return(
        <>
          {
            (this.props.isFullyInViewport || this.props.isInViewport)
            ? (<Counter num={Number(this.props.theNumber)}/>)
            : (<Loading />)
          }
        </>
      )
    }
  }
)
