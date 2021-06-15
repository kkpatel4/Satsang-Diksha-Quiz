import React, { useState, useMemo } from 'react';

export const bank = [
	{
		questionText: 'Swaminarayan Bhagwan etle ke sākshāt Akshar-Purushottam Maharaj sarvane param ____, ____ ane ____ arpe.',
		shloka: 1,
		answerOptions: [
			{ answerText: 'shanti, anand, sukh', isCorrect: true },
			{ answerText: 'shanti, anand, dukh', isCorrect: false },
			{ answerText: 'anand, shanti, sukh', isCorrect: false },
			{ answerText: 'bhakti, dharma, maya', isCorrect: false },
		]
	},
	{
		questionText: 'Ā deh _____ sādhan chhe, keval _____ sādhan nathi.',
		shloka: 2,
		answerOptions: [
			{ answerText: 'muktinu, bhognu', isCorrect: true },
			{ answerText: 'bhognu, muktinu', isCorrect: false },
			{ answerText: 'mokshanu, bhognu', isCorrect: false },
			{ answerText: 'muktinu, dukhnu', isCorrect: false },
		]
	},
	{
		questionText: '_____ ane _____ evo ā deh vāramvār malto nathi',
		shloka: 2,
		answerOptions: [
			{ answerText: 'Durlabh, nashvant', isCorrect: true },
			{ answerText: 'Nashvant, durlabh', isCorrect: false },
			{ answerText: 'Mayik, nashvant', isCorrect: false },
			{ answerText: 'Laukik, durlabh', isCorrect: false },
		]
	},
	{
		questionText: '_____ vyavahār to dehnā _____ māte chhe.',
		shloka: 3,
		answerOptions: [
			{ answerText: 'Laukik, nirvah', isCorrect: true },
			{ answerText: 'Alaukik, nirvah', isCorrect: false },
			{ answerText: 'Laukik, dukh', isCorrect: false },
			{ answerText: 'Laukik, sukh', isCorrect: false },
		]
	},
	{
		questionText: 'Te ā manushya janmanu param _____ nathi.',
		shloka: 3,
		answerOptions: [
			{ answerText: 'lakshya', isCorrect: true },
			{ answerText: 'sāchan', isCorrect: false },
			{ answerText: 'dhyey', isCorrect: false },
			{ answerText: 'ānand', isCorrect: false },
		]
	},
	{
		questionText: 'Sarva _____ tālvā, _____ pāmvā ane Bhagwanni _____ karvā ā deh malyo chhe.',
		shloka: 4,
		answerOptions: [
			{ answerText: 'doshone, brahma-sthitine, bhakti', isCorrect: true },
			{ answerText: 'swabhāvone, brahma-sthitine, dharma', isCorrect: false },
			{ answerText: 'doshone, brahma-sthitine, dharma', isCorrect: false },
			{ answerText: 'swabhāvone, moksha, dharma', isCorrect: false },
		]
	},
	{
		questionText: 'Ā badhu satsang karvāthi avashya _____ thāy chhe.',
		shloka: 5,
		answerOptions: [
			{ answerText: 'prapta', isCorrect: true },
			{ answerText: 'sukh', isCorrect: false },
			{ answerText: 'dukh', isCorrect: false },
			{ answerText: 'mukti', isCorrect: false },
		]
	},
	{
		questionText: 'Āthi _____ sadāy satsang karvo.',
		shloka: 5,
		answerOptions: [
			{ answerText: 'mumukshuoe', isCorrect: true },
			{ answerText: 'satsangie', isCorrect: false },
			{ answerText: 'bhaktoe', isCorrect: false },
			{ answerText: 'sadhuoe', isCorrect: false },
		]
	},
	{
		questionText: 'Tethi Parabrahma Swaminarayane ā _____ sākshāt avtarine ā divya _____ sthāpnā kari.',
		shloka: 6,
		answerOptions: [
			{ answerText: 'lokmā, satsangni', isCorrect: true },
			{ answerText: 'deshmā, satsangni', isCorrect: false },
			{ answerText: 'deshmā, mokshani', isCorrect: false },
			{ answerText: 'lokmā, mokshani', isCorrect: false },
		]
	},
	{
		questionText: 'Ā satsangnu _____ mumukshuone thāy evā shubh āshaythi ‘Satsang Diksha’ e nāmnu shāstra _____ āve chhe',
		shloka: 7,
		answerOptions: [
			{ answerText: 'jnān, rachvāmā', isCorrect: true },
			{ answerText: 'gnān, rachvāmā', isCorrect: false },
			{ answerText: 'jnān, vanchvāma', isCorrect: false },
			{ answerText: 'gnān, lakhvāmā', isCorrect: false },
		]
	},
	{
		questionText: 'Satya evā _____ sang karvo, satya evā _____ sang karvo, satya evā ____ sang karvo ane sach-chhāstrano sang karvo e satsangnu sāchu lakshan jānvu',
		shloka: 8,
		answerOptions: [
			{ answerText: 'ātmāno, Paramatmano, guruno', isCorrect: true },
			{ answerText: 'guruno, Paramatmano, ātmāno', isCorrect: false },
			{ answerText: 'ātmāno, guruno, Paramatmano', isCorrect: false },
			{ answerText: 'guruno, ātmāno, Paramatmano', isCorrect: false },
		]
	},
	{
		questionText: 'Āvo divya satsang karnārā _____ sukhi thāy chhe.',
		shloka: 9,
		answerOptions: [
			{ answerText: 'manushya', isCorrect: true },
			{ answerText: 'sadhu', isCorrect: false },
			{ answerText: 'jiva', isCorrect: false },
			{ answerText: 'Bhagwan', isCorrect: false },
		],
	},
	{
		questionText: 'Dikshā etle dradh ____, shraddhāe sahit evo achal ____, samyak samarpan, priti-purvak _____, vrat ane dradh āshro.',
		shloka: 10,
		answerOptions: [
			{ answerText: 'sankalp, nishchay, nishthā', isCorrect: true },
			{ answerText: 'niyam, nishchay, paksha', isCorrect: false },
			{ answerText: 'sevabhav, nishchay, paksha', isCorrect: false },
			{ answerText: 'sankalp, nishthā, niyam', isCorrect: false },
		],
	},
	{
		questionText: 'Ā shāstramā Parabrahma Sahajanand Paramatmae darshāvel _____ tathā _____ paddhatine spasht rite janāvi chhe.',
		shloka: 11,
		answerOptions: [
			{ answerText: 'āgnā, upāsanāni', isCorrect: true },
			{ answerText: 'upāsanāni, āgnā', isCorrect: false },
			{ answerText: 'niyam, āgnā', isCorrect: false },
			{ answerText: 'niyam, upāsanāni', isCorrect: false },
		],
	},
	{
		questionText: 'Purusho tathā strio sarve _____ adhikāri chhe, sarve _____ adhikāri chhe ane sarve _____ adhikāri chhe.',
		shloka: 12,
		answerOptions: [
			{ answerText: 'satsangnā, sukhnā, brahmavidyānā', isCorrect: true },
			{ answerText: 'sukhnā, satsangnā, brahmavidyānā', isCorrect: false },
			{ answerText: 'brahmavidyānā, sukhnā, satsangnā', isCorrect: false },
			{ answerText: 'satsangnā, brahmavidyānā, sukhnā', isCorrect: false },
		],
	},
	{
		questionText: 'Satsangmā ling-bhedthi _____-_______ na ja samajvu.',
		shloka: 13,
		answerOptions: [
			{ answerText: 'nyun-ādhikpanu', isCorrect: true },
			{ answerText: 'nathi-ādhikpanu', isCorrect: false },
			{ answerText: 'nyun-avgunpanu', isCorrect: false },
			{ answerText: 'nyun-ādhikta', isCorrect: false },
		],
	},
	{
		questionText: 'Badhā pot-potāni _____ rahi bhakti vade _____ pāmi shake chhe.',
		shloka: 13,
		answerOptions: [
			{ answerText: 'maryādāmā, muktine', isCorrect: true },
			{ answerText: 'gharmā, muktine', isCorrect: false },
			{ answerText: 'maryādāmā, mokshane', isCorrect: false },
			{ answerText: 'gharmā, mokshane', isCorrect: false },
		],
	},
	{
		questionText: 'Sarva _____ sarva strio tathā sarva purusho sadāy satsang, _____ ane _____ adhikāri chhe.',
		shloka: 14,
		answerOptions: [
			{ answerText: 'varnanā, brahmavidyā, mokshanā', isCorrect: true },
			{ answerText: 'manushya, brahmavidyā, muktinā', isCorrect: false },
			{ answerText: 'manushya, brahmavidyā, sukhnā', isCorrect: false },
			{ answerText: 'manushya, jnān, muktinā', isCorrect: false },
		],
	},
	{
		questionText: 'Varnanā ādhāre kyārey nyun-_____ na karvo.',
		shloka: 15,
		answerOptions: [
			{ answerText: 'ādhikbhāv', isCorrect: true },
			{ answerText: 'manushyabhāv', isCorrect: false },
			{ answerText: 'gunbhāv', isCorrect: false },
			{ answerText: 'sevabhāv', isCorrect: false },
		],
	},
	{
		questionText: 'Sarva janoe potānā _____ mān tyajine paraspar _____ karvi.',
		shloka: 15,
		answerOptions: [
			{ answerText: 'varnanu, sevā', isCorrect: true },
			{ answerText: 'lingnu, bhakti', isCorrect: false },
			{ answerText: 'varnanu, bhakti', isCorrect: false },
			{ answerText: 'mannu, dharma', isCorrect: false },
		],
	},
	{
		questionText: 'Jātie karine koi _____ nathi ane koi _____ pan nathi.',
		shloka: 16,
		answerOptions: [
			{ answerText: 'mahān, nyun', isCorrect: true },
			{ answerText: 'saru, nyun', isCorrect: false },
			{ answerText: 'sukh, mahān', isCorrect: false },
			{ answerText: 'nyun, mahān', isCorrect: false },
		],
	},
	{
		questionText: 'Tethi nātjātne laine _____ na karvo ne _____ satsang karvo.',
		shloka: 16,
		answerOptions: [
			{ answerText: 'klesh, sukhe', isCorrect: true },
			{ answerText: 'klesh, dukhe', isCorrect: false },
			{ answerText: 'abhāv, sukhe', isCorrect: false },
			{ answerText: 'abhāv, dukhe', isCorrect: false },
		],
	},
	{
		questionText: '_____ tathā _____ sarve mokshanā adhikāri chhe.',
		shloka: 17,
		answerOptions: [
			{ answerText: 'Gruhastha, tyāgi', isCorrect: true },
			{ answerText: 'Tyāgi, gruhastha', isCorrect: false },
			{ answerText: 'Gruhastha, sadhu', isCorrect: false },
			{ answerText: 'Sadhu, gruhastha', isCorrect: false },
		],
	},
	{
		questionText: 'Temā nyun-ādhikbhāvnathi, kāran ke gruhastha ke tyāgi _____ Bhagwannā _____ chhe.',
		shloka: 17,
		answerOptions: [
			{ answerText: 'badhā, bhakto', isCorrect: true },
			{ answerText: 'sarve, bhakto', isCorrect: false },
			{ answerText: 'badhā, haribhakto', isCorrect: false },
			{ answerText: 'sarve, haribhakto', isCorrect: false },
		],
	},
	{
		questionText: 'Swaminarayan Bhagwanne vishe _____, dradh ane _____ bhakti māte āshraydikshā _____ grahan kari satsang prāpta karvo.',
		shloka: 18,
		answerOptions: [
			{ answerText: 'ananya, param, mantra', isCorrect: true },
			{ answerText: 'param, ananya, shloka', isCorrect: false },
			{ answerText: 'ananya, param, shloka', isCorrect: false },
			{ answerText: 'param, dharma, mantra', isCorrect: false },
		],
	},
	{
		questionText: 'Āshray-dikshā mantra ā pramāne chhe: Dhanyo’smi purna-kāmo’smi _____ nirbhayah sukhi; _____-guru-yogena _____-āshrayat.',
		shloka: 19,
		answerOptions: [
			{ answerText: 'nishpāpo, Akshara, Swaminārāyan', isCorrect: true },
			{ answerText: 'nishtha, Gunatit, Parabrahma', isCorrect: false },
			{ answerText: 'nishpāpo, Akshar, Paramatma', isCorrect: false },
			{ answerText: 'nishtha, Brahma, Swaminārāyan', isCorrect: false },
		],
	},
	{
		questionText: 'Mumukshu potānā _____ mukti māte Sahajanand Shri Hari tathā Aksharbrahma-swarup Gunatit guruno _____ karine _____ kare.',
		shloka: 20,
		answerOptions: [
			{ answerText: 'ātmāni, pritie, āshro', isCorrect: true },
			{ answerText: 'paramatmani, pritie, āshro', isCorrect: false },
			{ answerText: 'ātmāni, pritie, nishchay', isCorrect: false },
			{ answerText: 'paramatmani, āshro, pritie', isCorrect: false },
		],
	},
	{
		questionText: 'Satsangno āshro kari sadāy _____ vishe kāshthni bevdi _____ dhāran karvi tathā satsangnā _____ dhāran karvā.',
		shloka: 21,
		answerOptions: [
			{ answerText: 'kanthne, mālā, niyamo', isCorrect: true },
			{ answerText: 'kanthine, mālā, agna', isCorrect: false },
			{ answerText: 'kanthne, pujā, niyamo', isCorrect: false },
			{ answerText: 'kanthine, pujā, agna', isCorrect: false },
		],
	},
	{
		questionText: 'Ā sansārmā brahmaswarup guru vinā jivanmā _____ tattve karine _____ na thai shake.',
		shloka: 22,
		answerOptions: [
			{ answerText: 'brahmavidyāno, sākshātkār', isCorrect: true },
			{ answerText: 'brahmavidyāno, nidhidhyas', isCorrect: false },
			{ answerText: 'gnānno, sākshātkār', isCorrect: false },
			{ answerText: 'gnānno, shravan', isCorrect: false },
		],
	}
];


export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [footer, setFooter] = useState('start');
	const [correct, setCorrect] = useState('');

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			setFooter('correct')
			setCorrect('You were correct! Score: ' + score)
		} else {
			setFooter('incorrect')
			setCorrect('You were incorrect! Score: ' + score)
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const questions = useMemo(() => {
		let nums = []
		let questions = []
		for (var i = 0; i < 5; i++) {
			let selected = Math.floor(Math.random() * bank.length);
			while(nums.includes(selected)) {
				selected =  Math.floor(Math.random() * bank.length);
			}
			nums.push(selected)
			questions.push(bank[selected]);
		}
		return questions
	}, []);



	const shuffle = (array) => {
		var currentIndex = array.length, randomIndex;
	  
		while (0 !== currentIndex) {
	  
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	};


	return (
		<div className='app'>
			{showScore ? (
				<>
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
					<button className='reset' onClick={() => window.location.reload()}>Play Again</button>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							Question {currentQuestion + 1}
						</div>
						<div className='question-shloka'>Shloka {questions[currentQuestion].shloka}</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{shuffle(questions[currentQuestion].answerOptions).map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<footer className={footer}>{correct}</footer>
				</>
			)}
		</div>
	);
}
