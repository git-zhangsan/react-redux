/*
 * @Author: zhanghuiming
 * @Date:   2017-09-08 06:51:09
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-08 07:35:39
 */


export default (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}