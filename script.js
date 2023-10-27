document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("nav a");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Hide all tab contents
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            // Show the selected tab content
            tabContents[index].classList.add("active");
        });
    });
});
