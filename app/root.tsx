import { Links, LiveReload, Outlet, LinksFunction, Link } from "remix";
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
        <Link to="/" title="Remix Jokes">
          <h1>JOKES!</h1>
        </Link>
        <Link to="/jokes/new" title="new joke">
          <h3>Add new Joke</h3>
        </Link>
        <Link to="/jokes" title="new joke">
          <h3>All Jokes</h3>
        </Link>
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
