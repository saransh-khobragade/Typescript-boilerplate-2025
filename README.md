# TypeScript + ESLint + Prettier Boilerplate

A clean, production-ready TypeScript project setup with strict ESLint rules, Prettier formatting, and modern tooling.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Development (watch mode)
yarn dev

# Build for production
yarn build

# Run built application
yarn start

# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Type checking
yarn type-check
```

## 🔧 Features

### **✅ TypeScript Configuration**

- **Strict mode enabled** - Maximum type safety
- **Modern ES2022** target
- **Node.js optimized** - Perfect for backend/CLI applications
- **Source maps** - Better debugging experience
- **Project references** - Scalable configuration

### **✅ ESLint Configuration**

- **Ultra-strict rules** - Catches bugs early
- **TypeScript ESLint** - Type-aware linting
- **Comprehensive rules** - Code quality enforcement
- **Prettier integration** - No formatting conflicts

### **✅ Prettier Configuration**

- **Consistent formatting** - Team-wide code style
- **Trailing commas** - Clean git diffs
- **Single quotes** - Consistent string formatting
- **2-space indentation** - Standard spacing
- **No function spacing** - Clean function declarations

## 📦 Installing VS Code Extensions

This project includes recommended extensions that will be automatically suggested when you open it in VS Code:

#### **Method 1: Via VS Code UI (Recommended)**

1. **Open VS Code** in your project directory
2. **Press `Cmd+Shift+P`** (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. **Type "Extensions: Show Recommended Extensions"** and press Enter
4. **Click "Install All"** or install them individually

#### **Method 2: Via Extensions Panel**

1. **Open VS Code**
2. **Press `Cmd+Shift+X`** (Mac) or `Ctrl+Shift+X` (Windows/Linux)
3. **Look for the "RECOMMENDED" section** at the top
4. **Click "Install All"** or install them individually

### Required VS Code Extensions

- **ESLint** (`dbaeumer.vscode-eslint`) - For ESLint integration
- **Prettier** (`esbenp.prettier-vscode`) - For code formatting
- **TypeScript** (`ms-vscode.vscode-typescript-next`) - For TypeScript support

## 🔍 Troubleshooting ESLint Issues

If you're not seeing ESLint errors in VS Code:

#### **1. Check if Extensions are Installed**

- Open Extensions panel (`Cmd+Shift+X` or `Ctrl+Shift+X`)
- Search for "ESLint" and ensure it's installed and enabled
- Look for a green checkmark next to the extension

#### **2. Reload VS Code**

- Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
- Type "Developer: Reload Window" and press Enter

#### **3. Check ESLint Status**

- Open the Output panel (`View > Output`)
- Select "ESLint" from the dropdown
- Look for any error messages

#### **4. Verify ESLint is Working**

- Open any `.ts` file
- Add `console.log('test');` - you should see a red squiggly line
- If you don't see errors, try restarting VS Code

## 🚨 Strict ESLint Rules

### **TypeScript Strict Rules**

- `@typescript-eslint/no-explicit-any` - Bans `any` type usage
- `@typescript-eslint/no-non-null-assertion` - Bans `!` non-null assertions
- `@typescript-eslint/no-unsafe-*` - Bans unsafe TypeScript operations
- `@typescript-eslint/prefer-nullish-coalescing` - Enforces `??` over `||`
- `@typescript-eslint/prefer-optional-chain` - Enforces `?.` over `&&`
- `@typescript-eslint/consistent-type-imports` - Enforces consistent import types
- `@typescript-eslint/no-floating-promises` - Bans unhandled promises

### **JavaScript Strict Rules**

- `no-console` - **ERROR**: Bans console statements
- `no-debugger` - **ERROR**: Bans debugger statements
- `no-eval` - **ERROR**: Bans eval usage
- `no-var` - **ERROR**: Bans var declarations
- `prefer-const` - **ERROR**: Enforces const over let
- `no-duplicate-imports` - **ERROR**: Bans duplicate imports
- `prefer-template` - **ERROR**: Enforces template literals
- `object-shorthand` - **ERROR**: Enforces object shorthand

### **Code Style Rules**

- `sort-imports` - **ERROR**: Enforces alphabetical import sorting
- `quotes` - **ERROR**: Enforces single quotes
- `semi` - **ERROR**: Enforces semicolons
- `comma-dangle` - **ERROR**: Enforces trailing commas
- `indent` - **ERROR**: Enforces 2-space indentation
- `no-spaced-func` - **ERROR**: Enforces no spaces before function parentheses

## 📝 Git Hooks

This project uses Husky for Git hooks:

- **Pre-commit**: Runs TypeScript type checking and ESLint validation
- **Commit-msg**: Validates commit messages follow conventional format

Valid commit message formats:

- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code refactoring`
- `test: add tests`
- `chore: maintenance tasks`

## 🎯 Project Structure

```
├── src/
│   └── main.ts          # Simple TypeScript function example
├── dist/                # Compiled JavaScript output
├── .husky/              # Git hooks configuration
├── .vscode/             # VS Code settings
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
├── .prettierrc          # Prettier configuration
└── package.json         # Project dependencies and scripts
```

## 🧪 Testing the Setup

Try these commands to verify everything is working:

```bash
# Test TypeScript compilation
yarn type-check

# Test ESLint
yarn lint

# Test Prettier
yarn format:check

# Test the application
yarn dev
```

## 🎉 Benefits

- **🔒 Maximum Type Safety** - Strict TypeScript configuration
- **🚫 Prevents Runtime Errors** - Comprehensive ESLint rules
- **🧹 Clean Code** - Consistent formatting and style
- **🛡️ Quality Gate** - Git hooks prevent bad commits
- **📈 Team Consistency** - Same standards across all environments
- **🚀 Production Ready** - Industry best practices
- **⚡ Simple & Clean** - Minimal boilerplate with maximum functionality

This setup ensures high-quality, maintainable TypeScript code with excellent developer experience!
