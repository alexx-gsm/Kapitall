window.onload = function () {
    var buttonProfile = document.getElementById('button-profile');

    buttonProfile.addEventListener("click", function () {
        var profileMenu = document.getElementById('profile-menu');
        var contentShadow = document.getElementById('content-shadow');

        profileMenu.classList.toggle("hide");
        contentShadow.classList.toggle("hide");
    })
};