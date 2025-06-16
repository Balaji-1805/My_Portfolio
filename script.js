const toastMessage=document.getElementById('toast');
const form=document.getElementById("contactForm");

form.addEventListener('submit',function(e)
{
    toastMessage.className="show";
    setTimeout(()=>{
        toastMessage.className=toastMessage.className.replace("show","");
    },3000);
})