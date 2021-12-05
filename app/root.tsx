import { LiveReload } from "remix";

const App = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Hello</title>
      </head>
      <body>
        <div>
          <h1>HELLO WORLD!!!!</h1>
        </div>

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
