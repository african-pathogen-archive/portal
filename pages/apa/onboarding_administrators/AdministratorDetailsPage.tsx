import AdministratorDetails from '@/components/pages/apa/onboarding_administrators/administrator_details';

import { createPage } from '../../../global/utils/pages';

const AdministratorDetailsPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <AdministratorDetails />;
});

export default AdministratorDetailsPage;
