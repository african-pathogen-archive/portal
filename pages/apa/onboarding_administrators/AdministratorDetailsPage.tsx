import { createPage } from '../../../global/utils/pages';
import AdministratorDetails from '@/components/pages/apa/onboarding_administrators/administrator_details';

const AdministratorDetailsPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <AdministratorDetails />;
});

export default AdministratorDetailsPage;
