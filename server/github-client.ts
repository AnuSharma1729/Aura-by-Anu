import { Octokit } from '@octokit/rest'

export function getGitHubClient() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error('GITHUB_TOKEN must be set');
  }

  return new Octokit({ auth: token });
}
