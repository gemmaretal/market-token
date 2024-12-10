import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getPriceChangeList = async () => {
  const response = await axios.get('/api/getPriceChangeList', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return response.data;
};

export const usePriceChangeList = () => {
  return useQuery({
    queryKey: [`getPriceChangeList`],
    queryFn: async () => {
      const response = await getPriceChangeList();
      return response;
    },
    enabled: true,
    refetchInterval: 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
