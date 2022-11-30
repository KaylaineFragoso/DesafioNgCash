import { Link } from "react-router-dom";
import { useState } from "react";

import jpIMG from "../../assets/logo.ngcash.svg"
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [Nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title"> Bem vindo! </span>

        <span className="login-form-title">
          <img src={jpIMG} alt="Jovem Programador" />
        </span>

        <div className="wrap-input">
          <input
            className={Nome !== "" ? "has-val input" : "input"}
            type="Nome"
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome do Usuário"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};