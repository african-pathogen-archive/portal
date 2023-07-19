import Resources from '@/components/pages/apa/resources';

import { createPage } from '../../../global/utils/pages';

const ResourcesPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <Resources />;
});

export default ResourcesPage;
