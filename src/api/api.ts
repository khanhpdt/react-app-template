import axios from "axios";

function ping() {
  return axios.get("http://localhost:8000/ping");
}
