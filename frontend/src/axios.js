import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/";
export default {
  name: "axios",
};
axios.get("/signup").then((Response) => {
  console.log(Response);
});
