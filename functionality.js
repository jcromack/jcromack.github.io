function redirectToWebsite() {
    window.location.href = "https://birdapp-jcromack.onrender.com";
}

window.onload = function() {
    let expandableItems = document.getElementsByClassName("expandable");
  
    for (let i = 0; i < expandableItems.length; i++) {
        let arrow = expandableItems[i].getElementsByClassName("arrow")[0];
        let content = expandableItems[i].getElementsByClassName("content")[0];
        
        arrow.addEventListener("click", function() {
            let item = this.parentNode.parentNode.parentNode;  // navigate up to the 'expandable' li
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                content.style.maxHeight = null;  // collapse the content
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";  // expand the content
            }
        });
    }
}

