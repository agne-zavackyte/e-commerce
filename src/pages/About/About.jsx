import React, { useContext, useState, useEffect } from "react";
import { Section, Button } from "../../components/";
import { LocationContext } from "../../contexts/location.context";
import { useHistory, Link } from "react-router-dom";
import * as S from "./About.style";

function About() {
  const location = useContext(LocationContext);
  const history = useHistory();

  const [set, setData] = useState();

  if (!location.state) {
    history.push("/");
  }

  useEffect(() => {
    if (location.state) {
      fetch(`http://localhost:3000/${location.state}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [location.state]);

  return (
    <Section>
      <S.HeadingBlock>
        <h1>Product List</h1>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </S.HeadingBlock>
      <ul>
        {set &&
          set
            .filter((item) => item.city.toLowerCase().includes(location.state))
            .map((fitem) => (
              <li key={fitem.id}>{fitem.product + " " + fitem.about}</li>
            ))}
      </ul>
    </Section>
  );
}

export default About;
