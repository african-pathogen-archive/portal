import { createPage } from '../../global/utils/pages';
import Pathogens from '../../components/pages/pathogens';

const PathogensPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <Pathogens />;
});

export default PathogensPage;
