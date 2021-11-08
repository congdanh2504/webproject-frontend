import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const getCompany= (setCompany, pageNumber = 1)=>{
    axios({
      method: 'GET',
      url: `${BASE_URL}employer?pageNumber=${pageNumber}`,
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      setCompany(response.data)
    })
}