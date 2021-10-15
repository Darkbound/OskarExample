# Nextjs Boilerplate

This is a starter template for [Nextjs](https://nextjs.org) app which uses [TypeScript](https://www.typescriptlang.org/) and [Styled Components](https://styled-components.com/). The entire app is also documented using Storybook. 

## What is Nextjs

Nextjs is a Server Side Rendering framework for React which just means that React, which runs in the client side only (CSR) can now be run on the server as well. So just like traditional web apps, we can generate HTML pages from React on the server side and send them to the browser where the pages get rehydrated into a React app. Nextjs is not a library but a full blown full stack framework so it has it's own routing mechanism, api setup and other rules/implementations of it's apps that are enforced.

## CSR vs SSR vs SSG

All three approaches for creating web apps have their use cases and there's places where one approach might even prove to be better than the other. If an app sits behind an authentication layer and none of it's pages can be viewed publicly, it doesn't need SSR/SSG and therefore a simple client side rendered React app would do just fine.

## Repository Setup

The first thing we need is a new repository.

> For the steps below, it is assumed that this project is hosted on Github and therefore, all the stuff below would explain how to do it on Github only.

The first step towards writing scalable and manageable apps is having them hosted on a DVS Distributed Versioning System) like Git. So, here's what we do:

- Add a new repository on Github
- Clone that empty repository down or initialize an empty git repository locally and then add the remote repository as the origin, you will find the instructions on how to do it when you create a new repo.

Once we have a repository going, we can then start adding issues, assignees, reviewers and milestones to the app. 

### Issues

When you open a repo, you should find some tabs on the top of the page. One of those tabs is **Issues**. This is where you create tickets for bugs, new features, improvements or general questions about a project/library. You will find this tab on every public project on Github and there will be hundreds if not thousands of issues opened for some popular libraries. 

>Do keep in mind that you can't **DELETE** and issue on Github and you can only **CLOSE** it. A closed issue indicates that the issue has been resolved whether it's by answering a question, adding a bug fix or a new feature. Before we start creating issues, there's other things that need explaining which are going to be used while creating one.

> If you'd prefer a cleaner UI for Issue tracking, there's an alternative called Clickup also available.

### Milestones

Milestones with Github work exactly how they work for every other project. One benefit of using milestones with Github for our project is that issues can be linked to them and their progress can be tracked visually. A milestone could indicate progress on a certain part of our app whether it's about design, the frontend or the backend of the app. Unlike the tab for **Issues** which is present on the main repo, you will find the milestones page inside the **Issues** tab on the right of where you create a new issue.

### Reviewers

When there's more people working on a project, a hierarchy is created and there's senior developers who will review every single piece of code that's coming in. If you own the repository, most probably you'll be reviewing everything yourself. Reviewers are there to enforce the rules that the team/individual agreed on when they started out. All intentional/unintentional mistakes can be fixed before the code ends up in the main branch.

### Assignees

Issues are normally assigned to an individual before they start working on them. Most of the times, people would scroll through the list of issues and if they find one that they can resolve, they'll assign it to themselves and start working on it.

### Projects

Projects is a rather new addition to Github and it's a much better way of managing a project. You can have multiple projects for a repository where each project could indicate a particular part of the app. So, we could have a project for designs where design issues would be highlighted, same for frontend and backend.

> A Project is a drag and drop UI where we have columns like Trello and each column has issues inside it in the shape of cards. This makes it much easier to manage the repo when we have hundreds of issues present at one time.

> There are some alternatives available for something like Projects that teams were using before Projects got introduced. One of those alternatives is Zenhub which works almost the same way as Projects do. You can integrate it into Github which will add a Zenhub tab to the main repo page.

### Pull Requests

In order to understand what Pull Requests are, one must first know how branching works in Git because both things are related. Whenever you want to work on a bug fix or a new feature, you always create a new branch. Once you're done with the update, you push it on your branch and then you open a Pull Request or a PR.

> Note that the code you push on a branch doesn't automatically eget added to the main branch (which is master/main in most cases), you have to open a PR, ask the person with permissions to merge it to the main branch.

> The Issue you attach to a PR will automatically be closed once your PR is merged to the main branch.

### Creating A New Issue

Here's the general steps we have to follow to create an issue on a Github repository:

- Go to the Issues tab and create a new issue
- Assign Reviewers
- Add Assignees
- Add the issue to a Milestone
- Add the issue to a Project if it exists
- If you have a Pull Request open, assign that PR to the issue

## Browser Recommendation

I would personally recommend using Firefox Developer Edition when working with the frontend of your apps. You can develop your backend using Firefox as well but Chrome works fine as well. Firefox has some amazing tools built in the browser specifically for frontend developers that have helped me a lot in my frontend development.

## Visual Code Setup

Before we start working on the newly cloned repo, there's some extensions that we should install to help us be more productive.

### Very Important Extensions

- Prettier
- ESLint
- Version Lens
- VSCode Styled Components
- Settings Sync
- GitLens
- Git Graph
- Code Spell Checker
- Debugger for Chrome/Firefox
- Azure Databases

### Some Cool Optional Recommendations

- Todo Tree
- GitHub Pull Requests and Issues
- Remote - SSH
- Remote - WSL
- Remote Development
- GraphQL (If you're using it)
- Docker (If you're using it)

## Third Party Packages

Frontend development has one major concern and that's the app's bundle size. And all frontend developes in my opinion should have a phobia regarding it cause we want faster load times for our apps which will end up in better user retention. It's very common seeing developers going for third party packages for the smallest of things which might save them some development time but the end users are going to suffer downloading several MBs of unnecessary JavaScript and CSS. So, it's good to set a limit/criteria on these packages to keep the bundle sizes of our app in check. Websites like [Package Phobia](https://packagephobia.com) and [Bundle Phobia](https://www.bundlephobia.com) can help determine how much overhead a package is going to add to our app.

## Package Managers

I personally recommend using Yarn for all React apps if not every single app because of the advanced features built into it that npm is still lacking. This command will install Yarn as a global package which will allow it to be used anywhere

```
npm install -g yarn
```

It's fine if you want to continue using NPM. Note that Workspaces is a Yarn exclusive thing so you'll need it if you're working with monorepos.

## Module Bundlers

Most frameworks choose to go with Webpack as it's the most popular module bundler out there. But there's some other good ones like Rollup and Parcel. Parcel is a very smart bundler and it will auto detect the app you're building and set up a config for it. That's also why it requires very minial configuration out of the box compared to the other bundlers.