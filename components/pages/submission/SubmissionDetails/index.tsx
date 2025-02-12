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

import { ReactElement, useEffect, useState, useReducer } from 'react';
import { css, useTheme } from '@emotion/react';

import useAuthContext from '../../../../global/hooks/useAuthContext';
import useMuseData, { UploadDataType } from '../../../../global/hooks/useMuseData';
import GenericTable from '../../../GenericTable';
import { LoaderWrapper } from '../../../Loader';
import defaultTheme from '../../../theme';

import columns from './columns';
import Overview from './Overview';
import { SubmissionDetailsProps } from './types';
import { uploadsStatusDictionary, uploadsStatusReducer } from './uploadStatusHelpers';

const SubmissionDetails = ({ ID }: SubmissionDetailsProps): ReactElement => {
	const theme: typeof defaultTheme = useTheme();
	const [totalUploads, setTotalUploads] = useState(0);
	const [dataIsPending, setDataIsPending] = useState(false);
	const [submissionDetails, submissionDetailsDispatch] = useReducer(
		uploadsStatusReducer,
		uploadsStatusDictionary,
	);

	const { token } = useAuthContext();
	const { awaitingResponse, fetchMuseData, fetchEventStream } = useMuseData('SubmissionsDetails');

	// gets the initial status for all the uploads
	useEffect(() => {
		if (token && totalUploads === 0) {
			fetchMuseData(
				`uploads?${new URLSearchParams({
					page: '0',
					size: '100000',
					submissionId: ID,
				})}`,
			).then(({ data: uploadsData, ...response }) => {
				if (Array.isArray(uploadsData) && uploadsData.length > 0) {
					submissionDetailsDispatch({
						type: 'initial details',
						uploads: uploadsData,
					});

					setDataIsPending(
						uploadsData.some(({ status }: UploadDataType) =>
							['QUEUED', 'PROCESSING'].includes(status),
						),
					);
				} else {
					// handle rare edge case
					// TODO: create dev mode
					console.error('Unexpected response getting upload details', response, uploadsData);
				}
			});
		}
	}, [token]);

	// tries to get status updates, if any are available
	useEffect(() => {
		let eStream: EventSource | null;

		if (dataIsPending) {
			eStream = fetchEventStream('uploads-stream', ID, (messageData: UploadDataType) => {
				submissionDetailsDispatch({
					type: 'new details',
					upload: messageData,
				});
			});
		}

		// close any pending streams
		return () => eStream?.close?.();
	}, [dataIsPending]);

	return (
		<article
			css={css`
				width: 100%;
			`}
		>
			<Overview ID={ID} setTotalUploads={setTotalUploads} />

			<LoaderWrapper loading={awaitingResponse} size="10px">
				{totalUploads > 0 && (
					<>
						<p
							css={css`
								display: block;
								font-size: 13px;
								margin: 10px 0;
							`}
						>
							1 - {totalUploads} of {totalUploads} Viral Genomes
						</p>
						<GenericTable
							columns={columns}
							data={Object.values(submissionDetails).flat()}
							sortable={{
								defaultSortBy: [
									{
										id: 'status',
									},
								],
							}}
							style={css`
								&.sortable {
									th.asc {
										border-top-color: ${theme.colors.accent};
									}

									th.desc {
										border-bottom-color: ${theme.colors.accent};
									}
								}

								td {
									vertical-align: top;

									&:last-of-type {
										svg {
											margin-top: 2px;
											position: absolute;
										}
									}

									&:not(:last-of-type) {
										max-width: 250px;
										white-space: normal;
										width: 250px;
									}
								}
							`}
						/>
					</>
				)}
			</LoaderWrapper>
		</article>
	);
};

export default SubmissionDetails;
