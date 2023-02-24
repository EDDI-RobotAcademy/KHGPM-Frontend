module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:vue/essential',
		'standard'
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'vue'
	],
	rules: {
		'vue/multi-word-component-names': ['error', {
			ignores: ['Home']
		}],
        'eslint-disable-next-line': "off",
        'eslint-disable': "off"
	}
}