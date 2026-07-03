# Eliminating Race Conditions

## Problem

Using `GET` followed by `SET` is not atomic.

Two concurrent requests can both observe that a key does not exist and both create it.

## Solution

Use:

SET key value NX EX 60

`NX` creates the key only if it does not already exist.

If the command succeeds:

- The request count starts at `1`.

If the command fails:

- Another request already created the key.
- Increment the counter using `INCR`.

This prevents the first-request race condition.
