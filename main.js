const link = {
  github: 'sallesdopneu',
  youtube: 'UCqggc2DorfQQC8vjwiGLxIQ',
  facebook: 'maykbrito',
  instagram: 'kpop_a_mola',
  twitter: 'BDaqueles'
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${link[social]}`
  }
}

changeLinks()

function getGitHubInfos(){
  const url = `https://api.github.com/users/${link.github}`
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })


  
  //  userName.textContent(url) = 'data.login'
}


getGitHubInfos()
/*(id).textContent = 'aquele'
    IGUAL  = document.getElementById('(id)')*/