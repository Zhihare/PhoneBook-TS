
import styled from 'styled-components';



export const ConteinerApp = styled.div`

  &.login{
     padding: 30vh 0 30vh 0;
  }

  max-width: 600px;
  margin: 0 auto;
  padding: 100px 0 50px 0;
  border-radius: 20px;


 @media(max-width: 600px){
          padding: 0 0 40px 0;
      }



 &.homeConteiner{
    max-width: 900px;
    margin-top: calc(var(--index)*5);
  }

`

export const ContentApp = styled.div`
    /* position: relative; */
      @media(max-width: 600px){
border: none;
border-radius: 0;
  padding:2em 1em;

}


 background: ${(props) => props.theme.themes.modalColor};
 backdrop-filter: blur(70px);
  padding: 2em;
  text-align: center;
  color:${(props) => props.theme.themes.titleColor};
  border: 2px solid ${(props) => props.theme.themes.border};
  border-radius: 20px;

    &.homePage{
    font-size: 20px;

  }

 `

export const TitleApp = styled.h1`
 text-transform: uppercase;
color:${(props) => props.theme.themes.titleColor};
 `



export const ToogleDarkMode = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition-duration: .8s;
  color: ${(props) => props.theme.themes.buttonColor};
  width: calc(var(--index)*10);

	&:hover{
		color: ${(props) => props.theme.themes.buttonHover};
	}

  
`