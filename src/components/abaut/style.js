import styled from "styled-components";

export const Container= styled.div`
width: auto;
height: 850px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;


`

export const  Wrapper = styled.div`

width: 1500px;
height: 606px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
    flex-direction: column;
    width: 768px;
    height: 606px;
}


@media only screen and (min-width: 769px) and (max-width: 1440px){
width: 1200px;
  
}
`
export const  Rasm = styled.div`
width: 540px;
height: 580px;
margin-right: 100px;
position: relative;
@media screen and (max-width: 768px){
    display: none;
}


@media only screen and (min-width: 769px) and (max-width: 1440px){
    width: 440px;
    height: 480px;
}
`
export const  Rass = styled.img`


`
export const  Ras = styled.img`
position: absolute;
top: 480px;
left: 60%;

`
    

export const  Malumot = styled.div`
width: 540px;
height: 580px;


    @media screen and (max-width: 768px){
width: 400px;
    height: 400px;
    }

@media only screen and (min-width: 769px) and (max-width: 1440px){
    width: 440px;
    height: 480px;
}
`
export const  Abaut = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 27px;
`
export const  We = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 61px;
color: #222222;
margin: 40px 0px 40px 0px;
`
export const  Lorem = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 27px;
color: #555555;
`
export const  Cont = styled.div`
display: flex;
`
export const  Card = styled.div`
margin-right: ${(left)=>left&&'auto' } ;

`
export const Sub  = styled.img`
margin-top: 20px;

`


export const  Fre = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #222222;
margin-top: 20px;

`


export const  Free = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #555555;
margin-top: 20px;
`

export const But = styled.button`
width: 169px;
height: 56px;
background: #19BCE4;
border-radius: 6px;
border: none;
margin-top: 20px;

`
