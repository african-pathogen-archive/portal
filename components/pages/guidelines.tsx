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

const descriptiveTextCard: React.CSSProperties = {
	width: '80%',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: '1rem',
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

const Guidelines: React.FC = () => {
	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<TopBar />
				<Layout>
					<Sider style={siderStyle} width={256}>
						<SideMenu selectedKey={'guides'} />
					</Sider>
					<Layout>
						<Content style={contentStyle}>
							<Title style={{ width: '80%' }}>Guidelines</Title>

							<Card style={descriptiveTextCard}>
								<Title>SARS-COV2 metadata</Title>
								<Paragraph>
									The Agari uses standardized metadata to ensure harmonization and interoperability.
									The metadata is derived from work done by the Public Health Alliance for Genomic
									Epidemiology (PHA4GE), a global coalition that is actively working to establish
									consensus standards, document and share best practices, improve the availability
									of critical bioinformatic tools and resources, and advocate for greater openness,
									interoperability, accessibility and reproducibility in public health microbial
									bioinformatics.
								</Paragraph>
								<Paragraph>
									The SARS-CoV-2 contextual data specification includes a metadata collection
									template, reference guides, controlled vocabulary, and mapping to existing
									standards.
								</Paragraph>
								<Paragraph>
									For more information and links to the SARS-COV2 contextual metadata template,
									developed by the PHA4GE consortium, please visit{' '}
									<a href="https://github.com/pha4ge/SARS-CoV-2-Contextual-Data-Specification">
										https://github.com/pha4ge/SARS-CoV-2-Contextual-Data-Specification
									</a>
								</Paragraph>
							</Card>

							<Card style={descriptiveTextCard}>
								<Title>File formats</Title>
								<Paragraph>
									The Agari currently allows for the uploading of FASTA files in combination with
									the associated metadata file, in .tsv format. Note that both files must be
									uploaded together for each submission.
								</Paragraph>
								<Paragraph>
									Tab-separated values (TSV) is a simple, text-based file format for storing tabular
									data. Records are separated by newlines, and values within a record are separated
									by tab characters. The TSV format is thus a delimiter-separated values format,
									similar to comma-separated values.
								</Paragraph>
								<Paragraph>Consensus Fasta sequence</Paragraph>
								<Paragraph>
									Besides the vcf file, a consensus file is also generated which represents the
									nucleotide present at each position of your sample’s genome. That is, a blueprint
									copy of your sample’s entire genome. However, even this file is QC’d to show only
									results where the coverage is more than twenty times.
								</Paragraph>
								<Paragraph>
									However, you may want to tailor your parameters so that your files are fit for
									downstream analyses. For example, recovering a complete genome is important for
									phylogenetic analysis. Nextstrain will only accept genomes where more than 92% of
									your genome is covered and if it has at least 27,510 informative bases (A,C,T,G).
									So, you may want to make sure there are not many stretches of Ns in the consensus
									genome.
								</Paragraph>
								<Paragraph>
									For more guidance on FASTA file formats{' '}
									<a href="https://www.ncbi.nlm.nih.gov/genbank/fastaformat/" target="_blank">
										https://www.ncbi.nlm.nih.gov/genbank/fastaformat/
									</a>
								</Paragraph>
							</Card>
							<Card style={descriptiveTextCard}>
								<Title>Data Submitters Guidelines</Title>
								Nothing yet, but stay tuned ...
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

export default Guidelines;
