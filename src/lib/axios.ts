import axios from "axios";

const token = {process.env.TOKEN_GITHUB}

export const api = axios.create(`https://api.github.com/users`);
