import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const getUsers = (setUsers, pageNumber = 1) => {
  axios({
    method: 'GET',
    url: `${BASE_URL}users?token=${getToken()}&pageNumber=${pageNumber}`,
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    setUsers(response.data)
  })
}