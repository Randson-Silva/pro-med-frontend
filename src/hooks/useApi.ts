import { IRegisterUser } from "../@types/api/requests.types";
import { IClientProfile } from "../@types/global/client.types";
import { IUserCredentials, IUserProfile } from "../@types/global/user.types";
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
    },
    getClientProfile: async () => {
      const res = await axios.get<IClientProfile>("/user/clients/profile");
      return res.data;
    }
  };
}
