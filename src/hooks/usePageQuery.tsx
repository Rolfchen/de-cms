import axios from 'axios';
import { useQuery } from 'react-query';
import { useCmsApiContext } from '../context';
import { IPage } from '../types';

const fetchPageData = async (pageSlug: string, apiUrl: string) => {
  const response = await axios.get<IPage>(`${apiUrl}/page/${pageSlug}`);
  return response?.data;
};

const usePageQuery = (pageSlug: string) => {
  const { apiUrl } = useCmsApiContext();
  return useQuery(['pageData', pageSlug], () =>
    fetchPageData(pageSlug, apiUrl)
  );
};

export default usePageQuery;
