import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@home-hub/hello-world",
  app: () =>
    System.import<LifeCycles>(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@home-hub/hello-world"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
