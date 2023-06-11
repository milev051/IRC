function handleImageClick(imageElement) {
    // Get the source and alt text of the clicked image
    var imageUrl = imageElement.getAttribute("src");
    var imageAlt = imageElement.getAttribute("alt");

    // Create the popup content
    var popupContent = document.createElement("div");
    popupContent.className = "popup-content";
    popupContent.innerHTML = `
        <img src="${imageUrl}" alt="${imageAlt}" class="popup-info">
        <h3>${imageAlt}</h3>
    `;

    // Create the popup container
    var popupContainer = document.createElement("div");
    popupContainer.className = "popup-container";
    popupContainer.appendChild(popupContent);

    // Append the popup container to the body
    document.body.appendChild(popupContainer);

    // Add event listener to close the popup when clicked outside the content
    popupContainer.addEventListener("click", function (event) {
        if (!popupContent.contains(event.target)) {
            document.body.removeChild(popupContainer);
        }
    });
}

function handlePopupImages() {
    var popupImages = document.querySelectorAll(".popup-info");

    popupImages.forEach(function (image) {
        image.addEventListener("click", function () {
            handleImageClick(image);
        });
    });
}

// Call the function to handle the popup images
handlePopupImages();
