const body = `{
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}`;

const graphql = () => {
  fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer `,
    },
    body: JSON.stringify(body),
    // }).then((resp) => {
    //   console.log(JSON.stringify(resp));
  });
};

export { graphql };
