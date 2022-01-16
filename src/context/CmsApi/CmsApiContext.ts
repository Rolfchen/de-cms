import { createContext } from 'react';

export interface CmsApiContextValue {
  apiUrl: string;
}

const CmsApiContext = createContext<CmsApiContextValue>({
  apiUrl: '/',
});

export default CmsApiContext;
