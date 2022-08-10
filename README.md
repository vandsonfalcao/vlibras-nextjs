# vlibras-nextjs

Componente React para implatação  do plugin <a href="https://www.gov.br/governodigital/pt-br/vlibras" target="_blank">VLibras</a> em aplicações <a href="https://nextjs.org/" target="_blank">Nextjs</a>.

## Instalação

```sh
npm i vlibras-nextjs
ou
yarn add vlibras-nextjs
```
## Como usar

Aplicações React
>app.js

Reprodução: <a href="https://vlibras-nextjs-on-react-example.vercel.app/" target="_blank">vlibras-nextjs-on-react-example</a>

```js
import VLibras from 'vlibras-nextjs';

function App() {
  return (
    <div className="App">
      <VLibras forceOnload />
    </div>
  );
}

export default App;
```

Aplicações Next
>index.tsx

Reprodução: <a href="https://vlibras-nextjs-example.vercel.app/" target="_blank">vlibras-nextjs-example</a>

```ts
import type { NextPage } from "next";
import VLibras from "vlibras-nextjs";

const Home: NextPage = () => {
  return (
	  <div>
		{/* only worked in production in tests with nextjs applications maybe you can solve this! */}
		{process.env.NODE_ENV === "production" && <VLibras forceOnload />}
    </div>
  );
};

export default Home;
```

## Obrigado aos colaboradores!!!
