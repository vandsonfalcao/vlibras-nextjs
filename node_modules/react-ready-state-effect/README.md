# React ReadyState Effect
![GitHub](https://img.shields.io/github/license/Horat1us/react-ready-state-effect)
![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/Horat1us/react-ready-state-effect)
![TypeScript Support](https://img.shields.io/badge/language-TypeScript-blue)

Simple React Effect Hook that execute callback in case current document.readyState match expected.

## Installation
Using [npm](https://npmjs.com/package/react-ready-state-effect)
```bash
npm i react-ready-state-effect
```

## Example

### useReadyStateEffect
[Source](./src/useReadyStateEffect.ts)

Execute effect is current document.readyState match expected (see isReadyStateMatch).
```javascript
import { useReadyStateEffect } from "react-ready-state-effect";

export const FunctionalComponent = () => {
    useReadyStateEffect(
        /* callback */ () => {
            console.log(`Document loading completed.`);
        }, 
        /* dependencies */ [], 
        /* expected ready state to execute callback */ "complete"
    );
    
    /* render your component */
    return null;
};
```

### isReadyStateMatch
[Source](./src/isReadyStateMatch.ts)

This helper used to compare current document.readyState with [required](./src/ExpectedReadyState.ts).
```javascript
import { isReadyStateMatch } from "react-ready-state-effect";

isReadyStateMatch(undefined); // always true
isReadyStateMatch("complete"); // true if strict equal document.readyState
isReadyStateMatch(["interactive", "complete",]); // true if document.readyState equal some
```

## Contributors
- [Alexander <horat1us> Letnikow](mailto:reclamme@gmail.com)

## License
[MIT](./LICENSE)
