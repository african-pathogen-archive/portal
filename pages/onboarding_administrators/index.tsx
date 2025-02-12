import OnboardingAdministrators from '@/components/pages/onboarding_administrators';

import { createPage } from '../../global/utils/pages';

const OnboardingAdministratorsPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <OnboardingAdministrators />;
});

export default OnboardingAdministratorsPage;
