import { ContainerHome } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <ContainerHome>
      <h1>KenzieHub</h1>
      <p>Descrição</p>

      <Button onClick={() => handleNavigation("/login")} whiteSchema>
        Login
      </Button>
      <Button onClick={() => handleNavigation("/signup")}>Cadastro</Button>
    </ContainerHome>
  );
};
