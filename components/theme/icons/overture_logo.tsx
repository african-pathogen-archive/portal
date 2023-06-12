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
import { css } from '@emotion/react';

import { IconProps } from './types';

const OvertureLogo = ({ height, width, style }: IconProps): ReactElement => {
	return (
		<svg
			css={css`
				${style};
				height: ${height};
				width: ${width};
			`}
			width={width}
			height={height}
			viewBox="0 0 55 55"
		>
			<defs>
				<path id="prefix__a" d="M0 0.103L53.955 0.103 53.955 54.495 0 54.495z" />
			</defs>
			<g fill="none" fillRule="evenodd">
				<path
					fill="#D9DE3A"
					d="M23.133 12.47c2.813.76 5.295 2.14 7.343 3.95.732.605 1.426 1.26 2.063 1.975l-.006.005c.204-.034.41-.058.616-.086.104-.014.209-.02.313-.033.46-.052.921-.094 1.385-.11.207-.01.414-.004.62-.005.356 0 .712 0 1.07.02.348.018.694.057 1.041.097.207.023.413.04.62.072.728.106 1.454.241 2.175.435 3.491.943 6.553 2.853 8.903 5.494.08-.252.18-.495.25-.754 1.24-4.607.615-9.423-1.763-13.56-2.377-4.136-6.222-7.099-10.826-8.341-1.546-.418-3.118-.624-4.677-.624-3.084 0-6.127.806-8.873 2.386-3.448 1.986-6.064 5.003-7.563 8.622 2.374-.334 4.852-.207 7.31.456"
				/>
				<path
					fill="#B74A89"
					d="M13.706 47.451c2.512.68 5.046.783 7.462.394-.535-.686-1.04-1.398-1.481-2.165-2.444-4.252-3.088-9.203-1.811-13.94.1-.372.22-.737.344-1.098-3.698-4.443-5.266-10.552-3.65-16.546.132-.49.294-.967.464-1.44-4.013.767-7.659 2.902-10.303 6.022-.154.187-.317.364-.465.558-.062.08-.119.166-.18.248-.26.345-.497.708-.732 1.072-.694 1.097-1.281 2.285-1.738 3.558-1.671 4.67-1.306 9.573.63 13.743.107.225.225.444.34.664.12.23.237.461.365.686 2.285 3.916 6.045 6.973 10.755 8.244"
				/>
				<path
					fill="#AD404E"
					d="M15.052 14.226c-1.544 5.73-.093 11.563 3.371 15.865.547-1.472 1.266-2.855 2.15-4.12.224-.33.474-.635.717-.948.086-.107.169-.216.257-.321 2.297-2.824 5.336-4.877 8.726-5.914-1.67-2.027-3.797-3.716-6.246-4.84-1.98-.919-4.155-1.465-6.376-1.6-.696.029-1.383.111-2.064.219-.203.54-.383 1.094-.535 1.66"
				/>
				<path
					fill="#67C2E8"
					d="M51.07 27.614c-.472-.82-1.017-1.58-1.598-2.303-2.32 6.222-7.772 10.551-14.035 11.653l-.038.008c-.49 1.24-1.098 2.406-1.821 3.48-.042.063-.085.127-.129.19-.21.299-.426.591-.653.875-.182.233-.373.458-.567.681-.119.135-.234.273-.356.405-2.601 2.83-6.039 4.78-9.803 5.567 2.212 2.582 5.109 4.473 8.423 5.462.213.06.426.13.64.182.3.076.601.14.903.198.59.112 1.182.216 1.773.272.274.026.548.063.822.076.138.008.277.003.416.008.668.021 1.332-.02 1.994-.072.374-.032.747-.076 1.117-.132.252-.036.502-.085.751-.131 1.435-.275 2.827-.717 4.146-1.323.195-.09.389-.185.581-.283 1.4-.703 2.716-1.577 3.898-2.627.114-.102.22-.214.331-.32.288-.268.573-.541.843-.83.352-.38.69-.773 1.006-1.182.011-.016.026-.03.038-.046 1.41-1.834 2.459-3.945 3.08-6.247 1.24-4.608.615-9.424-1.762-13.56M32.493 18.432c.22-.037.436-.088.656-.118-.206.027-.412.052-.616.087l-.04.031z"
				/>
				<path
					fill="#5DB9AE"
					d="M44.047 31.012c1.363-1.048 2.59-2.28 3.625-3.675.456-.616.865-1.268 1.238-1.944.07-.181.12-.376.185-.56-2.309-2.683-5.36-4.618-8.852-5.56-1.547-.418-3.117-.624-4.677-.624-.915 0-1.822.094-2.723.235 1.136 1.47 2.044 3.102 2.695 4.841.09.233.177.466.256.704.02.06.038.122.057.183.906 2.773 1.147 5.773.615 8.767-.056.326-.118.651-.191.977-.029.123-.057.245-.089.368l-.004.017c1.414-.316 2.801-.794 4.127-1.423 1.318-.625 2.574-1.397 3.738-2.306"
				/>
				<path
					fill="#5391C8"
					d="M32.284 37.246c-1.577 0-3.18-.205-4.774-.636-2.98-.804-5.584-2.309-7.7-4.28-.347 1.198-.62 2.423-.738 3.677-.16 1.71-.092 3.443.181 5.164.263 1.718.754 3.402 1.54 4.968.275.551.603 1.077.943 1.594 3.801-.741 7.28-2.697 9.876-5.568 1.335-1.478 2.429-3.2 3.221-5.112-.84.12-1.69.193-2.55.193"
				/>
				<path
					fill="#67C2E8"
					d="M35.85 24.612c.885 2.774 1.123 5.774.615 8.767.533-2.994.292-5.994-.614-8.767"
				/>
				<g transform="translate(0 .401)">
					<mask id="prefix__b" fill="#fff">
						<use xlinkHref="#prefix__a" />
					</mask>
					<path
						fill="#FFF"
						d="M49.714 47.067c-.317.41-.654.802-1.006 1.182-.27.288-.555.561-.843.83-.111.106-.217.217-.331.32-.925.83-1.936 1.575-3.039 2.21-.278.16-.574.273-.859.417-.192.098-.386.193-.581.283-1.336.617-2.723 1.056-4.146 1.323-.25.047-.499.095-.75.131-.373.053-.744.103-1.118.132-.662.053-1.326.093-1.994.071-.138-.004-.278 0-.417-.007-.273-.013-.547-.05-.821-.076-.591-.056-1.182-.16-1.773-.271-.302-.06-.603-.123-.904-.2-.213-.052-.426-.12-.64-.181-3.313-.99-6.21-2.88-8.421-5.462 3.763-.787 7.201-2.737 9.802-5.568.122-.13.237-.27.356-.404.194-.223.384-.448.567-.681.227-.284.444-.576.653-.875.044-.063.087-.127.129-.19.723-1.073 1.33-2.24 1.82-3.48l.04-.007C41.7 35.46 47.151 31.132 49.471 24.91c.581.723 1.126 1.483 1.598 2.303 2.377 4.137 3.003 8.953 1.761 13.56-.62 2.302-1.67 4.414-3.08 6.248-.011.016-.026.03-.037.046zM2.587 38.12c-.116-.22-.234-.44-.341-.664-1.765-3.71-2.28-8.038-1.129-12.307.491-1.822 1.265-3.488 2.237-4.994.236-.365.473-.727.732-1.072.061-.082.118-.168.18-.248.148-.194.311-.371.465-.558 2.644-3.12 6.29-5.255 10.303-6.022-.17.473-.332.95-.464 1.44-1.616 5.994-.048 12.103 3.65 16.545-.124.362-.244.727-.344 1.1-1.277 4.736-.633 9.686 1.81 13.939.441.767.948 1.48 1.482 2.165-2.416.389-4.95.285-7.462-.394-4.71-1.271-8.47-4.328-10.755-8.245-.128-.224-.245-.455-.364-.685zm19.149 9.212c-.34-.518-.667-1.043-.942-1.595-.787-1.565-1.278-3.249-1.541-4.967-.273-1.72-.342-3.455-.181-5.164.117-1.255.391-2.48.739-3.678 2.115 1.972 4.719 3.477 7.699 4.28 1.594.431 3.196.637 4.774.637.86 0 1.71-.074 2.55-.193-.793 1.912-1.887 3.634-3.222 5.111-2.595 2.872-6.075 4.828-9.876 5.569zm14.45-13.01c.031-.122.06-.244.09-.367.072-.326.134-.651.19-.977.506-2.993.269-5.993-.615-8.767-.02-.06-.036-.123-.057-.183-.08-.238-.165-.471-.255-.704-.652-1.74-1.56-3.372-2.696-4.841.901-.142 1.808-.235 2.722-.235 1.56 0 3.131.206 4.678.624 3.492.942 6.543 2.877 8.852 5.56-.066.184-.115.379-.185.56-.373.676-.782 1.328-1.238 1.944-1.035 1.394-2.262 2.627-3.625 3.675-1.164.909-2.42 1.681-3.738 2.306-1.326.629-2.713 1.106-4.127 1.423l.004-.017zm-12.16-20.775c2.45 1.124 4.578 2.813 6.247 4.84-3.39 1.037-6.43 3.09-8.726 5.914-.089.105-.17.214-.257.321-.243.313-.493.617-.716.948-.885 1.265-1.604 2.648-2.151 4.12-3.464-4.303-4.915-10.135-3.371-15.865.152-.565.332-1.118.535-1.66.681-.107 1.368-.19 2.064-.218 2.22.135 4.395.681 6.376 1.6zM23.388 2.99C26.132 1.41 29.176.604 32.26.604c1.56 0 3.13.206 4.677.623 4.604 1.243 8.45 4.206 10.826 8.342 2.378 4.137 3.003 8.953 1.762 13.56-.07.259-.169.502-.25.754-2.349-2.642-5.41-4.552-8.902-5.494-.721-.194-1.447-.33-2.175-.435-.207-.032-.413-.049-.62-.073-.347-.039-.693-.078-1.04-.096-.358-.02-.715-.02-1.07-.02-.208.001-.414-.004-.62.004-.465.017-.926.059-1.386.11-.104.013-.209.02-.313.034-.22.03-.437.08-.656.118l.04-.032.006-.005c-.638-.714-1.332-1.37-2.062-1.974-2.049-1.812-4.531-3.192-7.344-3.952-2.457-.663-4.935-.79-7.309-.457 1.499-3.618 4.115-6.635 7.563-8.621zm28.116 23.974c-.54-.936-1.162-1.804-1.839-2.617.121-.359.244-.717.343-1.088 1.276-4.736.634-9.687-1.81-13.94-2.444-4.251-6.398-7.297-11.13-8.574-4.732-1.278-9.679-.634-13.929 1.811-3.642 2.098-6.39 5.31-7.906 9.167C8.418 12.913 2.552 17.907.635 25.02-2 34.797 3.805 44.896 13.575 47.533c1.595.43 3.197.636 4.774.636 1.072 0 2.13-.101 3.167-.284 2.398 2.885 5.605 4.972 9.3 5.968 1.59.43 3.205.643 4.809.643 3.17 0 6.298-.83 9.12-2.454 4.25-2.446 7.292-6.401 8.569-11.138 1.276-4.737.633-9.688-1.811-13.94z"
						mask="url(#prefix__b)"
					/>
				</g>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M34.63 54.36c.139.008.278.003.417.008M47.534 49.8c.114-.102.22-.214.331-.32M48.708 48.65c.352-.38.689-.773 1.006-1.182M2.587 38.521c-.116-.22-.234-.439-.34-.664M4.086 19.484c.062-.081.118-.168.18-.248"
				/>
			</g>
		</svg>
	);
};

export default OvertureLogo;
