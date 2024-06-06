import RequestSubmitted from '@/components/pages/onboarding_administrators/request_submitted';

import { createPage } from '../../global/utils/pages';
// import RequestSubmitted from '@/components/pages/apa/onboarding_administrators/request_submitted';

const RequestSubmittedPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <RequestSubmitted />;
});

export default RequestSubmittedPage;
