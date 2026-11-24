# Pit Career: Series 3

A trading-floor revision game for the NFA Series 3 (National Commodity Futures) exam.

**Play:** https://smelliott121.github.io/series3-pit-career/

- 10 desks (one per chapter), career ranks, margin calls and liquidation
- The Real Exam: 120-question mock, 2h30, 70% needed in both parts. Exam conditions: no answers until you submit, back/next, flag for review, question map, pause and resume
- Mock recap: score by exam area, marks dropped, priority areas, trend vs last mock, full answer review, revision notes for weak areas, flashcards and a targeted drill
- Damage Control: spaced repetition (misses come back tomorrow, then in 3 and 6 days, capped before exam day)
- Question order avoids repeats: unseen first, then due reviews, then the questions seen longest ago
- Worked calculations on the calculation questions; revision notes and key-fact flashcards for all 9 exam areas
- Daily drill, Open Outcry, Order Desk, Contract Match, Cheat Sheet
- Progress is saved in your browser (per device)

## Editing questions
Questions live in `src/questions/` (worked calculations in `worked.js`), revision notes in `src/notes.js`. After editing, run `python3 src/build.py` to rebuild `index.html`.
