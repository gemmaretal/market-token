import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getTokenList = async () => {
  const response = await axios.get('/api/getTokenList', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return response.data;
};

export const useTokenList = () => {
  return useQuery({
    queryKey: [`getTokenList`],
    queryFn: async () => {
      const response = await getTokenList();
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
