# mitarashinu.github.io
This github pages is for japanese band named "見たら死ぬ".

# How to set up
At first, clone this repository.

```
$ git clone git@github.com:mitarashinu/mitarashinu.github.io
$ cd mitarashinu.github.io
```

Next, prepare to build JavaScript.

`npm i` or `yarn install`

Done!🍣

# How to edit content for every page
Every resources are at `src/data`. You can find JSON file to update.

- Top: Edit `src/data/top-01.json`.
- About: Edit `src/data/about.json`.
- Video: Edit `src/data/video.json`.
- Item: Edit `src/data/edit.json`.

EASY!

# How to add data
`data.py` is a script for adding new data.

NOTE: Now this script allows only a `video` data.

Run `python data.py video` and input every information.

# How to build
1. Run `npm run build`.

1. Ensure that your change has been reflected. For example `python -m http.server` etc. Up to you.

# How to expose latest page
All need is just `git push origin master`.

Be Happy🍺
