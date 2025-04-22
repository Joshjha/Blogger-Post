/* 
#################
    * BLOG *
#################
*/

let postList = document.querySelector("#post-list");
let postTitle = document.querySelector("#post-title");
let postContent = document.querySelector("#post-content");

let addPostBtn = document.querySelector("#add-post");
addPostBtn.addEventListener("click", addPost);

// This is to focus on the Blog title textarea,
// when create post is clicked.
let itemToShiftfocus = document.querySelector(".focus");
itemToShiftfocus.addEventListener("click", function() {
    postTitle.focus();
})

function addPost() {
    // ensure text areas are not left empty!
    if (postTitle.value === "" || postContent.value === "") {
        alert("Please fill out all the areas");
        return;
    }

    // start selecting items and classNames
    let blogContainer = document.createElement("div");
    blogContainer.className = "blog-container"; //add a class to the div

    let blogTitle = document.createElement("h3");
    blogTitle.className = "blog-title"; //add a class to the h3 tag

    let blogContent = document.createElement("p");
    blogContent.className = "blog-content"; //add a class the paragraph tag


    let button = document.createElement("button");
    button.className = "buttons";
    // let editBtn = document.createElement("edit-btn");
    // let deleteBtn = document.createElement("delete-btn");
    let editBtn = document.createElement("div");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    let deleteBtn = document.createElement("div");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";
       

    //      Fill the area with content      \\
    // so here we're saying, the textContent of 
    // the title of the new blog post should be
    // be what the user/blogger enters in postTitle
    blogTitle.textContent = postTitle.value;
    blogContent.textContent = postContent.value;

    // append the new blogTitle/Content to the container
    blogContainer.appendChild(blogTitle);
    blogContainer.appendChild(blogContent);
    blogContainer.appendChild(editBtn);
    blogContainer.appendChild(deleteBtn);
    
    // now append the blogContainer into the postList
    postList.appendChild(blogContainer);

    // empty the textarea
    postTitle.value = "";
    postContent.value = "";

    // edit-button
    editBtn.addEventListener("click", function() {
        // for the value entered for both blog title & content,
        // to return to the text area, for editing
        postTitle.value = blogTitle.textContent;
        postContent.value = blogContent.textContent;
        
        // now, we want to remove it from the added list
        postList.removeChild(blogContainer);
    })
    

    // delete-button
    deleteBtn.addEventListener("click", function(){
        postList.removeChild(blogContainer);
    })
    
    // console.log(blogContainer);

}


/* 
###################
    * REVIEWS *
###################
*/

let reviews = [
    {
        id: 1,
        img: "./images/pic8_.png",
        name: "Daisy-Dey",
        job: "Ux Designer",
        info: "Creativity meets functionality! It's fulfilling to design user-friendly experiences, but convincing stakeholders about design choices can be challenging"
    },
    {
        id: 2,
        img: "./images/pic3_.png",
        name: "John",
        job: "Software Developer",
        info: "Great career growth opportunities, but deadlines can be intense. The best part is solving real-world problems with code!"
    },
    {
        id: 3,
        img: "./images/pic4_.png",
        name: "William",
        job: "IT Support Specialist",
        info: "You get to help people daily, but troubleshooting the same issues repeatedly can be tiring. Still, it's rewarding when users appreciate your help!"
    },
    {
        id: 4,
        img: "./images/pic5_.png",
        name: "Samuel",
        job: "Data Analyst",
        info: "Diving into data and finding insights is exciting. The challenge? Dealing with messy datasets and last-minute requests!"
    },
    {
        id: 5,
        img: "./images/pic7_.png",
        name: "Jenny",
        job: "DevOps Engineer",
        info: "Fast-paced, automation-focused, and always something new to learn. Balancing development and operations can be tricky, though!"
    }

]

// set starting item
let currentItem = 0;

let img = document.querySelector("#person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector(".info");

// the buttons
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");


window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
})

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
        
})

prevBtn.addEventListener("click", function() {
    currentItem --;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);

})

randomBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    showPerson(currentItem);
    currentItem = randomNumber;
    console.log(randomNumber);
})


// show person based on item
function showPerson(currentItem) {

    const item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;

}


/* 
###########
* END *
###########
*/