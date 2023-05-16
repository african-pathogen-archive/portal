/*import App from '../../components/pages/apa';

export default App;*/


import Pathogen from '../../../components/pages/apa/pathogen';
import { createPage } from 'global/utils/pages';

const ApaHome = createPage({
  getInitialProps: async () => null,
  isPublic: true,
})(() => {
  return <Pathogen />;
});

export default ApaHome;
