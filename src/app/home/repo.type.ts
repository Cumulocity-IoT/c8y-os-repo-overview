
/**
 * @deprecated actually only here to get the type of the repo.json file
 */
async function getRepoJSON() {
  const repos = (await import('../../assets/repos.json')).default;
  return repos;
}

export type RepoEntry = Awaited<ReturnType<typeof getRepoJSON>>[number];
