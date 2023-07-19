import ContactInfo from '@/components/pages/apa/contactInfo';

import { createPage } from '../../../global/utils/pages';
// // import ContactInfo from '../../../components/pages/apa/contactInfo';
// import FAQ from '@/components/pages/apa/faq';

const ContactInfoPage = createPage({
	getInitialProps: async () => null,
	isPublic: true,
})(() => {
	return <ContactInfo />;
});

export default ContactInfoPage;
