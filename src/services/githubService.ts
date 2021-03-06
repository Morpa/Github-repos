import axios from 'axios'

import { axiosGetCancellable } from 'helpers/axiosHelper'

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET
  }
}

function isServer() {
  return typeof window === 'undefined'
}

function searchRepos(searchText: string, language?: string) {
  const query = language ? `${searchText}+language:${language}` : searchText

  if (isServer()) {
    return axios.get(
      `search/repositories?q=${query}&sort=stars&order=desc`,
      axiosConfig
    )
  }

  return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`)
}

function getRepo(id: string) {
  return axios.get(`repositories/${id}`, axiosConfig)
}

function getProfile(username: string) {
  return axios.get(`users/${username}`, axiosConfig)
}

export { searchRepos, getRepo, getProfile }
