//import 'antd/dist/reset.css';
import Providers from '@components/Providers';
import Routers from '@components/Routers';

import './App.less';

function App() {
  return (
    <Providers>
      <Routers />
    </Providers>
  );
}

export default App;
