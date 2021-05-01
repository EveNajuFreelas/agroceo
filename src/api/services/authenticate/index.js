import { useMutation } from "react-query";
import api from "../..";

export function useServiceAuthenticate(dataCustumer) {
  const { mutateAsync } = useMutation(() => api.post('/Auth', dataCustumer));
  const makeLogin = mutateAsync();
  return makeLogin;
};