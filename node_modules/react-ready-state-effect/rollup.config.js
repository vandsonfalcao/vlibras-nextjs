import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import pkg from './package.json';

const extensions = [".ts", ".tsx",];

export default [{
    input: 'src/index.ts',
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        resolve({
            dedupe: [ 'react', ],
            extensions,
        }),
        babel({
            exclude: ['node_modules/**'],
            extensions,
        }),
    ],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' }
    ]
}];
