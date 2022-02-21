This is a [Next.js](https://nextjs.org/) project bootstrapped for Assignment 1

## Getting Started
1. Create new or use existing your [github](https://github.com) account.
2. Login to your [github](https://github.com) account and create new repository.
3. Create first commit of your download project to your own git repository there are 2 alternative ways to create your first commit.
   1. Use GUI Software: [GitHub Desktop](https://desktop.github.com), [SourceTree](https://desktop.github.com), [GitKraken](https://www.gitkraken.com)
   2. Use git cli: Install [Git CLI](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
      1. For ssh url you need to set up your ssh key to your git account (If you already set up for another project please skip this step) Please see [Set SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for more details.
      2. For https url you need to create [PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to use as your password.
```bash
git init
# Add all files to commit
git add -A
git commit -m "first commit"
# Set branch to main
git branch -M main
# Set remote url and push
git remote add origin [[ YOUR REPOSITORY URL : https or ssh ]]
git push -u origin main
```
4. Go to your repository and go to **Settings** > **Collaborators** then click Add People to add `theerat@muze.co.th` to collaborate your project.
5. Install Nodejs and Yarn to install node_modules: [Nodejs](https://nodejs.org/en/download/) and [Yarn (Optional)](https://yarnpkg.com/getting-started/install)
```bash
npm install
# or
yarn
```
Note: If installed complete you will see node_modules folder in Project

2. run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
3. You can start editing the page by modifying `pages/index.tsx` and `styles/globlas.css` with any IDE you want. The page auto-updates as you edit the file.
4. Commit your finished code to
5. You need to deploy to your complete website to [Vercel Platform](https://nextjs.org/docs/deployment). Please see [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
6. Turn in your project on Google Classroom with 2 links
   1. git repository url (e.g. `https://github.com/{{username}}/{{project_name}}`)
   2. vercel deployment url (e.g. `https://{{project_name}}.vercel.app`)

---
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
