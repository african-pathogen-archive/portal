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

import { url } from 'inspector';

import { ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Layout, Result, Button, Image } from 'antd';

import { INTERNAL_PATHS } from '@/global/utils/constants';

import NavBar from './NavBar';
import PageHead from './Head';
// import ErrorNotification from './ErrorNotification';
import TopBar from './TopBar';
import PartnerLogosBanner from './pages/PartnerLogosBanner';

const { Header, Footer, Sider, Content } = Layout;

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#ffffff',
};

const PageLayout = ({
	children,
	subtitle,
}: {
	children: ReactNode;
	subtitle?: string;
}): ReactElement => {
	return (
		<>
			<PageHead subtitle={subtitle}></PageHead>
			<div
				css={(theme) => css`
					display: grid;
					grid-template-rows: ${theme.dimensions.navbar.height}px 1fr ${theme.dimensions.footer
							.height}px;
					height: 95%;
					${theme.typography.regular}
					color: ${theme.colors.black};
					background-color: #f5f5f5;
				`}
			>
				<TopBar />
				{children}
				<Footer style={footerStyle}>
					<div>
						<PartnerLogosBanner />
					</div>
				</Footer>
			</div>
		</>
	);
};

export const ErrorPageLayout = ({
	children,
	subtitle,
	title,
	status,
	iconImageUrl,
}: {
	children: ReactNode;
	subtitle: string;
	title: string;
	status: string;
	iconImageUrl: string;
}): ReactElement => {
	return (
		<PageLayout subtitle={subtitle}>
			<Result
				status={'error'}
				title={title}
				subTitle={children}
				extra={
					<Button href={INTERNAL_PATHS.APA} size="large" type="primary">
						Back Home
					</Button>
				}
				icon={<Image preview={false} width={200} src={iconImageUrl} />}
			/>
		</PageLayout>
	);
};
export default PageLayout;
