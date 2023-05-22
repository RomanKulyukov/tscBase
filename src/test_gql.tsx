const body = `query {
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
      //
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((resp) => {
    console.log(JSON.stringify(resp));
  });
};

export { graphql };
