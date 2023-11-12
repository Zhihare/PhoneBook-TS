import styled from 'styled-components'

export const UserMenuDiv = styled.div`
	display: flex;
	color: ${(props) => props.theme.themes.titleColor};
	align-items: center;
	
		a{
	padding: 6px;
	border-radius: 10px;
	}
	@media(max-width: 600px){
		.active{
			border-color:${(props) => props.theme.themes.mobileBar};
			border: none;
		 }
	}


	.active{
		color:${(props) => props.theme.themes.active};
		border-color:${(props) => props.theme.themes.active};
	}
		a.active svg{
		transform: translateY(-25px);
	}
	a.active p{
		transform: translateY(-25px);
	}

	span{
		transition: .5s;
			opacity: 0;
	}
		a.active span{
			opacity: 1;
	}

	a.active .circle{
			transform: translateY(-24px) scale(1);
	}


`

export const UserMenuMobileDiv = styled.div`
	display: flex;
	align-items: center;

		p{
			text-transform: uppercase;
			font-size: 30px;
			text-align: center;
			color: ${(props) => props.theme.themes.buttonColor};
			margin: 0;
		}

		.active{
		color:${(props) => props.theme.themes.active};	
	}

`

