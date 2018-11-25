// const app = "I don't do much.";
const token = "062e933ec525f22bf373b7d418eb66aadbfdea33";

fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
