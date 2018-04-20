export default [{
  input: ['src/index.js'],
	output: {
		dir: 'dist/module',
    name: 'params.js',
		format: 'es',
		sourcemap: true
	},
	experimentalCodeSplitting: true,
	experimentalDynamicImport: true
}, {
  input: ['src/index.js'],
	output: {
		dir: 'dist/commonjs',
    name: 'params.js',
		format: 'cjs',
		sourcemap: true
	},
	experimentalCodeSplitting: true,
	experimentalDynamicImport: true
}]
