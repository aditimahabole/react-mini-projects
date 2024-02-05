const folders = {
  name: "root",
  isaFolder: true,
  items: [
    {
      name: "public",
      isaFolder: true,
      items: [{ name: "vite.svg", isaFolder: false }],
    },
    {
      name: "src",
      isaFolder: true,
      items: [
        {
          name: "assets",
          isaFolder: true,
          items: [{ name: "icon.png", isaFolder: false }],
        },
        {
          name: "components",
          isaFolder: true,
          items: [{ name: "Box.jsx", isaFolder: false }],
        },
        {
          name: "App.css",
          isaFolder: false,
        },
        {
          name: "App.jsx",
          isaFolder: false,
        },
        {
          name: "index.css",
          isaFolder: false,
        },
        {
          name: "main.jsx",
          isaFolder: false,
        },
      ],
    },
    {
      name: ".eslintrc.cjs",
      isaFolder: false,
    },
    {
      name: ".gitignore",
      isaFolder: false,
    },
    {
      name: "index.html",
      isaFolder: false,
    },
    {
      name: "package.json",
      isaFolder: false,
    },
  ],
};
export default folders;
