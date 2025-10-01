module.exports = {
    // This is mandatory to load the standard set of ESLint rules, 
    // including 'no-console' and other base quality checks.
    extends: [
        'eslint:recommended'
    ],
    // FIX: Tells ESLint to recognize global browser objects 
    // (like window, document) and modern ES features.
    env: {
        browser: true, 
        node: true,
        es2021: true   
    },
    parserOptions: {
        ecmaVersion: 12, // Support ES2021 syntax
        sourceType: 'module'
    }
};
