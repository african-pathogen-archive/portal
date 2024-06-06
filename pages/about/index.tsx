import About from '@/components/pages/about';

import { createPage } from '../../global/utils/pages';

const AboutPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <About />;
});

export default AboutPage;
