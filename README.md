# get-regexp-matches

Execute a regular expression on a string until all matches are found and return them.

## Use

Install using

```sh
npm install @hon2a/get-regexp-matches
```

Use with a regular expression with the "global" flag set to get all matches

```javascript
import { getRegexpMatches } from '@hon2a/get-regexp-matches'

const regExp = /ab/g
const text = 'aab abbbab'
getRegexpMatches(regExp, text)
// returns array yielded by repeatedly running `regExp.exec(text)` until exhausted
```

## Development

### Install

Install dependencies using:

```sh
npm install
```

### Develop

After you modify sources, run the following (or set up your IDE to do it for you):

- format the code using `npm run format`
- lint it using `npm run lint`
- test it using `npm test`

and fix the errors, if there are any.

### Publish

Publishing is done in two steps:

1. Create a new version tag and push it to the repository:
    ```sh
    npm version <patch|minor|major>
    git push --follow-tags
    ```
1. Build and publish the new version as a npm package:
    ```sh
    npm publish --access public
    ``` 
