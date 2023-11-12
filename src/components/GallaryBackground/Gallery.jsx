import React from 'react'

import { GalleryWrapper, TitleAppHome } from './GalleryStyle';
import { useDispatch } from 'react-redux';
import { linkImg } from './linkImg';
import { setBody } from 'redux/Contacts/contactsReduser';
import { PiHandSwipeRightLight } from 'react-icons/pi';







export const Gallery = () => {

	const dispatch = useDispatch();

	const onHandleClick = (img) => {
		dispatch(setBody(img));
	};


	return (
		<>
			<TitleAppHome className='homeTitle'>Choose background</TitleAppHome>
			<GalleryWrapper className='wrapper'>
				<div className='items'>
					{linkImg.map(({ name, link }) => {
						return (
							<div key={name} onClick={() => onHandleClick(name)} className="item" style={{ backgroundImage: `url(${name})` }}></div>
						)
					})}
				</div>
				<button className='swipe'><PiHandSwipeRightLight size={30} /></button>


			</GalleryWrapper>
		</>
	)
}