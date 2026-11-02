let x = 1;

        function changeBackground(url) {
            const background = document.querySelector(".bg");
            background.style.backgroundImage = `url("${url}")`;
        }

        function toggleMenu() {
            const menu = document.getElementById("menu-bar");
            menu.classList.toggle("active");
        }