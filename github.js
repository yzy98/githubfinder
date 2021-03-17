class GitHub {
  constructor() {
    this.client_id = 'bfe8ed098764cb79cc07';
    this.client_secret = '2e96a387b7394941eb6b240770c86b2e51b388da';
    this.repos_count = 5;
    this.repos_sort = 'created_asc';
  }

  // GET
  async getUser(user) {
    const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await response.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}