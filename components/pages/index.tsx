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

import { InternalLink } from '@/components/Link';
import PathogenTable from '@/components/PathogenTable';
import { INTERNAL_PATHS } from '@/global/utils/constants';

import useAuthContext from '../../global/hooks/useAuthContext';
import CurrentUser from '../NavBar/CurrentUser';
import SideMenu from '../SideMenu';
import { getConfig } from '../../global/config';
import TopBar from '../TopBar';

import PartnerLogosBanner from './PartnerLogosBanner';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

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

const descriptiveText: React.CSSProperties = {
	width: '80%',
	display: 'flex',
	justifyContent: 'space-between',
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

const App: React.FC = () => {
	const { logout, token, userHasAccessToStudySvc } = useAuthContext();
	const [origin, setOrigin] = useState('');
	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);

	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<TopBar />
				<Layout>
					<Sider style={siderStyle} width={256}>
						<SideMenu selectedKey={'home'} />
					</Sider>
					<Layout>
						<Content style={contentStyle}>
							<Title style={{ width: '80%', color: '#5D4528E0' }}>
								Welcome to the African Pathogen Data Sharing and Archive Platform
							</Title>
							<Paragraph style={{ width: '80%' }}>
								Agari (an Amharic word meaning to share and benefit) is a continental platform is a
								continental platform for National Public Health Institutions (NPHIs), National
								Reference Labs (NRLs), Research and Academic institutions to upload and share
								pathogen sequence and associated metadata.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								This platform is being piloted for real time pathogen genomics data management,
								sharing and exchange in Africa. The platform allows users to upload, share, explore,
								and download pathogen sequence and associated metadata as per data use guidelines
								provided by each country. The data contained in this platform is shared by Member
								States and made available by the Africa CDC. Africa CDC’s goal is to deliver a
								highly secured, trusted, public health oriented and seamless solution to facilitate
								the real-time sharing of pathogen sequence data.
							</Paragraph>
							<div style={{ width: '80%' }}>
								<PartnerLogosBanner />
							</div>
							<Title level={4} style={{ width: '80%' }}>
								Pathogens available
							</Title>
							<PathogenTable />
							<div style={descriptiveText}>
								<div style={{ width: '45%' }}>
									<Title level={3}>What the platform does</Title>
									<Paragraph>
										The Agari pilot development and implementation is based on the CanCoGen VirusSeq
										data portal, developed at the Ontario Institute of Cancer Research (OICR). The
										Agari platform provides its services on a Kubernetes cluster. The landing page
										allows the public to see summary information of what is in the data portal.
									</Paragraph>
									<Paragraph>
										A registration button facilitates authorisation and authentication. Registered
										users can upload NGS data and associated metadata. The metadata is indexed and
										allows rapid customised query searches. Dashboards are used to provide visual
										summaries of datasets and provenance information.
									</Paragraph>
								</div>
								<div style={{ width: '45%' }}>
									<Title level={3}>How to use this platform </Title>
									<Paragraph>
										There is adequate information on the landing page that can be accessed without
										the need to register for an account. The navigation panel to the left provides
										quick access to information about the portal. The registration link provides
										users with a mechanism to request an account. Registered users can upload
										within-country generated datasets and associated metadata, download datasets,
										browse metadata and have access to a record of previous activity on the portal.
									</Paragraph>
								</div>
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

export default App;
