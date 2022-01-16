import CmsApiContext from './CmsApiContext';

export interface CmsApiProviderProps {
  apiUrl: string;
  children: React.ReactNode;
}

const CmsApiProvider = ({ apiUrl, children }: CmsApiProviderProps) => {
  console.log('Api Url', apiUrl);
  return (
    <CmsApiContext.Provider
      value={{
        apiUrl,
      }}
    >
      {children}
    </CmsApiContext.Provider>
  );
};

export default CmsApiProvider;
