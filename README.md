# react-next-toast v3.0 🍞

A premium, modern notification system for React applications. Inspired by the refined design language of **Linear**, **Vercel**, and **Raycast**.

[![npm version](https://img.shields.io/npm/v/react-next-toast.svg?style=flat-square)](https://www.npmjs.com/package/react-next-toast)
[![license](https://img.shields.io/npm/l/react-next-toast.svg?style=flat-square)](https://github.com/eimaam/react-next-toast/blob/main/LICENSE)

## ✨ Features

- **Premium Aesthetics**: Glassmorphism surfaces with subtle blur, translucent borders, and refined animations.
- **Intelligent Stacking**: Notifications stack elegantly with customizable gaps and responsive positioning.
- **Semantic Variants**: Beautifully crafted Success, Error, Warning, Info, and Loading states with matching icons.
- **Imperative & Declarative**: Use the standalone `toast` API or the `useToast` hook.
- **Promise Support**: Handle async states with ease using `toast.promise`.
- **Lightweight & Fully Typed**: Zero external styling dependencies, built with TypeScript.

## 🚀 Getting Started

### Installation

```bash
npm install react-next-toast
```

### Setup

Add the `ToastProvider` to your app root to enable context-based features and global configuration react requires...

```jsx
import { ToastProvider } from 'react-next-toast';

function App() {
  return (
    <ToastProvider position="bottom-right" theme="dark">
      <Component {...pageProps} />
    </ToastProvider>
  );
}
```

## 📖 Usage

### Simple Usage

```javascript
import { toast } from 'react-next-toast';

// Simple toast
toast("Hello world!");

// Variant toasts
toast.success("Yo! Saved successfully");
toast.error("Something went wrong");
toast.warning("Check your settings...");
toast.info("New update just dropped!!");
toast.loading("Loading..."); [NEW]
```

### Advanced Usage

```javascript
toast.success("Saved successfully", {
  description: "Your changes have been applied to all workspaces.",
  duration: 4000,
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
});
```

### Async Promises

```javascript
const myPromise = fetchData();

toast.promise(myPromise, {
  loading: 'Fetching data...',
  success: (data) => `Loaded ${data.name}!`,
  error: 'Could not fetch data.',
});
```

### Standalone API

No context? No problem. The `toast` API works anywhere in your application, even outside of React components.

```javascript
import { toast } from 'react-next-toast';

// this automatically injects a container if not found
toast.success("Build complete!");
```

## 🎨 Global Configuration

Configure the default behavior via the `ToastProvider` or `toast.configure`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `ToastPosition` | `bottom-right` | Position on desktop. Mobile defaults to `top-center`. |
| `theme` | `'light' \| 'dark'` | `dark` | Visual theme of the toasts. |
| `maxVisible` | `number` | `5` | Maximum number of toasts visible at once. |
| `gap` | `number` | `12` | Spacing between stacked toasts in pixels. |

## 🛠 Backwards Compatibility:

v3.0 preserves the legacy `showToast` API for a zero-effort upgrade path. Existing calls will automatically use the new premium design.

```javascript
import { showToast } from 'react-next-toast';

showToast.success('Log in successful');
```

### Contribution
Project is Open-Sourced! Wanna contribute? Feel free to fork the repo and send a PR. I will be sure to merge if its a good piece. Thank you!

Thank you for using `react-next-toast`! 🙏❤️ If you experience any issue, have any questions or sugestions for improvement, feel free to raise an issue here on GitHub or reach out to me. Your feedback is very vital! ☺:)

Cheers to toasting to simpler and delightful notes! 🥂


## 📄 License

MIT © [Imam Dahir Dan-Azumi](https://eimaam.dev)
