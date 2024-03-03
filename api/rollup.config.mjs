import node from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import PACKAGE_JSON from './package.json' assert { type: 'json' };

export default {
	input: 'src/index.ts',
	output: {
		format: 'cjs',
		file: 'dist/index.js'
	},
	plugins: [
		node(),
		typescript({ noEmitOnError: false })
	],
	external: Object.keys(PACKAGE_JSON.dependencies)
};
