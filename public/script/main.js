console.log("REPTILOIDY HI!");

var profiles = [{
    name: "Tyrone Waugh",
    summary: "Oh, hi Mark!",
    links: {
        facebook: "#",
        dribble: "#",
        behance: "#",
        twitter: "#",
    },
    image: "./images/Tyrone.jpg",
    id: "0"
}, {
    name: "Barack Obama",
    summary: "Oh, hi Barack!",
    links: {
        facebook: "#",
        vk: "#",
        behance: "#",
        odnoklassniki: "#",
    },
    image: "./images/barak.jpg",
    id: "1"
}, {
    name: "Luke Obama",
    summary: "Oh, hi Luke!",
    links: {
        vseti: "#",
        vk: "#",
        behance: "#",
        tinder: "#",
    },
    image: "./images/luke.png",
    id: "2"
}];

var activeID = undefined;

function generateProfileElements() {
    var profilesContainer = document.getElementsByClassName('profiles')[0];
    var mainImage = document.createElement('img');
    var profileRow = document.createElement('div');

    profileRow.classList.add('profileRow');

    profileRow.appendChild(document.createElement('h3'));
    profileRow.appendChild(document.createElement('p'));

    var socialMediaContainer = document.createElement('div');
    socialMediaContainer.classList.add('socialMedia');

    profileRow.appendChild(socialMediaContainer);

    var photoContainer = document.createElement('div');
    photoContainer.classList.add('photo');

    profileRow.appendChild(photoContainer);

    mainImage.setAttribute('src', '');
    mainImage.setAttribute('alt', '');

    profilesContainer.appendChild(mainImage);
    profilesContainer.appendChild(profileRow);
}

function fillProfileContainerWithData(profiles) {
    if (!profiles || profiles.length == 0) {
        console.log("Error! Incorrect data!!!");
        return false;
    }

    activeID = 0;
 
    document.querySelector('.profiles > img').setAttribute('src', profiles[activeID].image);
    document.querySelector('.profiles h3').innerHTML = profiles[activeID].name;
    document.querySelector('.profiles p').innerHTML = profiles[activeID].summary;

    var linkContainer = document.querySelector('.socialMedia');

    for (var prop in profiles[activeID].links) {
        var newLink = document.createElement('a')
        
        newLink.innerHTML = prop;
        newLink.setAttribute('href', profiles[activeID].links[prop]);

        linkContainer.appendChild(newLink);
    } 
      
    var imgContainer = document.querySelector('.profiles .photo');

    for (var i = 1; i < profiles.length; i++) {
        var newPhoto = document.createElement('img');
    
        newPhoto.setAttribute('src', profiles[i].image);
        newPhoto.setAttribute('id', profiles[i].id);
        imgContainer.appendChild(newPhoto);
    }

    return true;
}

function imgClickEventHandler(e) {
    var currentProfileID = Number(e.target.getAttribute('id'));

    setActiveProfile(currentProfileID);

    e.target.remove();
}

generateProfileElements();
fillProfileContainerWithData(profiles);

function setActiveProfile(profileID) {
    console.log('Active ID: ' + activeID);
    console.log('New ID: ' + profileID);

    document.querySelector('.profiles > img').setAttribute('src', profiles[profileID].image);
    document.querySelector('.profiles h3').innerHTML = profiles[profileID].name;
    document.querySelector('.profiles p').innerHTML = profiles[profileID].summary;

    var linkContainer = document.querySelector('.socialMedia');

    while (linkContainer.firstChild) {
        linkContainer.removeChild(linkContainer.firstChild);
    }

    for (var prop in profiles[profileID].links) {
        var newLink = document.createElement('a');
        
        newLink.innerHTML = prop;
        newLink.setAttribute('href', profiles[profileID].links[prop]);

        linkContainer.appendChild(newLink);
    }

    var imgContainer = document.querySelector('.profiles .photo');

    var newPhoto = document.createElement('img');

    newPhoto.setAttribute('src', profiles[activeID].image);
    newPhoto.setAttribute('id', profiles[activeID].id);

    newPhoto.addEventListener('click', imgClickEventHandler);

    imgContainer.appendChild(newPhoto);

    activeID = profileID;
}

document.querySelectorAll('.profiles .photo > img').forEach(function(img) {
    img.addEventListener('click', imgClickEventHandler);
});