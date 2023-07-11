# react-todo-list-app
This is a **Todo List** app with Vite+React.js, and tailwindcss hosted on Vercel (https://react-todo-list-app-kappa.vercel.app/).

## Getting Started
**Step 1.**

With NPM:
```bash
npm create vite@latest
```
With Yarn:
```bash
yarn create vite
```
With PNPM:
```bash
pnpm create vite
```

*Project name*:  . and hit enter. (DOT to create app in current folder)

*Select a framework*: React

*Select a variant*: JavaScript

To install the dependencies
```bash
npm install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Next go to **`src`>`App.jsx`** and write your code here.

## Install tailwindcss
Stop `npm run dev` with Ctrl+C.

Using PostCSS:


```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure your template paths:

`tailwind.config.js`:

```bash
........
content: ["./index.html",
          "./src.**/*.{js,ts,jsx,tsx}",]
........
```

Add the Tailwind directives to your CSS:

`src/index.css`:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


Open `http://localhost:5173/` with your browser to see the result.

**Step 2.** create some components in src folder:

![todoList 1](https://github.com/broto1234/react-todo-list-app/assets/73961811/c77c0c77-e4ef-483c-a8ea-3e001a634a53)

The project structure will be like this:

![todoList 2](https://github.com/broto1234/react-todo-list-app/assets/73961811/4159b7d4-a0c7-4960-9c27-2aa98165e531)

## Some topics used in this project:

**useState** Hook- Data create and manage by a component.

**useEffect** Hook- perform side-effects in component.

Save Data to **Local Storage**:
```bash
localStorage.setItem(key, value);
```

Read Data from Local Storage:
```bash
const anyName = localStorage.getItem(key);
```
The **Spread (...)** Operator- allows to quickly copy all or part of array or object into another array or object. 

**crypto.randomUUID()**- to generate random unique id. It is three times faster than uuid and no need to add extra dependencies. 

**event.preventDefault()**- to avoid the browser submitting the form to the server (which is the default behavior).

## Deploy this project on Vercel with GitHub

**Step 3.** First open `GitHub` account and create a new Repository.

Then copy from `GitHub` below the codes, and add to `Terminal`:
```bash
git remote add arigin https://.....
git branch -M main
```
```bash
git add .
```
```bash
git commit -m initial
```
```bash
git push  -u origin main
```


**Step 4.** To deploy the Repository on **Vercel**, open the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) with GitHub account. 

Then `Add New` > `project` >  react-github-user-search  `Import`> `Deploy`.

Initial look:
![todoList 3 1](https://github.com/broto1234/react-todo-list-app/assets/73961811/4715e763-6286-4970-9ec5-9cd134c52094)

If you add some lists here, final look of the project will be like this:
![todoList 3 2](https://github.com/broto1234/react-todo-list-app/assets/73961811/6659653a-5fa5-49b6-b52b-f333c9486bae)

## Learn More

To learn more about React, Vite, and tailwindcss, take a look at the following resources:

- [React.js Documentation](https://react.dev/learn) - learn about React.js features.
- [Learn Vite](https://vitejs.dev/guide/) - Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects

- [Tailwind CSS](https://tailwindcss.com/)-rapidly build modern websites without ever leaving your HTML.
