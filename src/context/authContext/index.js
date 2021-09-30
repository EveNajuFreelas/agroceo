import { useState, useEffect } from "react";
import { createContainer, useContainer } from "unstated-next";
import { clear, getObject, saveObject } from "../../utils/storage";
import { useMutation } from "react-query";
import api from "../../api";

const User = "@agroceo/user";
const AccessToken = "@agroceo/accessToken";
const Properties = "@agroceo/properties";

const useAuthenticationContainer = () => {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("@agroceo/user"));
  const [properties, setProperties] = useState();

  const {
    isLoading,
    mutateAsync,
    isSuccess,
    isError
  } = useMutation((user) => {
    console.log("tentou")
    return api.post("/Auth", user)
  }, {
    onSuccess: async (result) => {
      console.log("onSuccess");
      await saveObject(User, result.data);
      await saveObject(Properties, result.data.properties);
      await saveObject(AccessToken, result.data.token);
      setUser(result.data);
      setProperties(result.data.properties);
      setReady(true);
    },
    onError: (error) => {
      console.log("onError", error);
    },
  }
  );

  useEffect(() => {
    const userData = localStorage.getItem("@agroceo/user")
    setUser(userData);
    async function getPropertiesFromStorage() {
      setProperties(await getObject(Properties));
    }

    getPropertiesFromStorage();
  }, []);

  const signIn = async (userData) => {
    if (userData) {
      try {
        await mutateAsync(userData);
        if (ready) {
          return true;
        }
      } catch (error) {
        return false;
      }
    }

    return false;
  };

  const loadUser = () => {
    const savedUser = localStorage.getItem("@agroceo/user");
    const savedProperties = localStorage.getItem("@agroceo/properties");

    setUser(savedUser);
    setProperties(savedProperties);
    setReady(true);
  };

  const signOut = async () => clear(User);

  return {
    user,
    isLoading,
    isSuccess,
    isError,
    ready,
    signIn,
    signOut,
    loadUser,
    properties,
  };
};

export const AuthenticationContainer = createContainer(
  useAuthenticationContainer
);

export const useAuthentication = () => useContainer(AuthenticationContainer);