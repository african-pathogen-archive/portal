/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import React, { useState, useEffect } from 'react';
import { Layout, Space, Button, Typography } from 'antd';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { InternalLink } from '@/components/Link';
import useAuthContext from '@/global/hooks/useAuthContext';
import SideMenu from '@/components/SideMenu';
import { getConfig } from '@/global/config';
import { ROOT_PATH } from '@/global/utils/constants';

import PartnerLogosBanner from '../PartnerLogosBanner';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

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

const contentStyleTest: React.CSSProperties = {
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: '24px',
};

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#ffffff',
};

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_EGO_CLIENT_ID, NEXT_PUBLIC_KEYCLOAK } = getConfig();

const RequestSubmitted: React.FC = () => {
	const { logout, token, userHasAccessToStudySvc } = useAuthContext();
	const [origin, setOrigin] = useState('');
	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);

	const router = useRouter();

	const navigateToHomePage = () => {
		router.push(ROOT_PATH);
	};

	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
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
				</Header>
				<Layout>
					<Sider style={siderStyle} width={256}>
						<SideMenu selectedKey={'home'} />
					</Sider>
					<Layout>
						<Content style={contentStyleTest}>
							<Title style={{ width: '94%' }}>Onboarding Administrator</Title>

							<div>
								<h2>Request submitted</h2>
								<p>
									We have received your request and our administrators
									<br />
									will contact you to validate your account.
									<br />
								</p>
								<Button htmlType="button" onClick={navigateToHomePage} type="primary" size="large">
									Home
								</Button>
							</div>
						</Content>
						<Footer style={footerStyle}>
							<div>
								<PartnerLogosBanner />
							</div>
						</Footer>
					</Layout>
				</Layout>
			</Layout>
		</Space>
	);
};

export default RequestSubmitted;
