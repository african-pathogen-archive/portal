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
import { Layout, Space, Button, Typography, Card, Col, Row, Collapse } from 'antd';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { INTERNAL_PATHS } from '@/global/utils/constants';

import SideMenu from '../SideMenu';
import TopBar from '../TopBar';

import PartnerLogosBanner from './PartnerLogosBanner';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

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
	width: '94%',
	display: 'flex',
	justifyContent: 'space-between',
};

const contactCard: React.CSSProperties = {
	width: '94%',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	// alignItems: 'center',
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

const FAQ: React.FC = () => {
	const router = useRouter();

	const navigateToContactPage = () => {
		router.push(INTERNAL_PATHS.CONTACT);
	};

	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<TopBar />
				<Layout>
					<Sider style={siderStyle} width={256}>
						<SideMenu selectedKey={'faqs'} />
					</Sider>
					<Layout>
						<Content style={contentStyle}>
							<Title style={{ width: '94%' }}>Help Centre</Title>
							<Paragraph style={{ width: '94%' }}>
								Welcome to our help centre. We are here to support you with the help you need.
							</Paragraph>

							<Card style={descriptiveText}>
								<Row>
									<Col span={12}>
										<div style={{ padding: '10px' }}>
											<Title level={3}>FAQs</Title>
											<Paragraph>
												Need something cleared up? Here are our most frequently asked questions.
											</Paragraph>
										</div>
									</Col>
									<Col span={12}>
										<div style={{ padding: '10px' }}>
											<Collapse accordion>
												<Panel
													header="What is the Agari Initiative and why was it created?"
													key="apa_initiative"
												>
													<Paragraph>
														African Pathogen Data Sharing and Archive Platform, Agari, was created
														as an alternative to traditional public-domain data archives to address
														concerns such as loss of ownership over intellectual property rights and
														lack of proper acknowledgement for scientific contributions. Agari
														provides a space for registered users to access disease surveillance
														data for cross border analyses in a trusted space. Agari launched in
														2023.
													</Paragraph>
												</Panel>
												<Panel
													header="Why do users need to register to access the Agari database?"
													key="need_to_register"
												>
													<Paragraph>
														Registration and agreeing to terms of use are necessary to uphold the
														integrity of the Agari user community and enforce the Agari sharing
														mechanism that assures reciprocity of the data for future generations.
													</Paragraph>
												</Panel>
												<Panel
													header="When will genetic sequences be accessible to the public?"
													key="accessible_to_public"
												>
													<Paragraph>
														Genetic sequences and associated metadata uploaded to Agari will be made
														accessible immediately to data owners after successful submission,
														unlike many conventional public-domain archives. Public accessible
														datasets will be defined by data submitters.
													</Paragraph>
												</Panel>
												<Panel
													header="Does Agari store restricted sequences and metadata in its database?"
													key="store_restricted_sequences"
												>
													<Paragraph>
														Yes, Agari allows submitters to choose whether datasets and accompanying
														metadata are publicly available or restricted data (private).
													</Paragraph>
												</Panel>
												<Panel
													header="How can I get access to restricted data on Agari?"
													key="access_restricted_data"
												>
													<Paragraph>
														An interested party may use the “Request data” hyperlink to request
														access to the data from the original submitter, but granting access to
														the data is up to the data owner and is therefore not guaranteed.
													</Paragraph>
												</Panel>
												<Panel
													header="Can I publish using Agari accession/project ID numbers?"
													key="publish_using_apa_accession"
												>
													<Paragraph style={{ color: 'red' }}>
														At this stage project ID numbers are specific to the resource and would
														not have any value to outside viewers. Requests to reference the Agari
														platform should cite as follows Christoffels, A., Mboowa, G., van
														Heusden, P. et al. A pan-African pathogen genomics data sharing platform
														to support disease outbreaks. Nat Med 29, 1052-1055 (2023).
														<a href="https://doi.org/10.1038/s41591-023-02266-y">
															https://doi.org/10.1038/s41591-023-02266-y
														</a>
													</Paragraph>
												</Panel>
												<Panel
													header="What is happening to the ownership of the data in Agari?"
													key="data_ownership"
												>
													<Paragraph>
														Ownership to data remains unchanged, and submitters do not forfeit their
														rights to the data they deposit in Agari.
													</Paragraph>
												</Panel>
												<Panel
													header="Does Agari release genetic sequences to public-domain archives?"
													key="genetic_sequence_release"
												>
													<Paragraph>
														No, Agari does not release data to databases. APIs will be provided for
														any data generator who requests data to be submitted to public archives.
													</Paragraph>
												</Panel>
												<Panel
													header="Can I recover my password or username for Agari?"
													key="can_i_recover_my_account"
												>
													<Paragraph>
														Yes, Agari provides users with an automated process to recover their
														password or username. In case of lost access to the email used in
														registration, users may contact their administrative representative or
														<a href="mailto:support@africa-union.org">
															log a ticket with Agari
														</a>{' '}
														for assistance.
													</Paragraph>
												</Panel>
												<Panel header="Data available" key="data_available">
													<Paragraph>
														Currently, Agari focuses on providing access to data types that do not
														constitute "personal data/information". These include: consensus viral
														sequence
														<br />
														raw de-hosted viral sequences
														<br />
														sample collection date
														<br />
														specimen collector sample ID
														<br />
														geo_loc name (country)
														<br />
														organism
														<br />
														sample submitted by
														<br />
														sequencing instrument
														<br />
														host (scientific name)
														<br />
														sample collected by
														<br />
														geo_loc name (state/province/territory)
														<br />
														consensus sequence software name
														<br />
														purpose of sequencing
														<br />
														host disease
														<br />
														isolate
														<br />
														consensus sequence software version
														<br />
													</Paragraph>
												</Panel>
												<Panel header="Data users guidelines" key="users_guidelines">
													<Paragraph>
														Users can gain access to the data available on Agari free of charge in a
														fully transparent manner, intended for members of the scientific
														community with acceses permissions and other interested parties.
														However, it is mandatory for users to obtain permissions from the data
														producers including the required acknowledgment of the data
														contributors' work. Any attempts to exploit the data present on the
														platform to re-identify any individuals are strictly prohibited. In case
														any such personally identifiable information is encountered, the user
														must immediately report the incident and specify the dataset causing the
														issue at support@africa-union.org.
													</Paragraph>
												</Panel>
												<Panel header="Data standards guidelines" key="standards_guidelines">
													<Paragraph>
														The Data Portal's implemented data standard is subject to modifications
														with changing data requirements over time (e.g., introduction of
														additional fields and terms and updating of prerequisites).
														Consequently, it can bring about changes in the database schema as well
														as the nature of data furnished by data stewards. For further details,
														please get in touch with us by
														<a href="mailto:support@africa-union.org">logging a ticket</a>.
													</Paragraph>
												</Panel>
												<Panel header="Disclaimer" key="disclaimer">
													<Paragraph>
														Agari releases virus sequences and basic information with the goal of
														encouraging collaboration, research, and surveillance related to public
														health.
													</Paragraph>
													<Paragraph>
														While Agari implements some quality control measures and integrity
														checks, the accuracy and quality of the data ultimately falls on the
														submitters, not Agari. Submitters must also confirm that they have
														permission to provide the data. The Agari team collaborates with
														submitters to improve the metadata and sequence data, aiming to enhance
														the overall quality and consistency of the submitted data.
													</Paragraph>
												</Panel>
												<Panel header="Privacy Policy" key="privacy_policy">
													<Paragraph>
														The Agari platform is committed to protecting the privacy and security
														of the personal information and data of its users to the greatest extent
														possible subject in accordance with the{' '}
														<a href="https://popia.co.za/" target="_blank">
															Protection of Personal Information Act (POPI Act)
														</a>
														. Personal information is defined as information that can reasonably be
														used to identify an individual either alone or in combination with other
														available information. The Agari staff will only use your personal
														information for consented purposes. This policy will be followed, except
														for cases in which legal requirements demand access or when subpoenas or
														other legal instruments allow personal data access. Your explicit
														permission is required before sharing personal data outside of the Agari
														platform and its affiliated personnel or contractors. Personal data will
														be stored only as long as necessary to meet its purposes, as permitted
														by applicable legal regulations.
													</Paragraph>
												</Panel>
												<Panel
													header="Purpose, use, and collection of information"
													key="collect_information"
												>
													<Paragraph>
														The primary objective of the Agari platform is to facilitate scientific
														research by providing a centralized access point to pathogen genomic
														data and relevant contextual metadata from Africa for researchers and
														interested parties.
													</Paragraph>
													<Paragraph>
														Although personal information is not mandatory for accessing the
														database, some essential features may require it. The personal
														information collected through web forms for account creation and service
														provision is voluntary and subject to the type of account and services
														used. The information collected will be protected through various
														physical and electronic security measures, including encryption and
														password protection.
													</Paragraph>
													<Paragraph>
														By providing your personal information, you are consenting to its use
														for specific purposes such as communicating with you about Agari
														services, troubleshooting website issues, and providing services like
														data submission and access. The primary objective of the Agari platform
														is to facilitate scientific research by providing a centralized access
														point to pathogen genomic data and relevant contextual metadata from
														Africa for researchers and interested parties.
													</Paragraph>
													<Paragraph>
														Although personal information is not mandatory for accessing the
														database, some essential features may require it. The personal
														information collected through web forms for account creation and service
														provision is voluntary and subject to the type of account and services
														used. The information collected will be protected through various
														physical and electronic security measures, including encryption and
														password protection.
													</Paragraph>
													<Paragraph>
														The Agari website and its affiliated servers collect certain analytics
														for web presentation, troubleshooting, and web functionality purposes,
														such as the internet protocol (IP) address of the device being used, the
														requested web pages, the referring web page, the browser employed, and
														the date and time of activities. This information is not linked with
														individual user identities and will not be used to identify any users in
														accordance with the Agari Privacy Policy.
													</Paragraph>
													<Paragraph>
														Third-party contractors or agents may be involved in maintaining and
														improving the functions of the Agari platform, particularly IT services.
														In these cases, personal information will be kept confidential and
														secure in line with the Protection of Personal Information (POPI) Act
														and the Agari Privacy Policy. Any third parties who access personal
														information are only authorized to use it for legitimate purposes
														permitted by the Agari portal.
													</Paragraph>
												</Panel>
												<Panel header="Cookies" key="cookies">
													<Paragraph>
														This website uses 'Cookies', which are digital data files that may
														gather information such as your email address, username, or track the
														pages viewed and documents downloaded. Agari may use 'cookies' to
														provide web content tailored to the user's preferences or to maintain
														user sessions when this feature is enabled. Users have the option to
														enable or disable cookies on this website, and no such data will be
														collected if the feature is deactivated. It should be noted that while
														disabling cookies will not limit access to the Agari portal, it may
														interfere with the normal functioning of certain features.
													</Paragraph>
												</Panel>
												<Panel header="Hyperlinks and other privacy policies" key="hyperlinks">
													<Paragraph>
														If you click on a hyperlink from the Agari portal leading to the
														website(s) of another entity, it is possible that said entity may
														maintain a privacy policy that differs from that of Agari. The Agari
														portal or technical team cannot be held accountable for the user’s
														privacy that may occur from the use of these offsite websites. In such
														cases we strongly recommend that you carefully review the privacy
														policies of these other entities.
													</Paragraph>
												</Panel>
												<Panel header="Contact Us" key="contact">
													<Paragraph>
														Your privacy, suggestions and concerns are important to us. We welcome
														you to contact us with your comments, questions, complaints, and/or
														suggestions by logging a ticket here.
													</Paragraph>
												</Panel>
											</Collapse>
										</div>
									</Col>
								</Row>
							</Card>
							<Card style={contactCard}>
								<b>Still have questions?</b>
								<Paragraph>
									Still cant find the answer you are looking for?
									<br />
									Please chat to our friendly team.
								</Paragraph>
								<div>
									<Button
										htmlType="button"
										type="primary"
										onClick={navigateToContactPage}
										size="large"
									>
										Get in touch
									</Button>
								</div>
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

export default FAQ;
