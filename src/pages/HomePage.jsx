
import { ConteinerApp, ContentApp } from 'components/AppStyle'
import { Gallery } from 'components/GallaryBackground/Gallery'
import React from 'react'


function HomePage() {

	return (
		<>
			<Gallery></Gallery>
			<ConteinerApp className='homeConteiner'>
				<ContentApp className='homePage'>This a small Phone Book application is a lightweight, user-friendly tool for managing contact information.
					It allows users to store and organize essential details, such as names, phone numbers.
					The app offers a simple search function for quick access to specific contacts. With its straightforward interface and basic features,
					this small Phone Book application is ideal for users who want a straightforward and efficient way to maintain their contact information.</ContentApp>
			</ConteinerApp>
		</>
	)
}

export default HomePage