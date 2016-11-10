export const IDEAS_LIST = [
	{
		pretext: "FIRST THINGS FIRST...",
		text: "ARE YOU OKAY?",

		link: "https://www.youtube.com/watch?v=p336IIjZCl8",

		buttonYes: "I'M SUPER FUCKED UP ABOUT THIS",
		buttonNo: "I'M READY TO FUCK SHIT UP"
	},

	{
		pretext: "OKAY. LET'S FUCK SHIT UP.",
		text: "WHAT'S ON YOUR MIND?",

		buttons: [
			{
				text: "MIDTERM FUCKING ELECTIONS",
				topic: "midterms"
			},
			{
				text: "MY BASIC FUCKING HUMAN RIGHTS",
				topic: "humanrights"
			},
			{
				text: "FUCKING RACIST SHIT",
				topic: "racism"
			},
			{
				text: "NOT GETTING GRABBED BY THE FUCKING PUSSY",
				topic: "women"
			},
			{
				text: "THE FUCKING EARTH IS GOING TO LITERALLY BE ON FUCKING FIRE",
				topic: "earth"
			}
		]
	},

	// RE: MIDTERM ELECTIONS
	{
		pretext: "FUCK YEAH.",
		text: "WHAT CAN YOU SPARE?",

		buttons: [
			{
				text: "MONEY",
				action: "donate"
			},
			{
				text: "TIME",
				action: "volunteer"
			}
		]
	},

	{
		linkList: true
	},

	{
		text: "TELL YOUR FUCKING FRIENDS",
		link: false
	}

];

export const IDEAS_COUNT = IDEAS_LIST.length;