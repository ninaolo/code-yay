---
title: Deploy a react-static site to Github pages
date: "2018-09-18T18:45:00.000Z"
slug: deploy-react-static-site-to-gh-pages
---


Hello!

Having problems deploying your `react-static` app to Github pages? In this blog post I'll show you a basic boilerplate 
example. The code for this blog post can be found 
here: [https://github.com/ninaolo/react-static-github-pages-example](https://github.com/ninaolo/react-static-github-pages-example).

### Step 1: Set up template app
Go to [https://github.com/nozzle/react-static]() and follow the instructions on how to set up a basic app from one of 
their templates. I chose the [basic](https://github.com/nozzle/react-static/tree/master/examples/basic) template.

### Step 2: Add deploy script
To deploy this to github pages easily, you can create an npm command.

```bash
npm install --save-dev gh-pages
```

Then add the following to your `package.json` under `scripts`:

```json
{
    // Some other stuff..
    
    "scripts": {
        // Other scripts here...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    }
}
```

### Step 3: Deploy
You can now try deploying you app and see it live at [https://yourusername.github.io/repositoryname]().

Run:

```bash
npm run deploy
```

However, if you click one of the links (`Blog` for example) the path won't be relative to your base path, and you'll 
get a 404 error. Also, the app won't be styled at all because it will fail to fetch the resources (due to the same 
relative path issue).

<img src="/deploy-react-static-site-to-gh-pages-1.png" height="200px" title="Not working"/>

### Step 4: Fix routing issue
The solution is to add the following to your `static.config.js` file in the root directory:

```
export default {
    siteRoot: "https://yourusername.github.io",
    basePath: "repositoryname",
    
    // Other configs...
```

### Step 5: Yay it works!
Now you can try to run the deploy again, and you'll see that the problem is solved. You might need to run a hard reload 
in the browser to clear the cache and see the changes. And voilà, it works!

<img src="/deploy-react-static-site-to-gh-pages-2.png" height="200px" title="Working!"/>