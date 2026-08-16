---
title: "An über worldview"
description: "A few computer-science-shaped mental models for attention, goals, and learning."
date: 2019-06-22
tags: [mental-models, learning, handwritten]
draft: false
---

These are a few mental models I borrowed from theoretical computer science and started applying, perhaps a little too enthusiastically, to the rest of life.

## Multi-armed bandits

I came across multi-armed bandits in a reinforcement learning course at CMI. Basically, imagine a row of slot machines and an agent who can pull only one arm at a time. The agent has to decide whether to explore unfamiliar machines or exploit the one that has paid out well so far.

![An octopus exploring several slot machines, illustrating the multi-armed bandit problem](https://cdn-images-1.medium.com/max/1600/0*IMcXHTPn28t4ddWX.)

The slot machines are called bandits because, like real bandits, they steal your money.

This model helped me notice something about my procrastination patterns. A lot of what I called procrastination was really an endless exploration phase: new books, new subjects, new tabs, and random articles. Exploration feels productive because you keep discovering interesting things. But nothing gets enough sustained attention to pay off.

The point is not to stop exploring. It is to mark the boundary between exploration and exploitation. Search for a while, then commit long enough to find out whether the choice was actually good.

Some resources I found useful were [Exploration and Exploitation](https://www.lesswrong.com/posts/oP36hN6ty25sXum3s/exploration-exploitation-problems) on LessWrong and this [BearLamp note](http://bearlamp.com.au/exploration-exploitation-problems/).

## The tractability thesis

This is loosely inspired by [Cobham’s thesis](https://en.wikipedia.org/wiki/Cobham%27s_thesis), which identifies feasible computation with problems solvable in polynomial time.

My version is much less serious: to make progress on a goal, first make it tractable. A goal is often intractable because it has unmet dependencies which are themselves vague or intractable.

I find it useful to keep asking what must already be true before the goal becomes possible. Repeat this until the dependencies are small enough to act on. Constructing this dependency graph is often most of the work. What remains is something like a topological sort.

Of course, life is not a clean directed acyclic graph. Dependencies change, cycles appear, and the destination itself moves. But the model is still useful when a large ambition needs to become a sequence of actions.

## The kernel thesis

In computer science, [kernelization](https://en.wikipedia.org/wiki/Kernelization) reduces a problem to a smaller instance, called a kernel, without losing what is needed to solve the original problem.

I think learning has something similar. When studying a new subject, we should look for the smallest useful kernel: the main questions, definitions, examples, and connections to things already known. Once that kernel is stable, the rest of the subject has somewhere to attach itself.

There can be several notions of efficiency here. One kernel may contain the fewest concepts. Another may have the most backlinks to concepts already understood. The right kernel depends on what you are trying to do.

## Courses and warfare

At one point I started thinking of courses in a semester as a war. Each course is an enemy trying to invade you.

- Teachers are intelligence officers who tell you about enemy movements.
- Studying in advance is building a fortress.
- Collaborating is building alliances.
- Each concept understood is a battle won.
- Falling behind lets the enemy slowly encroach on your territory.

The metaphor is overdramatic, but it contains one useful point: you cannot defeat the enemy in a single day. A war is a collection of battles, and a course is a collection of concepts. Last-minute heroics are a poor substitute for steady progress.

## On studying hard things

Self-learning hard things can take a huge amount of time. I have repeatedly noticed the same sequence while trying to understand a difficult proof:

1. Why am I doing this right now?
2. Wouldn’t I be better off doing something more applied?
3. Here is an elaborate theory for why this entire subject is boring.

I think this is often a defence mechanism for fetching low-hanging fruit. Most interesting things have a setup cost. The familiar subject feels natural only because the effort needed to learn it has disappeared from memory.

It helps to write down why the subject matters, move between theory and problems, ask for help when stuck, and check whether the difficulty comes from the idea or merely from how it is written.

No matter how good you become at something, learning a genuinely new thing remains locally hard, confusing, and frustrating. Once you scale the summit, you get to forget the climb and enjoy the view.

These notes were first written in 2019. [Read the original source on GitHub](https://github.com/bhi5hmaraj/Journal/blob/master/World-Views.md).
