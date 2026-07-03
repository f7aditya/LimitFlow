# Redis Commands Used in LimitFlow

## GET

Reads the current request count.

## SET

Stores the request count.

Example:

SET rate_limit:127.0.0.1 1 EX 60

The key expires automatically after 60 seconds.

## INCR

Atomically increments the request count.

## TTL

Returns the remaining lifetime of a key.

Redis TTL removes the need to manually track the window start time.
