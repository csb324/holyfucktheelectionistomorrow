import actionLinks from './actions';

const pages = {
  index: {
    pretext: 'FIRST THINGS FIRST...',
    text: 'ARE YOU OKAY?',
    links: [
      { label: 'I NEED A FUCKING MINUTE', href: '/selfcare' },
      { label: "I'M READY TO FUCK SHIT UP!", href: '/fightback' }
    ]
  },
  '/selfcare': {
    pretext: "THAT'S FUCKING FAIR.",
    text: 'CHECK THIS SHIT OUT (AND COME BACK LATER IF YOU WANT)',
    links: [
      { label: 'LOOK AT DOGS AND BABIES AND SHIT', href: 'https://www.youtube.com/watch?v=p336IIjZCl8' },
      { label: 'TAKE FUCKING CARE OF YOURSELF', href: 'https://www.wired.com/2016/11/critical-role-self-care-handling-post-election-stress/' },
      { label: 'PICK UP A FUCKING PENCIL AND WRITE THIS SHIT DOWN', href: 'http://nymag.com/scienceofus/2016/09/journaling-can-help-you-out-of-a-bad-mood.html' },
      { label: 'MAKE SOME BAD FUCKING ART OR SOMETHING', href: 'https://makeamericacolorfulagain.com/trump_ebooks.pdf' },
      { label: 'REMEMBER THAT BUZZFEED HAS YOUR BACK I GUESS', href: 'https://www.buzzfeed.com/kelseyimpicciche/we-have-a-message-for-those-who-feel-alone?utm_term=.haK81DMVoa.mcWMPKGd8V' },
      { label: 'AND SO DO ALL THESE PEOPLE WITH FUCKING SAFETY PINS', href: 'https://www.good.is/articles/safety-pin-america-trump-brexit' },
      { label: 'OH BUT ONE MORE THING...', href: '/one-more-thing' }
    ]
  },
  '/fightback': {
    pretext: "OKAY. LET'S FUCK SHIT UP.",
    text: "WHAT'S ON YOUR MIND?",
    links: [
      { label: 'ELECTING SOME FUCKING DEMOCRATS', href: '/fightback/for-democrats' },
      { label: 'FUCKING LGBTQ SHIT', href: '/fightback/for-lgbtq' },
      { label: 'RACIST MOTHERFUCKERS', href: '/fightback/against-racism' },
      { label: 'NOT GETTING GRABBED BY THE FUCKING PUSSY', href: '/fightback/for-women' },
      { label: 'THE FUCKING EARTH IS GOING TO LITERALLY BE ON FUCKING FIRE', href: '/fightback/for-earth' }
    ],
  },
  '/one-more-thing': {
    text: 'TELL YOUR FUCKING FRIENDS',
    links: [
      { label: 'FACEBOOK', href: 'https://www.facebook.com/sharer/sharer.php?u=http%3A//www.holyfucktheelection.com/' },
      { label: 'TWITTER', href: 'https://twitter.com/intent/tweet?text=HOLY%20FUCK%20NOW%20WHAT%20&url=http%3A//www.holyfucktheelection.com/' }
    ]
  }
};

const getActions = (acc, topic) => {
  const topicLinks = actionLinks[topic];
  const shareLink = [{ label: 'FUCK YEAH. NOW WHAT?', href: '/one-more-thing' }];
  const links = {
    [`/fightback/${topic}`]: {
      pretext: 'FUCK YEAH.',
      text: 'WHAT CAN YOU SPARE?',
      links: [
        { label: 'MONEY', href: `/fightback/${topic}/donate` },
        { label: 'TIME', href: `/fightback/${topic}/volunteer` }
      ]
    },
    [`/fightback/${topic}/donate`]: {
      pretext: 'YOU SHOULD...',
      text: 'DONATE TO ONE OF THESE FUCKING ORGANIZATIONS',
      links: topicLinks.donate.concat(shareLink)
    },

    [`/fightback/${topic}/volunteer`]: {
      pretext: 'YOU SHOULD...',
      text: 'VOLUNTEER WITH ONE OF THESE FUCKING ORGANIZATIONS',
      links: topicLinks.volunteer.concat(shareLink)
    },
  };

  return { ...links, ...acc };
};

// Merge in the dynamic portions
export default Object.keys(actionLinks).reduce(getActions, pages);
