import React from 'react'
import PropTypes from 'prop-types'
import ReactFullpage from '@fullpage/react-fullpage'
// import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import Typist from 'react-typist'
import Grow from '@material-ui/core/Grow'
import Fade from 'react-reveal/Fade'

const FullPage = ({
	pages,
	setTransitions,
	transitions,
	timeouts,
	setTimeouts,
	fullPageProps
}) => (
	<>
		<ReactFullpage
			licenseKey={process.env.REACT_APP_FULL_PAGE_LICENSE}
			{...fullPageProps}
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						{pages.map((page, pageI) => (
							<div
								key={'section' + pageI}
								className={'section ' + page.className}
								{...page.props}
							>
								{page.transitions.map((trans, transI) => {
									switch (trans.type) {
										case 'Fade':
											return (
												<Fade
													key={pageI + transI + trans.type}
												>
													{trans.children(fullpageApi)}
												</Fade>
											)
										// case 'Fade':
										// 	return (
										// 		<Fade
										// 			key={pageI + transI + trans.type}
										// 			in={transitions[pageI][transI]}
										// 			onEntered={() => {
										// 				if (trans.delay) {
										// 					const timeout = setTimeout(() => {
										// 						setTransitions({
										// 							...transitions,
										// 							[pageI]: {
										// 								...transitions[pageI],
										// 								[transI + 1]: true
										// 							}
										// 						})
										// 					}, trans.delay)
										// 					setTimeouts([...timeouts, timeout])
										// 					return
										// 				}
										// 				setTransitions({
										// 					...transitions,
										// 					[pageI]: {
										// 						...transitions[pageI],
										// 						[transI + 1]: true
										// 					}
										// 				})
										// 			}}
										// 			{...trans.props}
										// 		>
										// 			{trans.children(fullpageApi)}
										// 		</Fade>
										// 	)
										case 'Slide':
											return (
												<Slide
													key={pageI + transI + trans.type}
													in={transitions[pageI][transI]}
													onEntered={() => {
														if (trans.delay) {
															const timeout = setTimeout(() => {
																setTransitions({
																	...transitions,
																	[pageI]: {
																		...transitions[pageI],
																		[transI + 1]: true
																	}
																})
															}, trans.delay)
															setTimeouts([...timeouts, timeout])
															return
														}
														setTransitions({
															...transitions,
															[pageI]: {
																...transitions[pageI],
																[transI + 1]: true
															}
														})
													}}
													{...trans.props}
												>
													{trans.children(fullpageApi)}
												</Slide>
											)
										case 'Grow':
											return (
												<Grow
													key={pageI + transI + trans.type}
													in={transitions[pageI][transI]}
													onEntered={() => {
														if (trans.delay) {
															const timeout = setTimeout(() => {
																setTransitions({
																	...transitions,
																	[pageI]: {
																		...transitions[pageI],
																		[transI + 1]: true
																	}
																})
															}, trans.delay)
															setTimeouts([...timeouts, timeout])
															return
														}
														setTransitions({
															...transitions,
															[pageI]: {
																...transitions[pageI],
																[transI + 1]: true
															}
														})
													}}
													{...trans.props}
												>
													{trans.children(fullpageApi)}
												</Grow>
											)
										case 'Typist':
											return (
												<Typist
													key={pageI + transI + trans.type}
													onTypingDone={() => {
														if (trans.delay) {
															const timeout = setTimeout(() => {
																setTransitions({
																	...transitions,
																	[pageI]: {
																		...transitions[pageI],
																		[transI + 1]: true
																	}
																})
															}, trans.delay)
															setTimeouts([...timeouts, timeout])
															return
														}
														setTransitions({
															...transitions,
															[pageI]: {
																...transitions[pageI],
																[transI + 1]: true
															}
														})
													}}
													{...trans.props}
												>
													{trans.children(fullpageApi)}
												</Typist>
											)
										default:
											return null
									}
								})}
							</div>
						))}
					</ReactFullpage.Wrapper>
				)
			}}
		/>
	</>
)

FullPage.propTypes = {
	pages: PropTypes.arrayOf(
		PropTypes.exact({
			className: PropTypes.string,
			props: PropTypes.object,
			transitions: PropTypes.arrayOf(
				PropTypes.exact({
					type: PropTypes.oneOf(['Fade', 'Slide', 'Grow', 'Typist']).isRequired,
					delay: PropTypes.number,
					props: PropTypes.object,
					children: PropTypes.func.isRequired
				})
			).isRequired
		})
	)
}

export default FullPage
