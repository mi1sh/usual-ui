<div align="center">
<h1><b>Usual-UI</b></h1>
<h4><b>Usual-UI</b> is a comprehensive library of React components designed to simplify the development of modern web applications. Built with a focus on usability and customization, this library provides a set of components that are easy to integrate into any React project. The components are styled with TailwindCSS, allowing for rapid styling and customization.</h4>
</div>

## ✨Features
- **Component-based architecture**: Usual UI is built on React, leveraging its component-based approach for a modular and scalable design.
- **TypeScript support**: Components are written in TypeScript, ensuring type safety and enhancing developer experience with autocompletion and type checking.
- **TailwindCSS integration**: Utilizes TailwindCSS for rapid styling, allowing developers to easily customize the appearance of components.


## 💿Installation | Usage
To install Usual UI in` your project, you can use either npm or yarn.

### Using npm:

```bash
npm install usual-ui
```

### Using yarn:

```bash
yarn add usual-ui
```

After installation, you can import and use the components in your project.

```jsx
import { Button, Text, Input, Box, Stack } from 'usual-ui';

// Use the components in your application
```

Additionally, you can use **Tailwindcss** styles by combining them with **Usual-UI** styles:
```jsx
<Text variant="outline" className="text-amber-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
```

The **Stack** component allows you to arrange child components in a row or column, depending on the selected argument:
```jsx
<Stack direction="row" gap="md" className="bg-gray-400">
	<Box variant="outline">First</Box>
	<Box variant="outline">Second</Box>
	<Box variant="outline">Third</Box>
</Stack>
```
<div align="center">

![stack-example](https://github.com/mi1sh/usual-ui/assets/106558234/94e64030-cb50-4496-92fa-23d2bc75a23b)
</div>

In this library I have added **4 types of buttons**, you can change the style of the button using the "variant" attribute:
```jsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="underline">Underline</Button>
```
<div align="center">

![buttons-example](https://github.com/mi1sh/usual-ui/assets/106558234/11fff3d1-cac6-412d-93d4-9f544c9ba1dd)
</div>

## 📚Components

- <**Button**>: A customizable button component | _**attrs**. = variant, size, weight_
- <**Text**>: A component for displaying text with various styles | _**attrs**. = variant, size, weight, emphasis, align, italic, underline_
- <**Input**>: A flexible input component that supports various types and customization |
- <**Box**>: A layout component that can be used to create flexible layouts | _**attrs**. = variant, size, align_
- <**Stack**>: A component for stacking elements vertically or horizontally | _**attrs**. = direction, gap_

## 🛠️Tools Used

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **[Vitest](https://vitest.dev/)**: A testing framework for Vite projects, offering a fast and efficient way to test components. 
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: A lightweight solution for testing React components, encouraging best practices.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs. 
- **[Storybook](https://storybook.js.org/)**: An open-source tool for developing UI components in isolation. 

## ©️ License

**Usual-UI** is open-source software licensed under the [MIT License](LICENSE).
