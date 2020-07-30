import React from 'react'

export function codeColor(string) {
	const regEx = /(\s|=|\(|\)|\.|Initializing\sPortfolio\.\.\.)/i

	return string.split(regEx).map((word, index, array) => {
		const prev = array[index - 1],
			next = array[index + 1],
			twoPrev = array[index - 2],
			lineStart = array[0]

		if (prev === '.' && next === '(') {
			return <span className='code-color-method'>{word}</span>
		}

		if (prev === ' ' && next === '.' && lineStart === '>') {
			return <span className='code-color-object'>{word}</span>
		}

		switch (prev) {
			default:
				break
		}

		// * Checking element 2 back
		switch (twoPrev) {
			case 'const':
				return <span className='code-color-variable'>{word}</span>
			default:
				break
		}

		switch (next) {
			case '(':
				return <span className='code-color-function'>{word}</span>
			default:
				break
		}

		switch (word) {
			case 'var':
			case 'let':
			case 'const':
				return <span className='code-color-keyword'>{word}</span>
			case 'new':
			case 'this':
				return <span className='code-color-reserved'>{word}</span>
      case 'undefined':
        return <span className="code-color-undefined">{word}</span>
      case 'Initializing Portfolio...':
        return <span className="code-color-initialize-portfolio">{word}</span>
			default:
				return word
		}
	})
}
