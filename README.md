# React TypeScript Boilerplate

A modern, production-ready React TypeScript boilerplate with a comprehensive tech stack.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Data Fetching**: TanStack Query + Axios
- **Forms**: React Hook Form + Zod validation
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui
- **Internationalization**: i18next
- **Utilities**: env-cmd, Sass, Prettier

## 📦 Features

- ✅ Modern React 19 with TypeScript
- ✅ Fast development with Vite HMR
- ✅ Type-safe form handling with React Hook Form + Zod
- ✅ Global state management with Zustand
- ✅ Server state management with TanStack Query
- ✅ Beautiful UI components with shadcn/ui
- ✅ Responsive design with Tailwind CSS v3
- ✅ Multi-language support with i18next
- ✅ Dark/Light theme support
- ✅ API integration with Axios
- ✅ Code formatting with Prettier
- ✅ Path aliases configured
- ✅ Production environment configuration

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp env.example .env
```

4. Start development server:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── DemoPage.tsx    # Main demo page
│   ├── DemoForm.tsx    # Form demo component
│   ├── UsersList.tsx   # API demo component
│   └── ThemeProvider.tsx
├── i18n/               # Internationalization
│   ├── locales/        # Translation files
│   └── index.ts        # i18n configuration
├── lib/                # Utility libraries
│   ├── api.ts          # Axios configuration
│   ├── queryClient.ts  # React Query configuration
│   └── utils.ts        # General utilities
├── services/           # API services
│   └── userService.ts  # User API service
├── store/              # Zustand stores
│   └── useThemeStore.ts
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run dev:prod` - Start development server with production env
- `npm run build` - Build for production
- `npm run build:prod` - Build with production environment
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🌐 Environment Variables

Create a `.env` file based on `env.example`:

```env
# API Configuration
VITE_API_URL=https://jsonplaceholder.typicode.com

# Environment
VITE_NODE_ENV=development

# Feature Flags
VITE_ENABLE_DEVTOOLS=true
```

## 🎨 UI Components

This project uses shadcn/ui components. Currently included:

- Button
- Input
- Form components

To add more components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🌍 Internationalization

The project supports multiple languages using i18next. Translation files are located in `src/i18n/locales/`.

To add a new language:

1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to the `resources` object in `src/i18n/index.ts`

## 🎭 Theme Support

The project includes a theme system with support for:

- Light mode
- Dark mode
- System preference

Theme state is managed with Zustand and persisted in localStorage.

## 📊 State Management

### Global State (Zustand)

- Theme preferences
- Other global application state

### Server State (TanStack Query)

- API data fetching
- Caching and synchronization
- Loading and error states

## 🛡️ Form Validation

Forms use React Hook Form with Zod for type-safe validation:

```typescript
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [TanStack Query](https://tanstack.com/query) for server state management
- [Zustand](https://github.com/pmndrs/zustand) for client state management
