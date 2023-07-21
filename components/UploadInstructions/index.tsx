import React, { CSSProperties } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import Link from 'next/link';

const text = (
	<div>
		<h2>To format your pathogen sequence metadata:</h2>

		<ol>
			<li>
				Download the{' '}
				<Link
					href="https://github.com/cancogen-virus-seq/metadata-schemas/blob/main/virusseq_metadata_template.tsv"
					rel="noopener noreferrer"
					target="_blank"
				>
					metadata TSV Template
				</Link>{' '}
				for the pathogen sequence metadata and populate it with accepted values for each field. A
				reference of the accepted values can be found{' '}
				<Link
					href="https://github.com/Public-Health-Bioinformatics/DataHarmonizer/blob/master/template/canada_covid19/SOP.pdf"
					rel="noopener noreferrer"
					target="_blank"
				>
					in this resource
				</Link>
				.
			</li>
			<li>
				<Link
					href="https://github.com/Public-Health-Bioinformatics/DataHarmonizer"
					rel="noopener noreferrer"
					target="_blank"
				>
					DataHarmonizer
				</Link>{' '}
				is a tool that can be used to help validate the accepted values for each field in your
				metadata TSV locally before submitting. Download the tool and follow the instructions on the
				Github repository to pre-validate each field in your metadata before submission.
			</li>
			<li>If you are using Excel or Google sheets, make sure all characters are UTF-8 encoded.</li>
		</ol>

		<h2>To format your pathogen sequence files:</h2>

		<ol>
			<li>
				Make sure they have the file extension <span className="code">.fasta</span>,{' '}
				<span className="code">.fa</span>, or zipped fastas in <span className="code">.gz</span>{' '}
				format.
			</li>
			<li>
				Each sequence must be preceded be a description line, beginning with a &gt;. The description
				line should include &gt;hCoV-19/<span className="code">country</span>/
				<span className="code">identifier</span>/<span className="code">year</span> sequenced. This
				identifier must match exactly the "fasta header name" column in the TSV file.
			</li>
		</ol>
	</div>
);

const getItems = (panelStyle: CSSProperties) => [
	{
		key: '2',
		label: <strong style={{ fontSize: '16px' }}>How to submit your data</strong>,
		children: (
			<p>
				Pathogen metadata is submitted as a <span className="code">.tsv</span> file. Pathogen genome
				data must be submitted as a <span className="code">.fasta</span> file. Up to 5000 samples
				can be submitted in a single submission, but note that the larger the file the longer the
				submission will take. FASTA files are accepted individually, or as a single concatenated
				FASTA containing all samples in one file.
			</p>
		),
		style: panelStyle,
		extra: null,
	},
	{
		key: '3',
		label: (
			<strong style={{ fontSize: '16px' }}>How to format your pathogen sequence metadata</strong>
		),
		children: <p>{text}</p>,
		style: panelStyle,
		extra: null,
	},
];

const UploadInstructions: React.FC = () => {
	const { token } = theme.useToken();

	const panelStyle = {
		marginBottom: 24,
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: 'none',
	};

	return (
		<Collapse
			bordered={false}
			defaultActiveKey={['1']}
			expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
			style={{ background: token.colorBgContainer, width: '100%' }}
		>
			{getItems(panelStyle)?.map((item) => (
				<Collapse.Panel header={item.label} key={item.key} style={item.style} extra={item.extra}>
					{item.children}
				</Collapse.Panel>
			))}
		</Collapse>
	);
};

export default UploadInstructions;
