import { BiRightArrow } from "react-icons/bi";

import * as E from "./styles";

const Error = ({ grossErrors }) => {
  const errors = [];

  for (let key in grossErrors) {
    let error = { name: key, message: grossErrors[key]?.message };
    errors.push(error);
  }

  return (
    <E.Container hasError={errors.length > 0}>
      <h2>Erros</h2>
      {errors.map((error) => (
        <E.Item key={error.name}>
          <BiRightArrow />
          {error.message}
        </E.Item>
      ))}
    </E.Container>
  );
};

export default Error;
