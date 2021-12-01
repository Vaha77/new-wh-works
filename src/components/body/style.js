import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 700px;
 
  @media screen and (max-width: 768px){
    width: auto;
    height: 700px;
 
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px){

  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
    margin-bottom: 30px;
    @media screen and (max-width: 768px){
      gap: 20px;
      margin-top: 100px;
 
  }
  }

  .navbar button {
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    background: #19bce4;
    cursor: pointer;
  }
  
`;
export const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 76px;
  color: #000000;

  @media screen and (max-width: 768px){
  font-size: 25px;
}

@media only screen and (min-width: 769px) and (max-width: 1440px){
  font-size: 45px;
  
}
`;

export const TitleLorem = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  width: 622px;
  height: 60px;
  margin-top: 24px;


  @media screen and (max-width: 768px){
    font-size: 15px;
  width: 390px;

 
}

@media only screen and (min-width: 769px) and (max-width: 1440px){
  /* font-size: 16px; */
  
}
`;
export const Bgimg = styled.div`
  display: flex;
`;

export const Rect = styled.div`
  display: flex;
  align-items: center;
  width: 1170px;
  height: 118px;
  border: 0.5px solid rgba(25, 188, 228, 0.3);
  margin-top: 100px;

  
  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 400px;
    height: 400px;
 
}

@media only screen and (min-width: 769px) and (max-width: 1440px){
  /* font-size: 16px; */
  width: 769px;
  height: 180px;
  
}
`;

export const Card = styled.div`
  margin: 20px;
  width: 259px;
  height: 70px;
  border: 0.5px solid rgba(25, 188, 228, 0.3);
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .inner-wrapper {
    display: none;
    position: absolute;
    left: 20px;
    bottom: -50px;
    background-color: #f1f1f1;
    min-width: 50px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  h1 {
    color: #000;
    padding: 5px 10px;
    font-size: 5px;s
  }

  .wrapper:hover .inner-wrapper {
    display: block;
  }

  .inner-wrapper:hover {
    display: inline;
  }

  select {
    border: none;
    font-weight: bold;
  }
`;

export const Cardbottin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 259px;
  height: 70px;
  color: #fff;
  background: #19bce4;
  cursor: pointer;
`;
