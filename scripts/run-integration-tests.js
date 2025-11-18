#!/usr/bin/env node

/**
 * Integration Tests for DoItWriteNow
 * These tests run on the development branch to ensure new features work correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Integration Tests...\n');

// Test 1: Check if build output exists
function testBuildOutput() {
    console.log('📦 Testing build output...');
    const buildPath = path.join(__dirname, '..', 'build');

    if (!fs.existsSync(buildPath)) {
        throw new Error('Build directory does not exist');
    }

    const files = fs.readdirSync(buildPath);
    if (files.length === 0) {
        throw new Error('Build directory is empty');
    }

    console.log('✅ Build output test passed');
}

// Test 2: Check if essential files exist
function testEssentialFiles() {
    console.log('📄 Testing essential files...');

    const essentialFiles = [
        'src/app.html',
        'src/routes/+page.svelte',
        'package.json',
        'svelte.config.js',
        'vite.config.ts'
    ];

    for (const file of essentialFiles) {
        const filePath = path.join(__dirname, '..', file);
        if (!fs.existsSync(filePath)) {
            throw new Error(`Essential file missing: ${file}`);
        }
    }

    console.log('✅ Essential files test passed');
}

// Test 3: Check component structure
function testComponentStructure() {
    console.log('🧩 Testing component structure...');

    const componentsDir = path.join(__dirname, '..', 'src/lib/components');
    if (!fs.existsSync(componentsDir)) {
        throw new Error('Components directory does not exist');
    }

    const components = fs.readdirSync(componentsDir);
    const svelteFiles = components.filter(file => file.endsWith('.svelte'));

    if (svelteFiles.length === 0) {
        throw new Error('No Svelte components found');
    }

    console.log(`✅ Found ${svelteFiles.length} Svelte components`);
}

// Test 4: Check routes structure
function testRoutesStructure() {
    console.log('🛣️  Testing routes structure...');

    const routesDir = path.join(__dirname, '..', 'src/routes');
    if (!fs.existsSync(routesDir)) {
        throw new Error('Routes directory does not exist');
    }

    const routes = fs.readdirSync(routesDir);
    const pageFiles = routes.filter(file => file.includes('+page.svelte'));

    if (pageFiles.length === 0) {
        throw new Error('No page files found');
    }

    console.log(`✅ Found ${pageFiles.length} page routes`);
}

// Test 5: Check package.json scripts
function testPackageScripts() {
    console.log('📋 Testing package.json scripts...');

    const packagePath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    const requiredScripts = ['dev', 'build', 'check'];

    for (const script of requiredScripts) {
        if (!packageJson.scripts[script]) {
            throw new Error(`Required script missing: ${script}`);
        }
    }

    console.log('✅ Package scripts test passed');
}

// Test 6: Check TypeScript configuration
function testTypeScriptConfig() {
    console.log('🔧 Testing TypeScript configuration...');

    const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');
    if (!fs.existsSync(tsconfigPath)) {
        throw new Error('tsconfig.json does not exist');
    }

    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
    if (!tsconfig.compilerOptions) {
        throw new Error('TypeScript compiler options missing');
    }

    console.log('✅ TypeScript configuration test passed');
}

// Run all tests
async function runIntegrationTests() {
    const tests = [
        testEssentialFiles,
        testComponentStructure,
        testRoutesStructure,
        testPackageScripts,
        testTypeScriptConfig,
        testBuildOutput
    ];

    let passed = 0;
    let failed = 0;

    for (const test of tests) {
        try {
            await test();
            passed++;
        } catch (error) {
            console.error(`❌ ${test.name} failed: ${error.message}`);
            failed++;
        }
    }

    console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

    if (failed > 0) {
        console.error('❌ Integration tests failed!');
        process.exit(1);
    } else {
        console.log('✅ All integration tests passed!');
    }
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
    console.error('💥 Uncaught exception during testing:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 Unhandled rejection during testing:', reason);
    process.exit(1);
});

// Run the tests
runIntegrationTests().catch((error) => {
    console.error('💥 Test runner failed:', error);
    process.exit(1);
});
