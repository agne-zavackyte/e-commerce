import React, { useContext, useState } from "react";
import { Section, InputField, Button } from "../../components/";
import { useHistory } from "react-router-dom";
import { LocationContext } from "../../contexts/location.context";
import * as S from "./Home.style";

function Home() {
  const location = useContext(LocationContext);
  const [city, setCity] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  return (
    <Section>
      <h1>Select Your City</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (city) {
            setError(false);
            location.setState(city);
            history.push("/about");
          } else {
            setError(true);
          }
        }}
      >
        <InputField
          type="dropdown"
          handleChange={(e) => setCity(e.target.value)}
          options={[
            { name: "Vilnius", value: "vilnius" },
            { name: "Kaunas", value: "kaunas" },
            { name: "Klaipėda", value: "klaipėda" },
          ]}
        />
        {error && <S.ErrorBlock>Please select a city.</S.ErrorBlock>}
        <S.FlexBlock>
          <Button type="submit">Show available items</Button>
        </S.FlexBlock>
      </form>
    </Section>
  );
}

export default Home;
