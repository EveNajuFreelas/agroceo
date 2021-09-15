import { useState } from 'react';
import { useMutation } from 'react-query';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

function useRegisterContainer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('br');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [retrypsw, setRetrypsw] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const { mutateAsync, isSuccess } = useMutation(newCustumer => api.post('/Users', newCustumer), {
    onSuccess: (result) => {
      setReady(true);
      console.log(result);
    },
    onError: (error) => {
      setError(true);
      console.error(error);
    }
  });

  const createCustumer = async () => {
    setIsLoading(true);
    const dataObject = {
      name,
      phone,
      email,
      country,
      password,
    };

    if (!phone || !email || !password || !name) {
      alert('Preencha os campos para continuar!')
      setIsLoading(false);
      return false;
    }

    if (password !== retrypsw) {
      setIsLoading(false);
      alert('Senhas divergentes!')
      return false;
    }

    try {
      await mutateAsync(dataObject);
      setIsLoading(false);
      clearCustumer();
    } catch (error) {
      setIsLoading(false);
      clearCustumer();
    }
  }

  const clearCustumer = () => {
    setCountry('');
    setEmail('');
    setError(false);
    setIsLoading(false);
    setName('');
    setPassword('');
    setRetrypsw('');
    setReady(false);
  }

  return { 
      name, 
      email, 
      country, 
      phone, 
      password, 
      retrypsw, 
      error, 
      setEmail, 
      setName, 
      setCountry, 
      setPhone, 
      setPassword, 
      setRetrypsw, 
      createCustumer, 
      isSuccess, 
      isLoading, 
      ready 
    };
};

export const RegisterContainer = createContainer(useRegisterContainer);

export const useRegisterCustumer = () => useContainer(RegisterContainer);