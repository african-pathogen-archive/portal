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

import React from 'react';
import { Layout, Space, Button } from 'antd';

import SideMenu from '../../SideMenu';
import { InternalLink } from '@/components/Link';
import { css } from '@emotion/react';
import PathogenTable from '@/components/PathogenTable';

const { Header, Footer, Sider, Content } = Layout;

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
};

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#F5F5F5',
	display: 'flex',
	justifyContent: 'center',
	alignContent: 'center',
	justifyItems: 'center',
	paddingTop: '100px',
};

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#ffffff',
};

const App: React.FC = () => (
	<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
		<Layout>
			<Header style={headerStyle}>
			<div
				css={css`
				display: flex;
				align-items: center;
				margin-left: 50px;
				margin-right: 70px;
				padding-top: 25px;
				cursor: pointer;
				`}
      		>
        <InternalLink path={''}>
          <a
            css={css`
              align-items: left;
              text-decoration: none;
            `}
          >
            <img src="/images/new-navbar-logo.png" alt="APA logo" width="182" />
          </a>
        </InternalLink>
      </div>
	  <div>
	  	<Button>Login</Button>
		  <Button type="primary">Register</Button>
	  </div>
	  
			</Header>
			<Layout>
				<Sider style={siderStyle}>
					<SideMenu/>
				</Sider>
				<Layout>
					<Content style={contentStyle}>
						<PathogenTable />
					</Content>
					<Footer style={footerStyle}>Footer</Footer>
				</Layout>
			</Layout>
    	</Layout>
	</Space>
);

export default App;
