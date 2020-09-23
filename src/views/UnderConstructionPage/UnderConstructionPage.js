import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const UnderConstructionPage = () => {
	return (
		<div className='UnderConstruction'>
			<h1>Jeff Palmer Development</h1>
			<div>
				<IconButton
					href='https://www.linkedin.com/in/jeffpalmdev/'
					target='_blank'
				>
					<LinkedInIcon fontSize='large' />
				</IconButton>
				<IconButton href='https://github.com/jeffpalm' target='_blank'>
					<GitHubIcon fontSize='large' />
				</IconButton>
				<IconButton href='mailto:jeff@jeffpalm.dev' target='_blank'>
					<EmailIcon fontSize='large' />
				</IconButton>
			</div>
		</div>
	)
}

export default UnderConstructionPage
