import { ContainerInput } from "./styles";

export const Input = ({ register, name, error = "", ...rest }) => {
  return (
    <ContainerInput>
      <input {...register(name)} {...rest} />
      <span>{!!error && <>{error}</>}</span>
    </ContainerInput>
  );
};
