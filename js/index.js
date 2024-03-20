document.addEventListener('DOMContentLoaded', function() {
    // Get Reference to hardcoded HTML:
    let dc = document.querySelector(".dynamic-Content");

    // Creating Data Resources:
    let data = {
        home: {
            title: "Home page",
            img: "home.jpg", // Provide image URL here
            altText: "Home page article",
            bodyText: "This is the body text for Home page."
        },
        about: {
            title: "About page",
            img: "about.jpg", // Provide image URL here
            altText: "About page article",
            bodyText: "This is the body text for About page."
        },
        contact: {
            title: "Contact page",
            img: "contact.jpg", // Provide image URL here
            altText: "Contact page article",
            bodyText: "This is the body text for Contact page."
        }
    };

    // Getting references to the list items:
    let lis = document.querySelectorAll(".controls li");

    let handleClick = (ev) => {
        let page = ev.target.innerText.toLowerCase();
        if (data[page]) {
            // Create html:
            let article = document.createElement("article");
            let title = document.createElement("h2");
            title.innerText = data[page].title;
            let img = document.createElement("img");
            img.src = data[page].img; // Dynamic URL:
            img.alt = data[page].altText;
            let pg = document.createElement("p");
            pg.innerText = data[page].bodyText;

            // Put the HTML together:
            article.appendChild(title);
            article.appendChild(img);
            article.appendChild(pg);
            dc.innerHTML = '';
            dc.appendChild(article);
            
            // Provide feedback and clear text box:
            document.getElementById('itemInput').value = ''; // Clear text box
            document.querySelector('.feedback').innerText = 'Page loaded successfully!'; // Feedback
        } else {
            console.error(`Data for ${page} not found.`);
        }
    };

    // Register each li for click:
    for (let li of lis) {
        li.addEventListener('click', handleClick);
    }

    // Save the reference to text-field into a variable.
    let itemInput = document.getElementById("itemInput");

    // Save the reference to new-item button into a variable.
    let addItemBtn = document.getElementById("addItemBtn");

    // Save the reference to unordered list into a variable.
    let itemList = document.getElementById("itemList");

    // Save the reference to paragraph for feedback.
    let feedback = document.querySelector(".feedback");

    // Start function addItem.
    function addItem() {
        // Create list-item and store output in a variable.
        let listItem = document.createElement("li");

        // Check if user entered the value in input text-field.
        if (itemInput.value.trim() !== '') {
            // Use textContent property on created list-item
            // and assign it with the value of the text written in the text-field
            listItem.textContent = itemInput.value.trim();

            // Append list item to unordered list.
            itemList.appendChild(listItem);

            // Clear a feedback-message.
            feedback.textContent = '';

            // Clear the text-field.
            itemInput.value = '';

            // Put the cursor back to text-field
            itemInput.focus();
        } else {
            // Print the message nothing entered in the paragraph "feedback"
            feedback.textContent = "Nothing entered!";
        }
    }
    // End function addItem.

    // Register your function addItem for click event on button.
    addItemBtn.addEventListener("click", addItem);
});