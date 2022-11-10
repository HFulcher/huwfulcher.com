
import { defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineStaticConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,   // Get this from tina.io
  token: process.env.TINA_TOKEN || null,      // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "_posts",
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
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Description",
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
            type: "boolean",
            name: "published",
            label: "Published",
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
      {
        name: "projects",
        label: "Projects",
        path: "_projects",
        fields: [
          {
            type: "string",
            name: "layout",
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
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "redirect",
            label: "Redirect",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: false,
          },
        ],
      },
    ],
  },
});
