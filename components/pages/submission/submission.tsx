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

import { ReactElement, useEffect, useState } from 'react';
import { Breadcrumb, Layout, Space, Typography, Upload } from 'antd';
import getConfig from 'next/config';

import useAuthContext from '@/global/hooks/useAuthContext';
import TopBar from '@/components/TopBar';
import SideMenu from '@/components/SideMenu';
import UploadInstructions from '@/components/UploadInstructions';

import PageLayout from '../../PageLayout';
import PartnerLogosBanner from '../PartnerLogosBanner';

import PageContent from './PageContent';
import NewSubmissions from './ApaNewSubmissions';
import HistoricalSubmissions from './HistoricalSubmissions';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { Dragger } = Upload;

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#000',
	height: 64,
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
	backgroundColor: '#ffffff',
	borderRadius: '16px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'start',
	alignItems: 'center',
	paddingLeft: '16px',
	paddingRight: '16px',
	marginLeft: '16px',
	marginTop: '16px',
	width: '95%',
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
	bottom: 0,
	height: 64,
};

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_EGO_CLIENT_ID, NEXT_PUBLIC_KEYCLOAK } = getConfig();
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Submission = (): ReactElement => {
	const { token } = useAuthContext();

	const [origin, setOrigin] = useState('');
	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);
	return (
		<PageLayout subtitle="Submission Dashboard">
			<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
				<Layout>
					{/* <TopBar /> */}
					<Layout>
						<Sider style={siderStyle} width={256}>
							<SideMenu selectedKey={'projects'} />
						</Sider>
						<Layout style={{ backgroundColor: '#F5F5F5' }}>
							<Breadcrumb
								style={{
									alignSelf: 'left',
									width: '80%',
									marginTop: '16px',
									marginLeft: '16px',
								}}
								items={[
									{
										title: 'Projects',
									},
									{
										title: 'SARS-Cov-2',
									},
								]}
							/>
							<Content style={contentStyle}>
								<Title level={4} style={{ width: '100%' }}>
									Submit your data
								</Title>
								<UploadInstructions />
								<NewSubmissions />
								<HistoricalSubmissions />
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
		</PageLayout>
	);
};

export default Submission;
