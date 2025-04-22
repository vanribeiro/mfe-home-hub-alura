import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

/* webpackIgnore: true */

registerApplication({
  name: "@home-hub/hello-world",
  app: () =>
    System.import<LifeCycles>(
       "@home-hub/hello-world"
    ),
  activeWhen: ["/hello"],
});

start({
  urlRerouteOnly: true,
});
