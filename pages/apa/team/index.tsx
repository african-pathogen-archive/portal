import { createPage } from '../../../global/utils/pages';
import Team from '../../../components/pages/apa/team';

const TeamPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <Team />;
});

export default TeamPage;
