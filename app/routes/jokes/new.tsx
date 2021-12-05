const NewJoke = () => {
  return (
    <div>
      new joke
      <form method="POST">
        <div>
          <label htmlFor="name">Name: </label>
          <input placeholder="name" id="name" />
          <label htmlFor="content">Content: </label>
          <textarea id="content" placeholder="content"></textarea>
        </div>
      </form>
    </div>
  );
};

export default NewJoke;
