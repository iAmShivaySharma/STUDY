# Daily Study Reminder System

An automated GitHub Actions-based system that creates daily study issues with tasks across **4 tracks**: DSA, System Design, SQL, and Machine Coding — with **strict consistency enforcement**.

## How It Works

1. **Every day at 7:00 AM IST**, the `daily-reminder.yml` workflow runs automatically.
2. It checks whether you completed yesterday's tasks (by checking if the previous issue was closed).
3. If completed, it advances to the next day's tasks. If skipped, the **same tasks repeat**.
4. A single GitHub Issue is created with tasks from all 4 tracks.
5. **Close the issue** when you finish ALL tasks for the day.
6. When you close the issue, `check-completion.yml` immediately updates your progress and streak.

## Tracks

| Track | Days | Topics |
|-------|------|--------|
| DSA | 75 | 14 patterns, 2 problems/day |
| System Design | 29 | 16 HLD + 13 LLD topics |
| SQL | 30 | SELECT to complex real-world queries |
| Machine Coding | 20 | Backend, Frontend, Full-Stack, API Design, DB, JS/TS tasks |

## Consistency Rules

- **All 4 tracks must be completed** to count as a full study day
- If you skip, the **SAME tasks repeat** — no moving forward until done
- **Streak tracking**: consecutive days completed, longest streak, completion rate %
- After **3 consecutive skips**: escalating warning comments on the open issue
- **No cherry-picking**: you do DSA + System Design + SQL + Machine Coding, every day

## Streak System

- Closing the daily issue increments your streak and shows congratulations
- Skipping resets your streak to 0
- Your longest streak and completion rate are tracked and shown in every issue
- 7+ day streaks get a special label

## Files

- `study-plan.json` — Complete curriculum with all tasks, file paths, and questions.
- `progress.json` — Tracks current day, skip count, completed days, and streak. Updated automatically by GitHub Actions.

## Manual Controls

Run the `Daily Study Reminder` workflow manually from the **Actions** tab with these options:

- **Reset a single track**: Set `reset_track` to `dsa`, `system_design`, `sql`, or `machine_coding`.
- **Reset all tracks**: Set `reset_all` to `true`.

## After Track Completion

When you finish all days in a track, it automatically cycles back to day 1 for revision.
