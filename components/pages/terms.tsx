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
import { Layout, Space, Button, Typography, Card } from 'antd';

import SideMenu from '../SideMenu';
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

const TermsAndConditions: React.FC = () => {
	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<TopBar />
				<Layout>
					<Sider style={siderStyle} width={256}>
						<SideMenu selectedKey={'terms'} />
					</Sider>
					<Layout>
						<Content style={contentStyle}>
							<Title style={{ width: '80%' }}>Terms and Conditions</Title>

							<Card style={descriptiveText}>
								<Paragraph>
									The Africa Pathogen Data sharing and Archive platform is embedded within the
									Pathogen Genomics Initiative (PGI) at the Africa CDC to support sharing of
									pathogen genomic data between Africa Union member states and their associated
									National Public Health Institutions.
								</Paragraph>
								<Paragraph>
									This platform was conceptualized and designed during the COVID-19 pandemic and
									aims to offer a resource where scientists can securely share and collaborate
									around data for disease-causing pathogens. This provides a unique proposition that
									goes beyond archiving data, and ensures transparency and accountability to African
									member states supported by good governance.
								</Paragraph>
							</Card>
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

export default TermsAndConditions;
