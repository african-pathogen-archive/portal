import React from 'react';
import {
	HomeOutlined,
	AlignLeftOutlined,
	ReadOutlined,
	FolderOutlined,
	QuestionCircleOutlined,
	NotificationOutlined,
	ProfileOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';

import useAuthContext from '../../global/hooks/useAuthContext';

const MenuItemUrls = new Map<string, string>([
	['home', '/'],
	['about', '/about'],
	['pathogen', '/pathogens'],
	['projects', '/projects'],
	['submission', '/submission'],
	['resources', '/resources'],
	['guides', '/guides'],
	['faqs', '/faqs'],
	['contact', '/contact'],
	['terms', '/terms'],
	['onboarding_administrators', '/onboarding_administrators'],
	['administrator_details', '/onboarding_administrators/AdministratorDetailsPage'],
	['edit_profile', '/edit_profile/EditProfileDetailsPage'],
]);

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}
const itemsWhenAuthenticated: MenuProps['items'] = [
	getItem('Pathogen', 'pathogen', <AlignLeftOutlined />),
	getItem('Projects', 'projects', <UploadOutlined />),
	getItem('Submission', 'submission', <UploadOutlined />),
	getItem('About Us', 'about', <HomeOutlined />),
	getItem('Resources', 'resources', <ReadOutlined />),
	getItem('Guides', 'guides', <FolderOutlined />),
	getItem('FAQs', 'faqs', <QuestionCircleOutlined />),
	getItem('Contact', 'contact', <NotificationOutlined />),
	getItem('Terms & conditions', 'terms', <ProfileOutlined />),
];

const itemsWhenNotAuthenticated: MenuProps['items'] = [
	getItem('Home', 'home', <HomeOutlined />),
	getItem('Pathogen', 'pathogen', <AlignLeftOutlined />),
	getItem('About Us', 'about', <HomeOutlined />),
	getItem('Resources', 'resources', <ReadOutlined />),
	getItem('Guides', 'guides', <FolderOutlined />),
	getItem('FAQs', 'faqs', <QuestionCircleOutlined />),
	getItem('Contact', 'contact', <NotificationOutlined />),
	getItem('Terms & conditions', 'terms', <ProfileOutlined />),
	// getItem('Onboarding Administrators', 'onboarding_administrators', <ProfileOutlined />),
	// getItem('Edit Profile', 'edit_profile', <ProfileOutlined />),
];

const SideMenu = ({ selectedKey }: { selectedKey: string }) => {
	const router = useRouter();
	const onClick: MenuProps['onClick'] = (e) => {
		router.push(MenuItemUrls.get(e.key) as string);
	};
	const { token } = useAuthContext();

	return (
		<Menu
			onClick={onClick}
			style={{ height: '100%', position: 'fixed', width: '256px' }}
			defaultSelectedKeys={[selectedKey]}
			defaultOpenKeys={['home']}
			mode="inline"
			items={token ? itemsWhenAuthenticated : itemsWhenNotAuthenticated}
		/>
	);
};

export default SideMenu;
