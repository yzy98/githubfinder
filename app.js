const github = new GitHub();
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener
searchUser.addEventListener('keyup', getInput);

// Get input text
function getInput(e) {
  const userText = e.target.value;

  if(userText !== '') {
    // console.log(userText);
    // Make HTTP resuqest from outside
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found:(', 'alert alert-danger');
        } else {
          // Show profile data.profile
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();

  }
}