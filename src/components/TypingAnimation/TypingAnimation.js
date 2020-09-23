import React, { Component } from 'react'
import Typed from 'typed.js'

export default class TypingAnimation extends Component {
    componentDidMount() {
        const { strings } = this.props

        const options = this.props.options
            ? this.props.options
            : {
                  strings,
                  typeSpeed: 50,
                  backSpeed: 50,
                  loop: false,
                  cursorChar: '',
              }

        this.typed = new Typed(this.el, options)
    }
    componentWillUnmount() {
        this.typed.destroy()
    }
    render() {
        return (
            <>
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={el => {
                        this.el = el
                    }}
                />
            </>
        )
    }
}
