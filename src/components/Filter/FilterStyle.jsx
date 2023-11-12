import styled from 'styled-components';


export const FilterLabel = styled.label`
	margin-bottom: 10px;
	position: relative;
	`
export const FilterInput = styled.input`
    padding: 4px 0px 4px 24px;
	background-color: ${(props) => props.theme.themes.tagLineColor};
	border-style: ridge;
    color: ${(props) => props.theme.themes.titleColor};
	margin-bottom: 24px;

`
export const FilterSpan = styled.span`
    position: absolute;
	left: 2%;
    top: 2%;
	
`