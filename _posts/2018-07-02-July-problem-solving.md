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

------




