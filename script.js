const form=document.getElementById("contactForm");

form.addEventListener('submit',function(e)
{
  
        const toast=document.getElementById('toast');
        toast.classList.add("show");
        setTimeout(()=>{
            toast.classList.remove("show");
        },3000);
});