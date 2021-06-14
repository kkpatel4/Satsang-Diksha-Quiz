import React, { useState, useMemo } from 'react';

export const bank = [
	{
		questionText: 'Swaminarayan Bhagwan etle ke sākshāt Akshar-Purushottam Maharaj sarvane param ____, ____ ane ____ arpe.',
		shloka: 1,
		answerOptions: [
			{ answerText: 'shanti, anand, dukh', isCorrect: false },
			{ answerText: 'anand, shanti, sukh', isCorrect: false },
			{ answerText: 'shanti, anand, sukh', isCorrect: true },
			{ answerText: 'bhakti, dharma, maya', isCorrect: false },
		]
	},
	{
		questionText: 'Ā deh _____ sādhan chhe, keval _____ sādhan nathi.',
		shloka: 2,
		answerOptions: [
			{ answerText: 'bhognu, muktinu', isCorrect: false },
			{ answerText: 'muktinu, bhognu', isCorrect: true },
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
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Te ā manushya janmanu param _____ nathi.',
		shloka: 3,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Sarva _____ tālvā, _____ pāmvā ane Bhagwanni _____ karvā ā deh malyo chhe.',
		shloka: 4,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Ā badhu satsang karvāthi avashya _____ thāy chhe.',
		shloka: 5,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Āthi _____ sadāy satsang karvo.',
		shloka: 5,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Tethi Parabrahma Swaminarayane ā _____ sākshāt avtarine ā divya _____ sthāpnā kari.',
		shloka: 6,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Ā satsangnu _____ mumukshuone thāy evā shubh āshaythi ‘Satsang Diksha’ e nāmnu shāstra _____ āve chhe',
		shloka: 7,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Satya evā _____ sang karvo, satya evā _____ sang karvo, satya evā ____ sang karvo ane sach-chhāstrano sang karvo e satsangnu sāchu lakshan jānvu',
		shloka: 8,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		]
	},
	{
		questionText: 'Āvo divya satsang karnārā _____ sukhi thāy chhe.',
		shloka: 9,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Dikshā etle dradh ____, shraddhāe sahit evo achal ____, samyak samarpan, priti-purvak _____, vrat ane dradh āshro.',
		shloka: 10,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Ā shāstramā Parabrahma Sahajanand Paramatmae darshāvel āgnā tathā _____ paddhatine _____ rite janāvi chhe.',
		shloka: 11,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Purusho tathā strio sarve _____ adhikāri chhe, sarve _____ adhikāri chhe ane sarve _____ adhikāri chhe.',
		shloka: 12,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Satsangmā _____-bhedthi _____-ādhikpanu na ja samajvu.',
		shloka: 13,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Badhā pot-potāni _____ rahi bhakti vade _____ pāmi shake chhe.',
		shloka: 13,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Sarva _____ sarva strio tathā sarva purusho sadāy satsang, _____ ane _____ adhikāri chhe.',
		shloka: 14,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Varnanā ādhāre kyārey nyun-_____ na karvo.',
		shloka: 15,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Sarva janoe potānā _____ mān tyajine paraspar _____ karvi.',
		shloka: 15,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Jātie karine koi _____ nathi ane koi _____ pan nathi.',
		shloka: 16,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Tethi nātjātne laine _____ na karvo ne _____ satsang karvo.',
		shloka: 16,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: '_____ tathā _____ sarve mokshanā adhikāri chhe.',
		shloka: 17,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Temā nyun-ādhikbhāvnathi, kāran ke gruhastha ke tyāgi _____ Bhagwannā _____ chhe.',
		shloka: 17,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Swaminarayan Bhagwanne vishe _____, dradh ane _____ bhakti māte āshraydikshā _____ grahan kari satsang prāpta karvo.',
		shloka: 18,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Āshray-dikshā mantra ā pramāne chhe: Dhanyo’smi purna-kāmo’smi _____ nirbhayah sukhi; _____-guru-yogena _____-āshrayat.',
		shloka: 19,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Mumukshu potānā _____ mukti māte Sahajanand Shri Hari tathā Aksharbrahma-swarup Gunatit guruno _____ karine _____ kare.',
		shloka: 20,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Satsangno āshro kari sadāy _____ vishe kāshthni bevdi _____ dhāran karvi tathā satsangnā _____ dhāran karvā.',
		shloka: 21,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'Ā sansārmā brahmaswarup guru vinā jivanmā _____ tattve karine _____ na thai shake.',
		shloka: 22,
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	}
];


export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
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
				</>
			)}
		</div>
	);
}
