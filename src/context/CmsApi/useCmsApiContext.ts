import { useContext } from 'react';
import CmsApiContext from './CmsApiContext';

/**
 * use the Cms Api Context value
 * @returns
 */
const useCmsApiContext = () => {
  const context = useContext(CmsApiContext);
  if (context === undefined) {
    throw new Error('useCmsApiContext must be used within a CmsApiProvider');
  }
  return context;
};

export default useCmsApiContext;
