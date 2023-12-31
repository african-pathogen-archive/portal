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
import { css } from '@emotion/react';

import { InternalLink } from '@/components/Link';

import useAuthContext from '../../../global/hooks/useAuthContext';
import CurrentUser from '../../NavBar/CurrentUser';
import SideMenu from '../../SideMenu';
import { getConfig } from '../../../global/config';

import PartnerLogosBanner from './PartnerLogosBanner';

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
	overflow: 'scroll',
};

const boldText: React.CSSProperties = {
	fontWeight: 'bold',
};

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#F5F5F5',
	width: '256px !important',
	flex: 'none',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#ffffff',
};

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_EGO_CLIENT_ID, NEXT_PUBLIC_KEYCLOAK } = getConfig();

const About: React.FC = () => {
	const { logout, token, userHasAccessToStudySvc } = useAuthContext();
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
				<Layout>
					<Sider style={siderStyle}>
						<SideMenu selectedKey={'about'} />
					</Sider>
					<Layout>
						<Content style={contentStyle}>
							<Title style={{ width: '80%' }}>About Us</Title>
							<Title style={{ width: '80%' }} level={4}>
								History
							</Title>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>2017</span> - The conceptualisation of a continental data
								sharing platform dates back to discussions held in Addis Ababa, Ethiopia in April
								2017 between the then Director of the Africa CDC, Dr John Nkengasong, and Prof Alan
								Christoffels of the South African National Bioinformatics Institute (SANBI),
								University of the Western Cape (UWC) where a potential partnership was discussed.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>2018</span> - an Africa CDC delegation led by the Technical
								Advisor to the Africa CDC at the time, Dr Philip Onyebujoh, embarked on a project to
								assess next generation sequencing and bioinformatics capability in Africa. This
								assessment included discussion with the South African National Bioinformatics
								Institute.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>2019</span> - A proposal writing workshop was held at the
								Protea Hotel, Durbanville, South Africa with the aim of submitting a proposal to the
								Bill & Melinda Gates Foundation for a 2-phase approach to strengthen regional
								pathogen genomics capacity in Africa focusing on sequencing, sample management and
								analytics. In attendance were members of the Africa CDC, ASLM, H3Abionet and
								SANBI-UWC.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								This concept was further socialized at the Global Emerging Pathogen Treatment
								Consortium (<a href="www.getafrica.org">www.getafrica.org</a>){' '}
								<a href="https://www.getafrica.org/events/5th-african-conference-on-emerging-infectious-diseases-biosecurity/">
									conference in Lagos, Nigeria by Dr Philip Onyebujoh
								</a>
								.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								Further discussions were held in 2019 at a meeting hosted by Alan Christoffels at
								SANBI-UWC with the then Technical Advisor Africa CDC (Dr Philip Onyebujoh) and Dr
								Jenn Gardy from BMGF to explore a pan African proposal to strengthen sequencing in
								Africa and to build an African Genome Archive. This work had featured as a part of a
								MSc student (Jamie Southgate){' '}
								<a href="https://etd.uwc.ac.za/bitstream/handle/11394/7699/southgate_m_nsc_2019.pdf?sequence=1&isAllowed=y">
									thesis
								</a>
								. Additional site assessments in Africa (9 laboratories) during the last quarter of
								2019 was led by the Africa CDC in partnership with ASLM, SANBI-UWC and a malaria
								expert at the UCSF, USA (Dr Sofonias Tessema, later to be the Programme lead for the
								PGI at the Africa CDC). These site visits reinforced the need to continue the
								realization of a continental data platform to meet the needs of local data
								producers.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								In March 2020, a landmark meeting was held at the Breakwater Lodge, Cape Town to
								review the continental assessment and to develop a strategy with a view to submit a
								grant application to roll out a genomic epidemiology programme that included a
								continental pathogen archive (that eventually resulted in the launch of the Pathogen
								Genomics Institute)
							</Paragraph>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/Xyfnu3Av9n4?si=nDdGeTjtYra4wuJX"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
							<Paragraph style={{ width: '80%', marginTop: '2rem' }}>
								<span style={boldText}>2020-2023</span> - The COVID-19 pandemic and the subsequent
								successful resource mobilisation by the Africa CDC PGI team in collaboration with
								partners demonstrated an acute lack of data management protocols in Africa against a
								backdrop of increasing data production capability. The Africa CDC PGI team led a
								process of stakeholder engagement during the COVID-19 pandemic to assess the data
								needs, limitations and expectations in Africa among public health, bioinformatics
								and genomics communities. The findings of these stakeholder engagements were
								synthesized by the Data Technical Working Group of the Africa CDC into a Data
								Architecture Roadmap, and a position paper (URL nature med). An investment by the
								BMGF catalyzed the development of the African Pathogen Data Sharing and Archive
								Platform Prototype.
							</Paragraph>
							<Title style={{ width: '80%' }} level={4}>
								Mission
							</Title>
							<Paragraph style={{ width: '80%' }}>
								Agari promotes timely sharing of pathogen sequence and related clinical and
								epidemiological data to inform public health decision making. Agari strives to
								ensure responsible, equitable, accessible, transparent, fair and secure sharing of
								high quality and complete data.
							</Paragraph>
							<Title style={{ width: '80%' }} level={4}>
								Vision
							</Title>
							<Paragraph style={{ width: '80%' }}>
								Real-time data exchange to enable enhanced surveillance for outbreak prevention,
								detection, and response and to inform disease control and elimination.
							</Paragraph>
							<Title style={{ width: '80%' }} level={4}>
								Governance
							</Title>
							<Paragraph style={{ width: '80%' }}>
								A range of initiatives are underway to facilitate cross-border data sharing in
								Africa. National pathogen genomics frameworks have been developed in Kenya,
								Botswana, Nigeria and South Africa in response to the COVID-19 pandemic. The Africa
								CDC PGI team has scaled up these pathogen-centric frameworks by driving a process to
								develop a Pathogen genomics surveillance policy framework for Africa. Other regional
								efforts include the Africa CDC’s framework for event-based surveillance to enhance
								the implementation of the Integrated Disease Surveillance and Response.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								The above-mentioned landscape and evolution of regulatory frameworks in Africa are
								central to the governance of the African Data Sharing and Archive Platform. This
								Africa CDC-led portal seeks to provide a highly secured, trusted, public
								health-oriented solution for real-time sharing of pathogen data. A governance board
								will be established to provide transparency and accountability for all technology
								and guidance protocols that will be implemented in the data sharing portal as part
								of the data custodianship role of the Africa CDC. Membership of the governance board
								will comprise continental and regional bodies that will provide oversight to the
								implementation of the African Data Sharing and Archive Platform.
							</Paragraph>
							<Title style={{ width: '80%' }} level={4}>
								Acknowledgements
							</Title>
							<Paragraph style={{ width: '80%' }}>
								The prototype was developed with the support from the Bill Melinda Gates Foundation
								(BMGF) Grant Number INV-018278. We acknowledge the Public Health Institutions in
								Africa and staff that have contributed to the development of the platform.
							</Paragraph>
							<Title style={{ width: '80%' }} level={4}>
								Technical Partners
							</Title>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>User interface design:</span> Hominum Global
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>Engineering:</span> Overture.bio engineering team, Ontario
								Institute for Cancer Research, Canada; US CDC; ELIXR; South African National
								Bioinformatics Institute (SANBI), University of the Western Cape; Nomazangwa
								Consulting.
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>Data curation partners:</span> Pasteur Institut de Dakar,
								Senegal; Institut Pasteur de Maroc, Morocco; Uganda National Health Laboratory,
								Instituto Nacional De Saude, Mozambique; National Center for Biotechnology
								Information, USA; Public Health Alliance for Genomic Epidemiology
							</Paragraph>
							<Paragraph style={{ width: '80%' }}>
								<span style={boldText}>Project management:</span> African Society For Laboratory
								Medicine (ASLM); Africa CDC PGI team
							</Paragraph>
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

export default About;
