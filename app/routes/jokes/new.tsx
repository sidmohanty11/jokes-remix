const NewJoke = () => {
  return (
    <div>
      new joke
      <form method="POST">
        <label htmlFor="name">Name: </label>
        <input placeholder="name" id="name" />
        <label htmlFor="content">Content: </label>
        <textarea id="content" placeholder="content"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewJoke;
