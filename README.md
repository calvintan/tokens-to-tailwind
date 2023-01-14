# Design Tokens to Tailwind

This is a sample project to demonstrate how to convert design tokens to Tailwind.

## Available Scripts

> `npm run sdbuild`

Run this to convert your design tokens from JSON to JS. The JS tokens will be created in the `build` folder.

You can change this to a different directory as well. Simply update the buildpath in `config.json`.

## A Rough Guide

If starting from scratch, you can [follow this documentation](https://tailwindcss.com/docs/guides/create-react-app) to set up a React App with Tailwind. Otherwise follow the steps below:

1. Add your design tokens to the `tokens` folder, and do `npm run sdbuild` to convert your tokens to JS format.

2. The next part is handled by `tailwind.config.js`. It converts the tokens to the expected format for Tailwind, and nests it within "extend" so we can keep the default Tailwind styles. You can do `node tailwind.config.js` to check the output of the tokens.

3. Update `src/App.js` with a Tailwind utility class with any of your tokens. Then do `npm start` to test the changes!
