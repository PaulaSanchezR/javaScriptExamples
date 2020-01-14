// console.log("hello")
function animatedForm(){

  const arrows= document.querySelectorAll(".fa-arrow-down")
  arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
          // bring the previews sibiling
        const input = arrow.previousElementSibling;
        const parent=arrow.parentElement;
        const nextForm = parent.nextElementSibling;
        console.log(parent) ;
        // checl for validation
        if(input.type === "text" && validateUser(input)){
            nextSlide(parent,nextForm);
        } else if(input.type === 'email' && validateEmail(input)){
            nextSlide(parent,nextForm);
        } else if(input.type === 'passport' && validateUser(input)){
            nextSlide(parent, nextForm)
        }else {
            parent.style.animation="shake 0.5s ease"
        }
        //get rid of animation ,remove the animation
        parent.addEventListener('animationend', () => {
            parent.style.animation = "";
        })
  })
})
}

function validateUser(user){
    if(user.value.length < 6){
        console.log('not enough characters');
        error('rgb(189,87,87')
    }else{
        error('rgb(87,189,130)');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (validation.test(email.value)){
        error('rgb(87,189,130)');
        return true;
    }else {
        error('rgb(189,87,87')

    }
}

function nextSlide(parent, nextForm){
    // we are going to add the class nnactive to parent and remove the active class
    // transition out
    parent.classList.add('innactive')
    parent.classList.remove('active');
    // transition in
    nextForm.classList.add('active');        
}

function error(color){
    document.body.style.backgroundColor = color
}

animatedForm()