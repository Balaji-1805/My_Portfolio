const form=document.getElementById("contactForm");

form.addEventListener('submit',function(e)
{
   e.preventDefault();
   const formdata=new FormData(this);
   fetch("https:formsubmit.co/ugginabalaji2003@gmail.com",{
    method:"POST",
    body:formdata,
    headers:{Accept:"application/json"},
   }).then((res)=>{
        const toast=document.getElementById('toast');
        toast.classList.add("show");
        setTimeout(()=>{
            toast.classList.remove("show");
        },3000);
        this.reset();
   });
});