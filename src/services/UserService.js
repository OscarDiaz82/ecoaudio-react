import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/users';

export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}

/* export const create = async ({ name, lastName, email, password, identificationCard, idRol }) => {
  try {
    const response = await axios.post(BASE_URL, {
      name, lastName, email, password, identificationCard, idRol
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}

export const update = async ({ id, name, lastName, email, password, identificationCard, idRol }) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, {
      name, lastName, email, password, identificationCard, idRol
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}

export const remove = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
} */

export const findIdentificationCar = async (identificationCar) => {
  try {
    const response = await axios.get(`${BASE_URL}/findIdentificationCard/${identificationCar}`)
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}