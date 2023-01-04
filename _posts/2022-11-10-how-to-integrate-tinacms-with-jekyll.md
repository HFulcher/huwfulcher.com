---
layout: post
title: How to integrate TinaCMS with Jekyll
description: A test
excerpt: Step-by-step on how to add TinaCMS to Jekyll.
published: true
---

## Introduction

[TinaCMS](https://tina.io ""), the successor to [Forestry](forestry.io "") has just gone to v1.0, bringing a stable, open-source, git based CMS to static sites. I've just started using TinaCMS with [my site](https://huwfulcher.com "") and I'm actually writing this post using it!

While there is [some documentation](https://tina.io/guides/tinacms/non-react-based-ssg/guide/ "") on adding TinaCMS to a non-NextJS site there are few extra steps that are needed to get it working nicely with Jekyll.

## 1. Install TinaCMS

1. `npx @tinacms/cli@latest init` *Note: Docs as of (10/11/2022) specify a --static flag, this is removed and won't work*
2. Choose whatever package manager is preferable
3. Choose `Other` when asked for a framework
4. (Optional) Use Typescript, it is recommended
5. When asked where public assets are stored specify the top level with `/`. Jekyll considers all folders that are not prefixed with `_` to be public. Storing tina in the `assets` folder will cause issues with pathing later on.

## 2. Configure TinaCMS

### a) Update package.json

Replace the content `scripts` with the following (or add based on what you need):

```
"dev": "tinacms dev -c \"bundle exec jekyll serve\"",
"build": "tinacms build && jekyll build",
```

Run `npm run dev` to check no errors are present. You should be able to navigate to `localhost:4000/admin/` and see the TinaCMS interface.

The `admin` folder should be at the top level of the directory.

### b) Edit schema

At this point TinaCMS is looking at `content/posts` for the `.md` files to display and edit. For Jekyll this path should be `_posts/`. To fix this we can edit the `config.ts` file in `.tina`.

#### i. Update media folder

TinaCMS supports uploading and embedding media in your markdown documents from the web editor. The `media` property in `config.ts` controls where this folder is placed. For Jekyll, this should be under `assets`. Change `media` to:

```
media: {
  tina: {
	mediaRoot: "uploads",
	publicFolder: "assets",
  },
},
```

You can change the `mediaRoot` name to whatever you like, this specifies the folder name under `assets`.

#### ii. Update schema path

Under `schema` the different types of content are defined as a list of `collections`. The only collection present when first creating TinaCMS is `post`. Each collection will have a `path` variable that defines where TinaCMS should look for the associated files. Update this to `_posts`.

Once done your `collections` should look like this:

```
collections: [
  {
    name: "post",
    label: "Posts",
    path: "_posts",
    fields: [
	  {
	    type: "string",
	    name: "title",
	    label: "Title",
	    isTitle: true,
	    required: true,
	  },
	  {
	    type: "rich-text",
	    name: "body",
	    label: "Body",
	    isBody: true,
	  },
    ],
  },
],
```

#### iii. Tidy up existing posts

Depending on if you're doing a fresh Jekyll install or already have an existing blog, TinaCMS prefers filenames to be `.md` rather than `.markdown`. Update those accordingly.

Now when you access `localhost:4000/admin/` and got `Posts` you should see your existing markdown files.

#### iv. Updating the schema

At this point you can happily use TinaCMS to update or create new markdown files but it will be restricted to only being able to interact with the title and body. If you have any additional frontmatter it will ignore it. To resolve this you can update the `fields` section of your `config.ts`. Using the starter jekyll site I've created one below:

```
fields: [
  {
    type: "string",
    name: "layout",
    label: "Layout",
    required: true,
  },
  { 
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  { 
    type: "datetime",
    name: "date",
    label: "Date",
    required: true,
  },
  { 
    type: "string",
    name: "categories",
    label: "Categories",
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
  },
],
```

Go ahead and try creating a new markdown file using the editor. You should see it appear in `_posts` but there's a snag... Jekyll requires a specific naming convention to know which markdown files it should show:

`YEAR-MONTH-DAY-title.md`

Thankfully, TinaCMS allows us to customise our own filename conventions. Add the following to your `post` collection just after `path`:

```
ui: {
  filename: {
    readonly: false,
    slugify: values => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      let currentDate = `${year}-${month}-${day}`;

      return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
    }
  }
},
```

This will take the title you specify, slugify it and prefix it with the current date. When you save files they will be in the correct format for Jekyll to find!

## Wrapping up

This just scratches the surface of the customisation you can do with TinaCMS. It has the ability to add custom components, fields, templates and a whole lot more. If something in this guide doesn't work get in touch with any of the social links below and I'll see if I can help.

## References

* [Non-React-based SSG support - TinaCMS Docs](https://tina.io/guides/tinacms/non-react-based-ssg/guide)
* [Filename customization - TinaCMS Docs](https://tina.io/docs/extending-tina/filename-customization)
* [Field Types - TinaCMS Docs](https://tina.io/docs/reference/types)
