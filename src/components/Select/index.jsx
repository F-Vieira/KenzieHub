import * as S from "./styles";

const Select = ({ register, name, options, form, ...rest }) => {
  return (
    <>
      <S.Container
        {...rest}
        form={form}
        {...register(name)}
        defaultValue="Escolha um módulo"
      >
        {options.map((item) =>
          item.id === 0 ? (
            <option key={item.id} value={item.name} disabled>
              {item.name}
            </option>
          ) : (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          )
        )}
      </S.Container>
    </>
  );
};

export default Select;
