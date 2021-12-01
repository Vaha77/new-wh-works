import React from "react";
import { useTranslation } from "react-i18next";
import {
  Bgimg,
  Card,
  Cardbottin,
  Container,
  Rect,
  Title,
  TitleLorem,
  Wrapper,
} from "./style";
import bg from "../../asstes/img/bg.png";
import { location } from "../../mock/fake";
import { properties } from "../../mock/fake";
// import LanguageSelector from "../../LanguageSelector";

export const Body = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Container>
      <Wrapper>
        <nav className="navbar">
          <button onClick={() => handleClick("en")}>English</button>
          <button onClick={() => handleClick("kor")}>Korean</button>
          <button onClick={() => handleClick("chi")}>Russian</button>
        </nav>
        <Title>{t("h1.1")}</Title>
        <TitleLorem>{t("p.1")}</TitleLorem>
        <Rect>
          <Card>
            {/* <div className="wrapper">
              <p>Location</p>
              <div className="inner-wrapper">
                <h1>Seoul</h1>
                <h1>Seoul</h1>
                <h1>Seoul</h1>
                <h1>Seoul</h1>
                <h1>Seoul</h1>
              </div>
            </div> */}

            <label for="location">Location</label>
            <select name="location" id="location">
              {location.map((prop) => (
                <option key={prop.id} value="1">
                  {prop.city}
                </option>
              ))}

              <option value="1">Locatsion</option>
              <option value="1">Locatsion</option>
            </select>
          </Card>
          <Card>
            <select name="log" id="">
              <option value="1">Properties</option>
              <option value="1">Locatsion</option>
              <option value="1">Locatsion</option>
            </select>
          </Card>
          <Card>
            <select name="log" id="">
              <option value="1">Price</option>
              <option value="1">Locatsion</option>
              <option value="1">Locatsion</option>
            </select>
          </Card>

          <Cardbottin>Seacrch</Cardbottin>
        </Rect>
      </Wrapper>
    </Container>
  );
};
export default Body;
