import { createPage } from '../../../global/utils/pages';
import OnboardingAdministrators from '@/components/pages/apa/onboarding_administrators';

const OnboardingAdministratorsPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <OnboardingAdministrators />;
});

export default OnboardingAdministratorsPage;
