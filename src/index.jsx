'use strict'

import './index.css'

import React, { Component } from 'react'


const DIS_BG_COLOR = 'rgb(193, 193, 193)'
/*
按钮背景色过渡变化
props:
	text: {!string},
	click: {!fn},
	bgColor: {!color},
	transBgColor: {!color},
	disable: {?boolean},
	disableBgColor: {?color},
	loading: {?boolean}
*/
export default class TransBtn extends Component {

	constructor (props) {
		super(props)
		this.state = {
			loading: false
		}
		this.click = this.click.bind(this)
		this.transEnd = this.transEnd.bind(this)
		this.touchStart = this.touchStart.bind(this)
	}

	render () {
		let { text, bgColor, disableBgColor, disable } = this.props

		if (disable) {
			return (
				<button 
					className='trans-btn disabled'
					style={{backgroundColor: disableBgColor || DIS_BG_COLOR}}>{text}</button>
			)
		}

		return ( 
			<button 
				ref='btn'
				className={'trans-btn ' + (this.state.loading ? 'loading' : '')}
				style={{backgroundColor: bgColor}}
				onTouchStart={this.touchStart}
				onTransitionEnd={this.transEnd}
				onClick={this.click}>
			{text}
			</button>
		)
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.loading && !prevProps.loading) {
			setTimeout(() => {
				if (this.props.loading) {
					this.setState({
						loading: true
					})
				}
			}, 200)
		}

		if (!this.props.loading && prevProps.loading) {
			this.clicking = false
			this.setState({
				loading: false
			})
		}
	}

	touchStart () {
		if (this.transing) return 

		this.transing = true
		this.transTimes = 0
		this.refs.btn.style.backgroundColor 
			= this.props.transBgColor || this.props.bgColor
	}

	transEnd () {
		if (++this.transTimes == 2) {
			this.transing = false
		}
		this.refs.btn.style.backgroundColor = this.props.bgColor
	}

	click (e) {
		e.stopPropagation()

		let loading = this.props.loading

		if (loading !== undefined && this.clicking) return

		this.clicking = true
		this.props.click && this.props.click()
	}
}