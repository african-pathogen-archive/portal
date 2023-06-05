import Pathogens from '../../../components/pages/apa/pathogens';
import { createPage } from 'global/utils/pages';

const PathogensPage = createPage({
  getInitialProps: async () => null,
  isPublic: true,
})(() => {
  return <Pathogens />;
});

export default PathogensPage;
