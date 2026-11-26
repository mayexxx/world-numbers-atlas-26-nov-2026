[![make.fun competition](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/mayexxx/world-numbers-atlas-26-nov-2026/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/mayexxx/world-numbers-atlas-26-nov-2026/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

# World Numbers Atlas

Explore eight countries through six essential indicators, from population and GDP to health and prices. Each figure includes its World Bank source and year. The atlas runs entirely offline as a static site; open `app/index.html` in a browser.

## Run it locally

From the repository root, run `python3 -m http.server 8080 --directory app`, then open http://localhost:8080. The hash routes are `#/`, `#/country/<CODE>`, and `#/indicator/<id>`.

The figures come from the World Bank for 2022–2023. The screenshots were produced with headless Chrome rendering the running site.
