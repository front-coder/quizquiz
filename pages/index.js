import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
	width: 100%;
	max-width: 350px;
	padding-top: 45px;
	margin: auto 10%;
	@media screen and (max-width: 500px) {
		margin: auto;
		padding: 15px;
	}
`;

export default function Home() {
	const router = useRouter();
	const [name, setName] = useState('');

	return (
		<QuizBackground backgroundImage={db.bg}>
			<QuizContainer>
				<QuizLogo />
				<Widget>
					<Widget.Header>
						<h1>Texto do titulo</h1>
					</Widget.Header>
					<Widget.Content>
						<form onSubmit={function (e) {
							e.preventDefault();

							router.push(`quiz?name=${name}`);
						}}
						>
							<input
								onChange={function (e) {
									setName(e.target.value);
								}}
								placeholder="Diz ai seu nome para jogar"
							/>
							<button type="submit" disabled={name.length === 0}>
								{`Jogar ${name}`}
							</button>
						</form>
					</Widget.Content>
				</Widget>

				<Widget>
					<Widget.Content>
						<h1>Tityulo outro bloco</h1>
						<p>Texto do bloco </p>
					</Widget.Content>
				</Widget>
				<Footer />
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/front-coder" />
		</QuizBackground>
	);
}
