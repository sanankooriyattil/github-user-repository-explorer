let debounceTimer;
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const usersList = document.getElementById('users-list');
const profileDetails = document.getElementById('profileDetails');
const searchButton = document.getElementById('searchButton');
const repoList = document.getElementById('repoList');
const loadingMessage = document.getElementById('loadingMessage');
async function searchUsers(searchText) {

    if (searchText === "") {
        
        return;
    }
    usersList.textContent = "";
    profileDetails.textContent = "";
    repoList.textContent = "";
    try {
        // const apiUrl = `https://invalid-github-api.example/users?q=${searchText}`;
    const apiUrl = `https://api.github.com/search/users?q=${searchText}`;
    // loadingMessage.textContent = "Searching GitHub users...";
    // console.log("Search text:", searchText);
    // console.log("API URL:", apiUrl);
    loadingMessage.hidden = false;
    // console.log("Spinner should be visible");
    // const startTime = performance.now();
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(apiUrl);
    // const endTime = performance.now();
    // const duration = endTime - startTime;
    // console.log("API fetching time:", duration, "ms");
    console.log(response.status);
    // console.log(response.ok);
    // console.log(response.headers);
    // console.log(response.headers.get("x-ratelimit-remaining"));
    // console.log("Limit:", response.headers.get("x-ratelimit-limit"));
    // console.log("Used:", response.headers.get("x-ratelimit-used"));
    // console.log("Fetch completed");
    // const resetTime = response.headers.get("x-ratelimit-reset");
    // console.log("Reset time:", resetTime);
    // console.log(new Date(resetTime * 1000));
    const data = await response.json();
     if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
    
    if (data.items.length === 0) {
    usersList.textContent = "No users found";
    return;}
    data.items.forEach(function(user) {

        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const userImage = document.createElement("img");
        userImage.src = user.avatar_url;
        userImage.alt = `${user.login}'s GitHub avatar`;
        userImage.classList.add("user-avatar");
        userCard.appendChild(userImage);

        const username = document.createElement("h3");
        username.textContent = user.login;
        userCard.appendChild(username);

        const profileLink = document.createElement("a");
        profileLink.href = user.html_url;
        profileLink.textContent = "View Profile";
        userCard.appendChild(profileLink);

        usersList.appendChild(userCard);

        profileLink.addEventListener("click", async function(event) {

            event.preventDefault();
            try{

            const profileUrl = `https://api.github.com/users/${user.login}`;
            const profileResponse = await fetch(profileUrl);
            const profileData = await profileResponse.json();
            if (!profileResponse.ok) {
            throw new Error(profileData.message || "Unable to fetch profile");
            }

            profileDetails.textContent = "";

            const profileName = document.createElement("h3");
            profileName.textContent = profileData.name || profileData.login;
            profileDetails.appendChild(profileName);

            const profileBio = document.createElement("p");
            profileBio.textContent = profileData.bio || "No bio available";
            profileDetails.appendChild(profileBio);

            const profileFollowers = document.createElement("p");
            profileFollowers.textContent = `Followers: ${profileData.followers}`;
            profileDetails.appendChild(profileFollowers);

            const profileRepos = document.createElement("p");
            profileRepos.textContent = `Repositories: ${profileData.public_repos}`;
            profileDetails.appendChild(profileRepos);

            const repoUrl = `https://api.github.com/users/${user.login}/repos`;
            const repoResponse = await fetch(repoUrl);
            const repoData = await repoResponse.json();
             if (!repoResponse.ok) {
            throw new Error(repoData.message || "Unable to fetch repositories");
            }
            repoList.textContent = "";

            repoData.forEach(function(repo) {

                const repoCard = document.createElement("div");
                repoCard.classList.add("repo-card");

                const repoName = document.createElement("h3");
                repoName.textContent = repo.name;
                repoCard.appendChild(repoName);

                const repoStars = document.createElement("p");
                repoStars.textContent = `Stars: ${repo.stargazers_count}`;
                repoCard.appendChild(repoStars);

                const repoLanguage = document.createElement("p");
                repoLanguage.textContent = `Language: ${repo.language || "Not specified"}`;
                repoCard.appendChild(repoLanguage);

                repoList.appendChild(repoCard);
                });
            }catch (error) {
           console.log(error);
           profileDetails.textContent = "Unable to load user profile or repositories.";
           }
        });

    
    });
    } 
      catch (error) {
        console.log("Error caught:", error);
        usersList.textContent = "Network failure or API limit reached";
       } finally {
        //  const endTime = performance.now();

        // const totalTime = endTime - startTime;

    //    console.log("Complete processing time:", totalTime.toFixed(2), "ms");
    //    console.log("Hiding spinner");
    //  setTimeout(function() {
    //     loadingMessage.hidden = true;
    // }, 2000);

        loadingMessage.hidden = true;
       }
    }
searchInput.addEventListener("input", function() {
    console.log("User is typing");
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout (async function() {
    const searchText = searchInput.value.trim();
        if (searchText === "") {
        usersList.textContent = "";
        profileDetails.textContent = "";
        repoList.textContent = "";
    return;
        }
    searchUsers(searchText);

}, 500);
});
searchForm.addEventListener("submit",async(event) => {
    event.preventDefault();
    clearTimeout(debounceTimer);
    const searchText=searchInput.value.trim();
    if(searchText=== ""){
        return;
    }
    searchUsers(searchText);
 
});

