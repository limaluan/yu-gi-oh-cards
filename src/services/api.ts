import axios from "axios";

export const api = axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
});
