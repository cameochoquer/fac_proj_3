//count number of characters in text area
var comment = document.getElementById("userComment");
var counter = document.getElementById("counter");
const list = document.getElementById("submission");

comment.addEventListener("input", countChar);

function countChar (){
    var characters = comment.value.split('');
    counter.innerText = characters.length

//color comment box when limit is reached
    if (characters.length>140){
        document.getElementById("userComment").style.borderColor= "red";
    };
};

//when submit is clicked get the values from the boxes
const addComment = document.forms['myForm'];

addComment.addEventListener('submit',function(e){
    e.preventDefault();
    var name = addComment.querySelector('input[type="text"]').value;
    var email = addComment.querySelector('input[type="email"]').value;
    var commenter = comment.value;

//create new elements
    const li = document.createElement("li");
    var newName = document.createElement('span');
        newName.className="submission";
    var newEmail = document.createElement('span');
        newEmail.className="submission";
    var newComment = document.createElement('span');
        newComment.className="submission";


//add values into the new elements
newName.textContent = "name: " + name;
newEmail.textContent = "email: "+email;
newComment.textContent = "comment: "+commenter; 

//add the new elements to the right place
li.appendChild(newName);
li.appendChild(newEmail);
li.appendChild(newComment);
list.appendChild(li);
   
});



