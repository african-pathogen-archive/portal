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
import { Layout, Space, Button, Typography, Card, Col, Row } from 'antd';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { PhoneOutlined, MailOutlined, PushpinOutlined } from '@ant-design/icons';

import { InternalLink } from '@/components/Link';
import { INTERNAL_PATHS } from '@/global/utils/constants';
import ContactInfoForm from '@/components/ContactInfo/ContactInfoForm';

import useAuthContext from '../../global/hooks/useAuthContext';
import CurrentUser from '../NavBar/CurrentUser';
import SideMenu from '../SideMenu';
import { getConfig } from '../../global/config';

import PartnerLogosBanner from './PartnerLogosBanner';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

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

const contentStyle: React.CSSProperties = {
	textAlign: 'left',
	minHeight: '80vh',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#F5F5F5',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'start',
	alignItems: 'center',
};

const cardDiv: React.CSSProperties = {
	width: '96%',
	display: 'flex',
	justifyContent: 'space-between',
};

const contactCard: React.CSSProperties = {
	width: '48%',
	display: 'inline-block',
	justifyContent: 'center',
	textAlign: 'left',
	verticalAlign: 'top',
};

const contactMap: React.CSSProperties = {
	borderRadius: '5%',
};

const infoText: React.CSSProperties = {
	marginLeft: '1rem',
	borderRadius: '5%',
};

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#fff',
	width: '256px',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#ffffff',
};

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_EGO_CLIENT_ID, NEXT_PUBLIC_KEYCLOAK } = getConfig();

const ContactInfo: React.FC = () => {
	const router = useRouter();

	const navigateToContactPage = () => {
		router.push(INTERNAL_PATHS.CONTACT);
	};

	const { logout, token } = useAuthContext();
	const [origin, setOrigin] = useState('');
	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);
	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<Header style={headerStyle}>
					<div
						css={css`
							display: flex;
							align-items: center;
							padding-top: 25px;
							cursor: pointer;
						`}
					>
						<InternalLink path={''}>
							<a
								css={css`
									align-items: left;
									text-decoration: none;
								`}
							>
								<img src="/images/logo.svg" alt="APA logo" width="182" />
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
				<Layout>
					<Sider style={siderStyle} width={256}>
						<SideMenu selectedKey={'contact'} />
					</Sider>
					<Layout>
						<Content style={contentStyle}>
							<Title style={{ width: '94%' }}>Contact us</Title>
							<div style={cardDiv}>
								<Card style={contactCard}>
									<b>Find us</b>
									<Row style={{ width: '100%', fontSize: '8px' }}>
										<Col span={12}>
											<Row>
												<MailOutlined />
												<a style={{ marginLeft: '4px' }} href="mailto:support@africa-union.org ">
													support@africa-union.org{' '}
												</a>
											</Row>
											<Row>
												<PushpinOutlined />
												<Col style={{ marginLeft: '4px' }}>Pathogen Genomics Initiative</Col>
											</Row>
											<Row>
												<Col style={infoText}>
													Africa Centres for Disease Control and Prevention
												</Col>
											</Row>
											<Row>
												<Col style={infoText}>African Union Commission</Col>
											</Row>
											<Row>
												<Col style={infoText}>Roosevelt Street (Old Airport Area)</Col>
											</Row>
											<Row>
												<Col style={infoText}>Addis Ababa</Col>
											</Row>
											<Row>
												<Col style={infoText}>P.O. Box 3243, Addis Ababa, Ethiopia</Col>
											</Row>
										</Col>
										<Col span={12}>
											<a href="https://goo.gl/maps/QBZ5pYFtioSbLEFLA" target="_blank">
												<img
													style={contactMap}
													width="100%"
													height="100%"
													src="/images/contact_us_map.png"
													alt="APA logo"
												/>
											</a>
										</Col>
									</Row>
								</Card>

								<Card style={contactCard}>
									<b>Send us a message</b>
									<ContactInfoForm />

									<Button htmlType="button" type="primary" size="large" style={{ width: '100%' }}>
										Send
									</Button>
								</Card>
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

export default ContactInfo;
