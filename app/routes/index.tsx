import { LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

const Home = () => {
  return <div>Hello index</div>;
};

export default Home;
