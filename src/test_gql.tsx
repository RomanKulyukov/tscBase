const github_data = {
  token: "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",
  username: "romanKulyukov",
};
const fetch = require("node-fetch");
const body = {
  query: `
    query{
        user(login : ${github_data.username}){
            issues(first:10, orderBy:{field:CREATED_AT, direction:DESC}){
            nodes{
                title,
                body,
                closedAt
            }
        }
    }
}
`,
};
const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  Authentication: "bearer " + github_data.token,
};
fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body),
})
  .then((response: any) => {
    console.log(JSON.stringify(response));
  })
  .catch((err: any) => console.log(JSON.stringify(err)));
// const resp = async () => {
//   await fetch(baseUrl).then((resp) => resp.json());
// };

export {};
