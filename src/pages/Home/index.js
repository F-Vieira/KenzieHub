import { ContainerHome } from "./styles";
import { Button } from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";

export const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="dashboard" />;
  }

  return (
    <ContainerHome>
      <h1>KenzieHub</h1>
      <p>Descrição</p>

      <div>
        <Button onClick={() => handleNavigation("/login")} whiteSchema>
          Login
        </Button>
        <Button onClick={() => handleNavigation("/signup")}>Cadastro</Button>
      </div>
    </ContainerHome>
  );
};
