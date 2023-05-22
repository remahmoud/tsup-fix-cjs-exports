# tsup-fix-cjs-exports

This is a [tsup](https://tsup.egoist.dev) plugin that convert `exports.default` to `modules.exports` for CommonJS modules.

## Usage

```bash

npm i tsup-fix-cjs-exports -D

```

```js
// tsup.config.js

import fixCjsExports from 'tsup-fix-cjs-exports'

export default defineConfig({
    // ... other tsup config
    plugins: [fixCjsExports()],
})

```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please create an issue and describe your request.

## Author

**tsup-fix-cjs-exports** © [Mahmoud Ibrahiam](https://www.github.com/remahmoud), Released under the [MIT](./LICENSE) License.<br>