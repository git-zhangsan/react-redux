/*
 * @Author: zhanghuiming
 * @Date:   2017-09-08 06:50:26
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-08 07:37:09
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {
	createStore
} from 'redux'
import Counter from './components/counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
	<Counter value = {store.getState()}
	onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
	onDecrement = {() => store.dispatch({type:'DECREMENT'})} />, rootEl
)
render()
store.subscribe(render)