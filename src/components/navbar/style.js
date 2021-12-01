import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  background-color:  #ffffff;
  color:  #02012B;
  height: 120px;
  padding: 0 135px;
  @media screen and (max-width: 768px) {
         padding: 0;
         padding-left: 40%;
         /* width: 100%; */
         height:500px;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         background-color:  black;
         color: #ffffff;

  }
  @media only screen and (min-width: 769px) and (max-width: 1440px){
    display: flex;
  justify-content: space-around;
  height: 120px;
  padding: 0px;
  }
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: ${(card)=>card &&'auto' };
@media screen and (max-width: 768px) {
        min-width: 50px;
        flex-direction: column;
        color: white;

}

@media only screen and (min-width: 769px) and (max-width: 1363px){
  display: flex;
  justify-content: space-around;
margin-right: 0;

  }
`
export const Logo = styled.img`
  display: flex;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 1281px){

  }
  `;

export const Title = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
color: #02012B;
cursor: pointer;
margin-left: ${({left})=>(left ? '10px' : '60px')} ;
@media screen and (max-width: 768px) {
  display: none;
        min-width: 50px;
        font-size: 10px;
        color: white;

}

`;

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 96px;
height: 40px;
background: #19BCE4;
border-radius: 6px;
margin-right: auto;
@media only screen and (min-width: 769px) and (max-width: 1363px){
border-radius: 6px;
margin-right:0 ;
/* margin-right: 100px; */
}
`


export const Link = styled(NavLink)`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
color: #000000;
cursor: pointer;
text-decoration: none;
margin: 40px;
@media screen and (max-width: 768px) {
margin: 20px  0 20px;
color: white;
justify-content: center;
align-items: center;
border-radius: 10px;
}
@media only screen and (min-width: 769px) and (max-width: 1363px){
margin: 10px;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 15px;
}

`

export const activeStyle = {
  // background: "#19bce4",
  color: "#19bce4",
  
}