import { Links, LiveReload, Outlet, LinksFunction } from "remix";
import stylesUrl from "./styles/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

const App = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Remix App</title>
        <Links />
      </head>
      <body>
        <h1>JOKES!</h1>
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
