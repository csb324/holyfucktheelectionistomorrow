export const IDEAS_LIST = [
	{
		pretext: "FIRST THINGS FIRST...",
		text: "ARE YOU OKAY?",

		buttons: [
			{	
				text: "I NEED A FUCKING MINUTE",
				stepsForward: 1
			},
			{
				text: "I'M READY TO FUCK SHIT UP",
				stepsForward: 2
			}
		]
	},

	{
		pretext: "THAT'S FUCKING FAIR.",
		text: "CHECK THIS SHIT OUT (AND COME BACK LATER IF YOU WANT)",

		buttons: [
			{
				text: "LOOK AT DOGS AND BABIES AND SHIT",
				link: "https://www.youtube.com/watch?v=p336IIjZCl8"
			},
			{
				text: "TAKE FUCKING CARE OF YOURSELF",
				link: "https://www.wired.com/2016/11/critical-role-self-care-handling-post-election-stress/"
			},
			{
				text: "REMEMBER THAT BUZZFEED HAS YOUR BACK I GUESS",
				link: "https://www.buzzfeed.com/kelseyimpicciche/we-have-a-message-for-those-who-feel-alone?utm_term=.haK81DMVoa#.mcWMPKGd8V"
			},
			{
				text: "AND SO DO ALL THESE PEOPLE WITH FUCKING SAFETY PINS",
				link: "https://www.good.is/articles/safety-pin-america-trump-brexit"			
			},
			{
				text: "OH BUT ONE MORE THING...",
				stepsForward: 4,
				class: "idea-button--accent"
			}
		]
	},

	{
		pretext: "OKAY. LET'S FUCK SHIT UP.",
		text: "WHAT'S ON YOUR MIND?",

		buttons: [
			{
				text: "ELECTING SOME FUCKING DEMOCRATS",
				topic: "democrats"
			},
			{
				text: "FUCKING LGBTQ SHIT",
				topic: "lgbtq"
			},
			{
				text: "RACIST MOTHERFUCKERS",
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
		
		buttons: [
			{	
				text: "FACEBOOK",
				link: "https://www.facebook.com/sharer/sharer.php?u=http%3A//www.holyfucktheelection.com/"
			},
			{
				text: "TWITTER",
				link: "https://twitter.com/intent/tweet?text=HOLY%20FUCK%20NOW%20WHAT%20&url=http%3A//www.holyfucktheelection.com/"
			}
		]

	}

];

export const IDEAS_COUNT = IDEAS_LIST.length;