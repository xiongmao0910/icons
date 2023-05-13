# xi-icons

<!-- [![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons -->

Use my custom icons in your projects easily with `xi-icons`, which
utilizes ES6 imports that allows you to include only the icons that your project is using.

<br />

# Installation

```bash
npm install xi-icons --save
```

# Usage example

```jsx
import { XiAllIcon, XiIcon } from "xi-icons/dist";

function App() {
    return (
        <>
            <div className="App">
                <XiIcon name="home" />
                <XiIcon name="search" />
                <XiIcon name="profile" />
                <XiIcon name="shop" />
                <XiIcon name="cart" />
            </div>
            <XiAllIcon />
        </>
    );
}
```

# License

MIT Copyright (c) Hoang Hieu Trung 2023
