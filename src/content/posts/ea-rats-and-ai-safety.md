---
title: "EA, rats, and AI safety"
description: "My views on the people, institutions, and incentives around EA and AI safety."
date: 2026-09-30
tags: [ea, rationality, ai-safety, institutions, ai-assisted]
draft: false
---

## EA vs rats vs post rats vs EA adjacent

These are loose distinctions, based on my experience.

- EAs are people and orgs motivated by using [reason and evidence to improve the world](https://www.effectivealtruism.org/what-is-effective-altruism). At least thats what the initial motivation was.
  - Exemplified by people like Peter Singer and Will MacAskill.
  - Orgs: CEA, Open Philanthropy, now [Coefficient Giving](https://coefficientgiving.org/our-history/).
- Rats, aka rationalists, are folks mainly hanging around forums such as LessWrong, Slate Star Codex, and Overcoming Bias.
  - Salient people: Eliezer Yudkowsky, Robin Hanson, Zvi, Gwern, etc.
  - Rats were early to discuss modern AI alignment and its consequences. There is overlap with the [older singularity and Extropian mailing-list circles](https://www.lesswrong.com/posts/i4susk4W3ieR5K92u/ai-risk-and-opportunity-humanity-s-efforts-so-far).
  - [LessWrong grew out of Overcoming Bias](https://www.lesswrong.com/w/history-of-less-wrong).
- Post rats: TPOT (this part of Twitter) and some older rat folks who seem relatively enlightened to me.
  - They were usually rats themselves at some point, then took a more pragmatic or spiritual approach.
  - Part of that comes from learning the limits and perils of the epistemic and instrumental rationality espoused by rats.
  - TPOT is a loose social label too. I wouldnt treat everyone around it as a post rat.
- EA adjacent: ex-EA folks, or those who sympathise with EA but do not identify as one.

From my experience, `P(EA | rat) >= P(rat | EA)`, because EA seems to have a higher base rate than rats. I havent counted this. Post rats seem to be an even smaller minority.

## What is my stance on EA?

- I want to distinguish the people from the institutions.
- From my interactions, EA folks are some of the smartest and most prosocial people I have met.
  - They are some of the densest high trust groups I've found.
  - I've made a lot of friends, even though we dont agree on many things.
- AFAIK there isnt a single EA high command. But following the paper trail gives you a rough idea of who is pulling the strings.
- Like other institutions, EA institutions suffer from power seeking and moral mazes.
  - Being in positions of power, capital, and influence has made the stakes higher.
  - The baseline risk of fumbling with such stakes is high enough that idt being an EA affects it much.
  - The closest analogy is a destroyer vs a yacht trying to cross a vortex. One needs to be careful in assigning causality to the behaviour of both vessels.
  - But you could ask: why would you steer towards a vortex if you knew it was on the way? Which is a sensible position.
  - I think the usual argument involves massaging utility functions and probability distributions until you get Pascal-wagered into taking the bet.
- People and institutions coevolve, and its hard to separate them. But I want to separate the role from the individual who is instantiating it.
  - This reduces the agency placed on the individual, but thats how our institutions are structured given the power levels.
  - Hence the idea of gaining power as a means to do impactful things.
  - But it sidelines the pitfalls of amassing power for its own sake.

## So how can you remain sane?

- Dont be forced to groupthink or fit in.
- Maintain financial autonomy.
  - People dont realise how much of their epistemics is affected when their career or livelihood is at stake.
- Speak up if you notice grifters or status seekers.
  - The culture of institutions changes through distillation.
- Look at actions over words.
  - EAs are good at writing and coming up with arguments, so its easy to get yourself confused.
  - When in doubt, take a step back, forget all the reasoning, and look at the actions.
  - Given how much consequentialist reasoning there is in EA, I find this useful for avoiding motivated reasoning.
- Take your own time to question assumptions. Dont take everything you read for granted.
  - Remember that [the questions are privileged](https://www.lesswrong.com/posts/6vcxuRHzeM99jYcYd/privileging-the-question).

## How is EA related to AI safety?

- In the earlier EA spaces I encountered, near term causes such as global health and animal advocacy were more prominent.
  - AI safety was one of the cause areas. Routes included an ML PhD or working on agent foundations at MIRI.
  - AI safety felt like a fringe idea back then, but there was ongoing work on alignment.
  - [Iterated amplification and debate](https://www.alignmentforum.org/posts/vhfATmAoJcN8RqGg6/a-guide-to-iterated-amplification-and-debate) were being developed before ChatGPT. [ELK came in 2021](https://www.alignment.org/blog/arcs-first-technical-report-eliciting-latent-knowledge/). RLHF was another strand of work.
- As recently as 2022, before ChatGPT, longtermism was a major focus of EA discussion.
  - After ChatGPT, it felt like the spaces I was in pivoted heavily towards AI risk.
  - The history is longer than that, though. [80,000 Hours ranked AI risk as its top problem from 2016, and narrowed its strategic focus in 2025](https://80000hours.org/2025/04/strategic-approach/).
  - Its [current strategy](https://80000hours.org/2026/05/our-strategy-at-80000-hours/) focuses on risks and opportunities from advanced AI.
  - EA work on [global health and animal welfare](https://coefficientgiving.org/our-history/) continues too.
- Open Philanthropy has funded academics working on AI safety since well before the 2020s. Its [2017 grants](https://coefficientgiving.org/funds/navigating-transformative-ai/?grant_year=2017) already included academic AI safety research.
- MIRI's [history goes back to 2000](https://intelligence.org/about/), with a shift towards alignment around 2003. FLI was [founded in 2014](https://futureoflife.org/about-us/our-history/).
- Wealthy donors have funded large parts of this ecosystem.
  - Dustin Moskovitz, a Facebook cofounder, and Cari Tuna established Good Ventures. It became the main philanthropic partner behind what is now [Coefficient Giving](https://coefficientgiving.org/our-history/).
  - Jaan Tallinn, a Skype cofounder, has supported FLI, FHI, and MIRI. FLI's [2015 conference biography](https://futureoflife.org/PDF/attendees.pdf) describes this funding.

## How do we understand the current AI safety landscape?

### What are the risks?

- Takeover.
- Gradual disempowerment.
- Misuse, including chemical, biological, radiological, and nuclear (CBRN) risks.

### How to work on it

- Can you imagine a world where you have some notion of safety being solved?
  - If not, then we have bigger problems to worry about. You might be forced to believe in x-risks to justify your work.
- What would you do if there were no risks?

### Technical vs governance

I changed my views last year. I think most technical solutions are barely neutral or have a negative impact.

Technical work which could aid governance:

- Evals
  - This has been a major focus of a lot of AI safety companies.
  - Run frontier models on tasks which are meaningful barometers of progress. Reduce surprises and prepare.
- CoT monitoring
  - Monitor the chain of thought of models to try to catch scheming or plans to do bad stuff.
  - This depends on what the model puts into its chain of thought. [Monitoring can miss misbehaviour](https://arxiv.org/abs/2507.11473).
- Model organisms
  - Fine-tune models to understand when they start doing bad stuff and which training techniques can get them back on track.
- Mech interp
  - Open the black box of the neural network and build a physics out of it.
  - If we can build a model which humans understand, perhaps we can characterise the conditions which lead to bad behaviour.
  - Conversely, if we notice something bad, what does it say about the internals of the network?
  - Build steering techniques to push the model to do good things.
  - Idealistic vision, big if true. Understanding is better than ignorance, agreed. We cant predict all the applications either.
  - But we need to realise its current state and acknowledge its impact in the near term.
  - My impression is that it doesnt scale as fast as capabilities.
  - It could be useful, but we cant predict a priori that it will only be used for safety.
  - Its easy for technical folks to grasp and pattern match, so I think it gets more attention.
  - I wish more tech folks questioned its connection to being useful.

Alignment techniques can add a capability tax, so adopting them is not always directly incentivised.

Even if technical alignment is solved:

- How can you be sure it will be used to prevent misuse?
- How can you prevent dual use, which is probably already happening?

Governance:

- There are a bunch of agendas.
- A lot of the work I encounter is about trying to reduce race dynamics or working out details such as tracking GPU usage.

### Why are labs racing even though they know its risky?

This is my read of the incentives, rather than a claim to know what everyone inside the labs or government thinks.

- If you expect recursive self-improvement (RSI), unilaterally pausing looks dangerous.
- Even if labs want to pause, the US government (USG) might be against it because its optimising for geopolitics.
- I dont think this was ever just about the labs.
  - If the USG wanted to force a broad slowdown, I'd expect it to push harder for one.
  - The [2025 AI Action Plan](https://www.whitehouse.gov/wp-content/uploads/2025/07/americas-ai-action-plan.pdf) prioritised US leadership and removing barriers to AI development.
- I think the USG sees a symbiotic relationship with labs as necessary to remain at the frontier.
  - Nationalising could lead to stagnation and slower progress, which it might see as too costly.
- You can make an argument similar to the USG policing the high seas and maintaining free trade.
  - We all have to pay the price for the US being the hegemon.
  - Similarly, being at the frontier could deter other entities from attacking you. This is the peace through strength argument.
  - I think there is some merit to it.
  - I would rather live in a world where a constitutional republic is the hegemon compared to an autocracy.
- My guess is that labs are often racing because they are worried about being dominated by other labs.
  - Claims about being the best stewards need to be read alongside that incentive.

## Meta questions to keep asking yourself

- Why does any of this need to happen in the first place?
- Who are the people behind all this, and what are their incentives?
