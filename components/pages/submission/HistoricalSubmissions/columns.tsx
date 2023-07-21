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

import { ReactElement } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { format } from 'date-fns';
import { css } from '@emotion/react';


import getInternalLink from '../../../../global/utils/getInternalLink';
import { numberSort, uuidSort } from '../../../GenericTable/helpers';
import StyledLink from '../../../Link';
import Link from 'next/link';

const columnData:any[] = [
	{
		key: 'submissionId',
        dataIndex: 'submissionId',
        render: (_:any, { submissionId }:any) => (
            <Link href={getInternalLink({ path: `/submission/${submissionId}` })}>
                {submissionId}
            </Link>
        ),
		title: 'Submission ID',
		sortType: uuidSort,
	},
	{
		key: 'studyIds',
        dataIndex: 'studyIds',
        render: (_:any, { studyIds }:any) => (
            <>
                {studyIds?.map((id:string) => (<li key={id}>{id}</li>))}
            </>
        ),
        title: 'Study IDs',
	},
	{
		key: 'createdAt',
        dataIndex: 'createdAt',
		Cell: ({ value }: { value: unknown }) =>
			format(new Date(value as number), 'yyyy-MM-dd') as unknown as ReactElement,
        render: (_:any, { createdAt }:any) => (
            <>
                {format(new Date(createdAt), 'yyyy-MM-dd')}
            </>
        ),
		title: 'Submission Date',
		sortType: numberSort,
	},
	{
		key: 'totalRecords',
        dataIndex: 'originalFileNames',
		title: '# Viral Genomes',
        render: (_:any, { originalFileNames }:any) => (
			<>
				{originalFileNames?.length}
			</>
		),
		sortType: numberSort,
	},
];

export default columnData;
