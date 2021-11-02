# Frankenstein Dotnet React

## Setup

### Environment

Copy `Frankenstein/App/.env.example` to `Frankenstein/App/.env` and set any environment variables.

### Dev Tools

Install the following extensions in your browser:

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Building and running on localhost

```sh
cd Frankenstein/App
```

Install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

## Development

### CSS

We use the [BEM](http://getbem.com/introduction/) architectural pattern to write CSS

### Testing

```sh
npm run test
```

### Code Examples

Please see the following Example components as a framework for creating additional components:

```
.
├── ...
├── src
│   └── components          
│       └── TheMonster 
│           └── TheMonster.scss     # BEM based SCSS 
│           └── TheMonster.tsx      # Parent functional component
│           └── MonsterEye.tsx      # Child functional component
│           └── index.ts            # Directory level exports
└── ...
```

## Resources
- [Redux](https://redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [React Redux](https://react-redux.js.org/introduction/getting-started)