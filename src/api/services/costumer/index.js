import { useMutation } from "react-query";
import api from "../..";

export function useServiceCustumer(dataCustumer) {
  const { mutateAsync } = useMutation(() => api.post('/User', dataCustumer));

  const create = mutateAsync();

  return { create }
};