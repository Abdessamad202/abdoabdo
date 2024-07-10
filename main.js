let aside = document.querySelector("aside");
let menuBtn = document.querySelector(".bx-menu");
let main = document.querySelector("main");

menuBtn.addEventListener("click", () => {
    aside.classList.toggle("show");
    main.classList.toggle("change");
})
// Select all elements with class "title" that are direct children of elements with class "dropdown"
let dropdownTitles = document.querySelectorAll('.dropdown > .title');

dropdownTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Toggle the "activated" class on the clicked title
        title.classList.toggle('activated');
        
        // Toggle the "down" class on the next sibling element (the <ul> dropdown)
        let dropdown = title.nextElementSibling;
        if (dropdown) {
            dropdown.classList.toggle('down');
        }

        // Close other dropdowns
        dropdownTitles.forEach(otherTitle => {
            if (otherTitle !== title) {
                otherTitle.classList.remove('activated');
                let otherDropdown = otherTitle.nextElementSibling;
                if (otherDropdown) {
                    otherDropdown.classList.add('down');
                }
            }
        });
    });
});
let search = document.querySelector(".search1");
    let searchbtn = document.querySelector(".ss");
    searchbtn.addEventListener("click", () => {
        search.classList.toggle("show1");
    });

