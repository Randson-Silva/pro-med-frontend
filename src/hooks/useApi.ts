import { IRegisterUser } from "../@types/api/requests.types";
import { IUserCredentials, IUserProfile } from "../@types/global/profile.types";
import { useAxios } from "./useAxios";

export function useApi() {
  const axios = useAxios();

  return {
    register: async (userToRegister: IRegisterUser) => {
      const res = await axios.post<IUserProfile>("/auth/register", userToRegister);
      return res.data;
    },
    authenticate: async (email: string, password: string) => {
      const res = await axios.post<IUserCredentials>("/auth/authenticate", {
        email,
        password,
      });
      return res.data;
    }
  };
}
