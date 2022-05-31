import * as T from "./styles";

const Textarea = ({ register, name, placeholder, ...rest }) => {
  return (
    <>
      <T.Container
        {...register(name)}
        {...rest}
        placeholder={placeholder}
      ></T.Container>
    </>
  );
};

export default Textarea;
