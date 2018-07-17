---
layout: post
title:  "July problem solving"
date:   2018-07-01 15:36:03
categories: problem-solving
tags: [CF, timus, explanation]
---

This post contains all the problems that I solve in July. I hope to keep up the streak of solving everyday. A lot of very experienced coders have recommended timus, so I'll be focussing on timus.


## Day 1 (2/7/18)

#### [1523. K-inversions](http://acm.timus.ru/problem.aspx?space=1&num=1523)

> Consider a permutation $a_1, a_2, …, a_n$ (all $a_i$ are different integers in range from 1 to n). Let us call k-inversion a sequence of numbers $i_1, i_2, …, i_k$ such that $1 ≤ i_1 < i_2 < … < i_k ≤ n$ and $a_{i1} > a_{i2} > … > a_{ik}$. Your task is to evaluate the number of different k-inversions in a given permutation.
>
> 1 ≤ *n* ≤ 20000, 2 ≤ *k* ≤ 10

Pre requisite - DP, Fenwick tree



This looks like a classic DP problem. If you are familiar with the LIS (Longest increasing subsequence) problem then the problem is essentially solved. 

Let the DP state be 

$$ DP_k [val]  -  \text{number of subsequences of length $k$ with starting element as $val$ } $$

The transition then would be

$$DP_k[arr[i]] = \sum_{\substack{\text{ $j \gt i$ and $arr[j] < arr[i]$ } }}  DP_{k-1}[arr[j]]  $$

The base case is $ \text{$DP_1[val] = 1$  $\forall$ 1 $\leq$ val $\leq$n }$, this is because there is only $1$ subsequence of length $1$ starting with $val$

What we are trying to do here is for every index $i$ from  $n$ to $1$ . We can extend it with $arr[j]$ right to it if $arr[j] < arr[i]$ . Hence we just have to collect all these $j$ s.

Naively implementing the reccurencce would result in a complexity of $\mathcal{O}(k * n^2)$ . But this would easily TLE.

The main bottleneck here is the summation for every index. If we can come up with a data structure which supports fast querying of sum less than a value and also updates at an index. This is exactly what [Fenwick Tress](https://brilliant.org/wiki/fenwick-tree/) are for. Both the operations can be performed in $\mathcal{O}(\log n)$ .

```java
int DP[] = new int[n + 1];  /* DP_k[j] := number of subsequences of length k with starting element as j */        
Arrays.fill(DP, 1);        // Base case is subsequence of length 1 and every element satisfies that 

while(k-->0) {
  FenwickTree BIT = new FenwickTree(n);
  for(int i = n; i >= 1; i--) {
    int prev = DP[arr[i]];                  // DP_k-1
    DP[arr[i]] = BIT.query(arr[i]);         // DP_k[arr[i]] := sum(DP_k-1[arr[j]]) s.t. j > i and arr[j] < arr[i]
    BIT.update(arr[i], prev);               // update DP_k-1 which are only visited
  }
}

int totalWays = 0;
for(int i = 1; i <= n; i++) 
  totalWays = (totalWays + DP[i]) % MOD;

```

The overall complexity now becomes $\mathcal{O}(k\cdot n \log n)$

You can find my solution [here](https://gist.github.com/bhi5hmaraj/325b198fb11d8735b802996e6f8c37f6)

More resources for Fenwick tree - [stackexchange](https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a) , [visualgo](https://visualgo.net/bn/fenwicktree)


## Day 2 (3/7/18)

I took part in a Div3 contest ([#494](https://codeforces.com/contest/1003)) in CF. A and C were quite easy. B was a ad-hoc with a tricky edge case. D was my nemesis, greedy.

#### [A - Polycarp's Pockets](https://codeforces.com/contest/1003/problem/A) | [Solution](https://codeforces.com/contest/1003/submission/39897712)  

Since we need to pack a set which contains different items all the time, we can create a frequency distribution of all the items and then remove items based on it. So the answer would be the maximum frequency.

Streams & Lambdas make the code more elegant and crisp !

```java
int n = nextInt();
HashMap<Integer, Integer> freq = new HashMap<>();
Arrays.stream(nextIntArray(n)).forEach(val -> freq.merge(val, 1, Integer::sum));
println(freq.values().stream().max(Integer::compare).get());
```

#### [B - Binary String Constructing](https://codeforces.com/contest/1003/problem/B) | [Solution](https://codeforces.com/contest/1003/submission/39913868)

There are 2 observations here

1. Its better to start with the character with the maximum frequency. This is because of the fact that starting with the character with smaller frequency can make the solution infeasible. For example if `a = 1 b = 2 x = 2` then `101` is the only feasible solution. So starting with a character with highest frequency guarantees a solution.
2. Combining the characters together won't change the score. 

From these 2 observations we can do the following -

1. Start with the character with the maximum frequency
2. Alternate characters till we get a score of `x` 
3. Club the remaining characters with their first occurrence (we can group it with any arbitrary position of that character.

#### [C - Intense Heat](https://codeforces.com/contest/1003/problem/C) | [Solution](https://codeforces.com/contest/1003/submission/39906854)

The constraints of the problem are not so high $n,k \leq 5000$ , hence any $\mathcal{O}(n \cdot k)$ should work. I coded a sliding window type of solution. 

Now coming to the interesting part of the problem, looks like there is a [$\mathcal{O}(n)$](https://codeforces.com/blog/entry/60377?#comment-442444) solution to this problem using a [nice trick](https://codeforces.com/contest/1003/submission/39957991) 





