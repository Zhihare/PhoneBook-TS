import styled from 'styled-components'

export const AppBarHeader = styled.header`
@media(max-width: 600px){
	display: flex;
    justify-content: space-around;
    background-color: ${(props) => props.theme.themes.modalColor};
	color: ${(props) => props.theme.themes.titleColor};
	font-size: 14px;
	padding: 10px 0; 

		a{
	text-decoration: none;
	 transition-duration: .8s;
	color: ${(prop) => prop.theme.themes.titleColor};

&:hover{
	color: ${(props) => props.theme.themes.hover};
}};}



@media(min-width: 600px){
	display: flex;
    justify-content: space-around;
	max-width: 1200px;
	margin-right: auto;
    margin-left: auto;
    background-color: ${(props) => props.theme.themes.modalColor};
	color: ${(props) => props.theme.themes.titleColor};
	padding: 15px 0; 

		a{
	text-decoration: none;
	 transition-duration: .8s;
	color: ${(prop) => prop.theme.themes.titleColor};

&:hover{
	color: ${(props) => props.theme.themes.hover};
}};}


`

export const MobileAppBarHeader = styled.header`
position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
	height: 60px;
width:100%;
display: flex;
justify-content:center;
align-items: center;
background-color: ${(props) => props.theme.themes.mobileBar};
color: ${(prop) => prop.theme.themes.buttonColor};

	a{
			text-decoration: none;
	 		transition-duration: .8s;
			color: ${(prop) => prop.theme.themes.buttonColor};
		}

`
export const DivIcon = styled.div`
position: relative;
padding:0 0 10px 0;
    display: flex;	
    flex-direction: column;
	grid-gap: 8px;
    justify-content: center;
	width: calc(var(--index)*7);
	align-items: center;
	

	span{
		position: absolute;
		font-size: 10px;
		transform: translateY(20px);
	
	}

	p{
		position: relative;
		font-size: 30px;
		margin: 0; 	
		transition: .5s;
	}

	.rotateP{
		font-size: 20px;
	}

	
	.circle{
		
		position: absolute;
		display: block;
		width: 50px;
		height: 50px;
		background: ${(props) => props.theme.themes.mobileBar};
		border-radius: 50%;
		border: 2px solid  ${(props) => props.theme.themes.active};
		transform: translateY(-24px) scale(0);
		z-index:-5;
	}


	.rotateName{
    animation: animName 5s linear infinite;
    position: absolute;
    width: 25px;
    height: 24px;
    border: 3px solid #497DDD;
    border-right-color: transparent;
    border-radius: 50%;
    border-left-color: transparent;

/* &:after {
content: "";
width: 40px; 
height: 40px;
border-radius: 50%;
position: absolute; 
top: calc(50% - 20px); 
left: calc(50% - 20px);
background: radial-gradient(#EF7D55, #F24012);
} */

}

@keyframes animName {
 0%{
    transform: rotate(0deg);
   }
100%{
    transform: rotate(360deg);
   }
}

	

`

export const Indicator = styled.div`


`