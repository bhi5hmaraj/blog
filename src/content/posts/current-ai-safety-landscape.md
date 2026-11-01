---
title: "How do we understand the current AI safety landscape?"
description: "My views on AI safety and the incentives driving the race."
date: 2026-09-30
tags: [ai-safety, ai-governance, ai-assisted]
draft: false
---

## What are the risks?

- Takeover.
- Gradual disempowerment.
- Misuse, including chemical, biological, radiological, and nuclear (CBRN) risks.

## How to work on it

- Can you imagine a world where you have some notion of safety being solved?
  - If not, then we have bigger problems to worry about. You might be forced to believe in x-risks to justify your work.
- What would you do if there were no risks?

## Technical vs governance

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

## Why are labs racing even though they know its risky?

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
