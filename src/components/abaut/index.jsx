import React from 'react'
import { Abaut, But, Card, Cont, Container, Fre, Free, Lorem, Malumot, Ras, Rasm, Rass, Sub, We, Wrapper } from './style'
import rasim from '../../asstes/img/abaut1.png'
import ras from '../../asstes/img/abaut2.png'
import sub from '../../asstes/img/sup.png'
import vic from '../../asstes/img/Vector.png'
export const About = () => {
    return (
        <Container>
           <Wrapper>
               <Rasm>
               <Rass src={rasim} />
                   <Ras left src={ras} />
               </Rasm>
               <Malumot>
                   <Abaut>About Us</Abaut>
                   <We>We are Specializing in interior Improvments</We>
                   <Lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra posuere sem purus enim eleifend habitant arcu, sed.</Lorem>
                   <Cont>
                       <Card left>  
                       <Sub src={sub} />
                       <Fre>Free Consulatation</Fre>
                       <Free>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</Free>
                       <But>Explore now</But>
                       </Card>
                       <Card> 
                            <Sub src={vic} />
                            <Fre>Free Consulatation</Fre>
                       <Free>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</Free>    
                        </Card>
                     
                   </Cont>
               </Malumot>
           </Wrapper>
        </Container>
    )
}
