import React from 'react'
import PropTypes from 'prop-types'
import ReactFullpage from '@fullpage/react-fullpage'


const FullPage = ({
	pages,
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
								{page.page}
							</div>
						))}
					</ReactFullpage.Wrapper>
				)``
			}}
		/>
	</>
)

FullPage.propTypes = {
	pages: PropTypes.arrayOf(
		PropTypes.exact({
			className: PropTypes.string,
			props: PropTypes.object,
			page: PropTypes.func
		})
	)
}

export default FullPage
