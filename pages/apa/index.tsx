/*import App from '../../components/pages/apa';

export default App;*/


import App from '../../components/pages/apa';
import { createPage } from 'global/utils/pages';

const ApaHome = createPage({
  getInitialProps: async () => null,
  isPublic: true,
})(() => {
  return <App />;
});

export default ApaHome;
