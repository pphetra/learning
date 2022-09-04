# init project

```
npx create-next-app@latest form
```

# config prettier

```
npm install -D prettier
```

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false
}
```

# tailwind

https://tailwindcss.com/docs/guides/nextjs

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## styles/globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# git commands

```
git fetch origin

git branch -v -a

git switch -c test origin/test
```
