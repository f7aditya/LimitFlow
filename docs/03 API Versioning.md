# API Versioning

## Why version APIs?

APIs evolve over time.

Versioning allows new changes without breaking existing clients.

Example

/api/v1/health

Later

/api/v2/health

Older clients continue using v1 while newer clients migrate to v2.

---

## Why use /api?

It separates API endpoints from websites, documentation, or other resources.
