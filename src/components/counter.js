/*
 * @Author: zhanghuiming
 * @Date:   2017-09-08 06:51:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-08 07:41:07
 */
import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {

	constructor(props) {
		super(props);
		this.incrementAsync = this.incrementAsync.bind(this);
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
	}

	incrementAsync() {
		setTimeout(this.props.onIncrement, 1000)
	}

	incrementIfOdd() {
		if (this.props.value % 2 !== 0) {
			this.props.onIncrement()
		}
	}

	render() {
		const {
			value,
			onIncrement,
			onDecrement
		} = this.props;
		return (
			<p>
        Clicked: {value} times
        {''}
        <button onClick={onIncrement}>
          +
        </button>
        {''}
        <button onClick={onDecrement}>
          -
        </button>
        {''}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {''}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

export default Counter;