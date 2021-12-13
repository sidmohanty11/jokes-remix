import { db } from "~/utils/db.server";
import { LoaderFunction, useLoaderData } from "remix";

const Jokes = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>All Jokes !!!</h1>
      <p>
        {data.jokeListItems.map((j) => (
          <li key={j.id}>{j.name}</li>
        ))}
      </p>
    </div>
  );
};

type LoaderData = {
  jokeListItems: {
    id: string;
    name: string;
  }[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    jokeListItems: await db.joke.findMany(),
  };
  return data;
};

export default Jokes;
