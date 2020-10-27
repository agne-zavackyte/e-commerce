import React, { useContext, useState } from "react";
import { Section, InputField, Button } from "../../components/";
import { useHistory } from "react-router-dom";
import { LocationContext } from "../../contexts/location.context";
import * as S from "./Home.style";

function checkPostCode(postCode) {
  return postCode.trim().length >= 6 && postCode.trim().length <= 9;
}

function Home() {
  const location = useContext(LocationContext);
  const [postCode, setPostCode] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  return (
    <Section>
      <h1>Select Your Store</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (checkPostCode(postCode)) {
            setError(false);
            location.setState(postCode);
            history.push("/about");
          } else {
            setError(true);
          }
        }}
      >
        <InputField
          placeholder="Post Code"
          handleChange={(e) => setPostCode(e.target.value)}
        />
        {error && "Post code is incorrect. Please try again."}
        <S.FlexBlock>
          <Button type="submit">Show available items</Button>
        </S.FlexBlock>
      </form>
      {location.state}
    </Section>
  );
}

export default Home;
