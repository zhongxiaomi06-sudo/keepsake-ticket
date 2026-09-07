# Keepsake Ticket

Independent GitHub delivery repository for the Eazo Mini App `keepsake-ticket`. This repository contains exactly one Mini App and its paired reusable Skill.

- App source: [`apps/keepsake-ticket`](./apps/keepsake-ticket/)
- Skill: [`skills/craft-keepsake-ticket`](./skills/craft-keepsake-ticket/)
- Delivery status: [`HANDOFF-STATUS.md`](./HANDOFF-STATUS.md)
- GitHub: https://github.com/zhongxiaomi06-sudo/keepsake-ticket

## Run

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Verify

```bash
pnpm verify
pnpm test:e2e
```

The repository state remains governed by the app's `RELEASE.md`; a successful build is not Owner approval or `READY_FOR_EAZO`.
