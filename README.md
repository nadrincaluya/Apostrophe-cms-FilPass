# ApostropheCMS essentials starter kit

## Getting started
When cloned follow these steps

1. npm install.

2. nvm install 18.

3. nvm use 18.

4. export APOS_MONGODB_URI="mongodb+srv://sampleuser:admin123@cluster0.fgzqdmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0". You can change the mongobd uri if you want.

5. npm run dev



## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode." The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## Making it your own

This boilerplate is designed so you can install and start running it right away. If you are starting a project that will go into production one day, there are a few things you should be sure to check:

- [ ] **Update the shortname.** You don't need to perform this step if you created your project using the CLI tool. The `shortname` option in `app.js` is used for the database name (unless another is given in the `@apostrophecms/db` module). You should change this to an appropriate project name before you start adding any users or content you would like to keep.
- [ ] **Update the Express.js session secret.** The secret is set to `undefined` initially in the `modules/@apostrophecms/express/index.js` file. You should update this to a unique string.
- [ ] **Decide if you want hot reloading on.** This boilerplate uses nodemon to restart the app when files are changed. In `modules/@apostrophecms/asset/index.js` there is an option enabled to refresh the browser on restart. If you like this, do nothing. If you don't, remove the option or set it to `false`. The option has no effect when the app is in production.
- [ ] **Update the `className` options in `app.js`.** This option is set for core widget types to provide CSS styling hooks. It is namespaced with `bp-` for "boilerplate." You will likely want to update that to match your general CSS class naming practices.

## You really want the docs

Right now, [all the juicy info is in the ApostropheCMS docs](https://docs.apostrophecms.org), so head over there and start reading! This boilerplate project is a fun introduction to the UI, but you'll want to know more to really try it out.

