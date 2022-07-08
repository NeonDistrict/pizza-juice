# 🍕 Pizza Juice

A Design System for React projects with the Neon District style guide.

## Install Instructions

First, install the dependencies.

```bash
$ yarn add @blockadegames/pizza-juice
```

And then add the provider in your application:

```tsx  title="/src/App.tsx"
import { ToastContainer } from '@blockadegames/pizza-juice';

export const App = () => {
  return (
    <SomeProviders>
      {/* a lot of providers/routing stuff */}
      <ToastContainer />
    </SomeProviders>
  );
};
```
