import { IJWT, IUserCredentials, IUserProfile } from '../@types/global/user.types';
import React, { createContext, useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';

interface IProfileContext {
   isAuthenticated: boolean, setIsAuthenticated: Function,
   JWT: IJWT | null, setJWT: Function,
   user: IUserProfile | null,
   handleLogin: (email: string, password: string) => Promise<void>,
   handleLogout: () => void,
}

const ProfileContext = createContext<IProfileContext>({} as IProfileContext);

const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
   const [JWT, setJWT] = useState<IJWT | null>(null);
   const [user, setUser] = useState<IUserProfile | null>(null);

   const { authenticate } = useApi();

   async function handleLogin (email: string, password: string) {
      try {
         const userCredentials = (await authenticate(email, password));
         const { accessToken, refreshToken, profile } = userCredentials;

         localStorage.setItem('promed_session', JSON.stringify(userCredentials));

         setJWT({ accessToken, refreshToken });
         setUser(profile);
         setIsAuthenticated(true);
      }
      catch (error) {
         console.log('handleLogin:', error);
         return alert('Credenciais de usuário incorretas.');
      }
   }

   function handleLogout () {
      localStorage.removeItem('promed_session');
      setIsAuthenticated(false);
      setUser(null);
      setJWT(null);
   }

   useEffect(() => {
      const storedCredentials = localStorage.getItem('promed_session') as string;
      if (storedCredentials) {
         const { accessToken, refreshToken, profile } = JSON.parse(storedCredentials) as IUserCredentials;
         setJWT({ accessToken, refreshToken });
         setUser(profile);
         setIsAuthenticated(true);
      }
   }, []);

   return (
      <ProfileContext.Provider
         value={{
            isAuthenticated, setIsAuthenticated,
            JWT, setJWT,
            user,
            handleLogin,
            handleLogout
         }}>
         {children}
      </ProfileContext.Provider>
   );
}

export { ProfileContext, ProfileContextProvider };
