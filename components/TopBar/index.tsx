import { css } from '@emotion/react';
import React, { FC, useEffect, useState } from 'react';
import { Avatar, Button, Dropdown, Layout, MenuProps, Modal } from 'antd';

import useAuthContext from '@/global/hooks/useAuthContext';
import { getConfig } from '@/global/config';
import getUserInitials from '@/global/utils/getUserInitials';
import { INTERNAL_PATHS } from '@/global/utils/constants';

import { InternalLink } from '../Link';
import CurrentUser from '../NavBar/CurrentUser';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#000',
	height: 68,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#ffffff',
	display: 'flex',
	justifyItems: 'center',
	justifyContent: 'space-between',
	position: 'sticky',
	top: 0,
	zIndex: 1,
	width: '100%',
};

const headerButtons: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: 180,
};
const logoutSection: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	gap: '15px',
};

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_EGO_CLIENT_ID, NEXT_PUBLIC_KEYCLOAK } = getConfig();

export default function TopBar() {
	const { logout, token } = useAuthContext();
	const [origin, setOrigin] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user } = useAuthContext();

	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		logout(({ category = 'Button', action = 'Logout' }) => {});
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Button onClick={() => showModal()} style={{ color: '#B76142' }} type="link">
					Logout
				</Button>
			),
		},
	];

	return (
		<Header style={headerStyle}>
			<Modal title="Confirm Logout" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<p>Are you sure you want to logout?</p>
			</Modal>
			<div
				css={css`
					display: flex;
					align-items: center;
					cursor: pointer;
				`}
			>
				<InternalLink path={INTERNAL_PATHS.APA}>
					<a
						css={css`
							align-items: left;
							text-decoration: none;
							display: flex;
							height: 100%;
						`}
					>
						<img src="/images/logo.svg" alt="APA logo" width="180" />
					</a>
				</InternalLink>
			</div>
			{token === undefined && (
				<div style={headerButtons}>
					<Button
						href={`${NEXT_PUBLIC_EGO_API_ROOT}/oauth/login/keycloak?client_id=${NEXT_PUBLIC_EGO_CLIENT_ID}`}
					>
						Login
					</Button>
					<Button
						href={`${NEXT_PUBLIC_KEYCLOAK}registrations?client_id=ego&response_type=code&redirect_uri=${origin}`}
						type="primary"
					>
						Register
					</Button>
				</div>
			)}
			{token && (
				<div style={logoutSection}>
					<CurrentUser />
					<Dropdown menu={{ items }}>
						<a onClick={(e) => e.preventDefault()}>
							<Avatar size="large">{getUserInitials(user?.firstName)}</Avatar>
						</a>
					</Dropdown>
				</div>
			)}
		</Header>
	);
}
