import { css } from '@emotion/react';
import { FC, useEffect, useState } from 'react';
import { Button, Layout } from 'antd';

import useAuthContext from '@/global/hooks/useAuthContext';
import { getConfig } from '@/global/config';

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

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_EGO_CLIENT_ID, NEXT_PUBLIC_KEYCLOAK } = getConfig();

interface propInterface {}

export default function TopBar() {
	const { logout, token, userHasAccessToStudySvc } = useAuthContext();
	const [origin, setOrigin] = useState('');

	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);

	return (
		<Header style={headerStyle}>
			<div
				css={css`
					display: flex;
					align-items: center;
					cursor: pointer;
				`}
			>
				<InternalLink path={''}>
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
				<div>
					<CurrentUser />
				</div>
			)}
		</Header>
	);
}
