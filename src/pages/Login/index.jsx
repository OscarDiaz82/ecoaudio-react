import { useNavigate } from "react-router-dom";

import { UseForm } from "../../hooks/UseForm"
import { LoginUI } from "./LoginUI"
import { findIdentificationCar } from "../../services/UserService";

const initialForm = {
  identificationCard: '',
  password: ''
}

export const Login = () => {

  const { formState, onInputChange } = UseForm(initialForm);
  const { identificationCard, password } = formState;

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await findIdentificationCar(identificationCard);
    if (result.data.identificationCard === identificationCard
      && result.data.password === password) {
      navigate('/welcome');
    }
  }

  return (
    <LoginUI
      identificationCard={identificationCard}
      password={password}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  )
}
