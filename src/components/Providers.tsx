import {config} from '@utils/theme';
import {ConfigProvider} from 'antd';
import {ReduxProviders} from 'redux/provider';

interface ProvidersProps {
  children?: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <ReduxProviders>
      <ConfigProvider theme={config}>{children}</ConfigProvider>
    </ReduxProviders>
  );
};

export default Providers;
