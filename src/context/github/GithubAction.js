import axios from "axios";

export const searchUsers = async (text) => {
  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${text}`
  )
  return data.items;
};
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    axios.get(`https://api.github.com/users/${login}`),
    axios.get(`https://api.github.com/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
//getUserAndRepos;
