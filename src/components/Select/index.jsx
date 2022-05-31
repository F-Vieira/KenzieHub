import * as S from "./styles";

const Select = ({ ...rest }) => {
  return (
    <S.Container defaultValue="Escolha um módulo">
      <option value="Escolha um módulo" disabled>
        Escolha um módulo
      </option>
      <option value="Módulo 1">Módulo 1</option>
      <option value="Módulo 2">Módulo 2</option>
      <option value="Módulo 3">Módulo 3</option>
    </S.Container>
  );
};

export default Select;
