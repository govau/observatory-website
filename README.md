## Start front end

Run the following commands:

```
$ npm i
$ npm run start
```

### Edit content

All content can be found in the `/content` folder. It is contained in markdown files. View the [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for more information.

### Creating new pages

New pages can be with markdown files. For example to create a contact page, follow these steps:

1. In the `content` folder, create a new folder called `contact-us`.
2. In the `content/contact-us` folder, create a new file named contact.md
3. Add the following content to the page

```
---
path: /contact
title: Contact Us
createPage: true
---

# Contact the team

To get into contact with the team, please email at abc@example.com
```

The `path` attribute is the URL and the `title` attribute is for the [title](https://www.w3schools.com/tags/tag_title.asp) of the page.

### Create new blog

In the blogs folder create a new markdown file as before.

Blogs require the following frontmatter to sit at the top of the page.

```
---
path: /blogs/my-blog-1
title: Blog-1
createPage: true
type: blog
description: Some random desc
date: 01-01-2020
---
```

#### Add page to main navigation/footer navivation

To add links to new pages in the main nav bar or the footer, follow these steps:

1. Open up the `gatsby-config.js` file.
2. Find the `menuLinks` key for main nav links and the `footerLinks` key for the footer items.
3. If you want to add a main nav link to the contact page we created above, add an object to the `menuLinks` key.

#### Before

```
 menuLinks: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "/about",
      },
    ]
```

#### After

```
menuLinks: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "/about",
      },
      {
        text: "Contact",
        link: "/contact",
      },
    ],
```

The footer links can be updated in a similar way using the `footerLinks` key in the `gatsby-config.js` file.
