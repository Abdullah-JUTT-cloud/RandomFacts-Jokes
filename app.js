let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact=await getfacts();
    let p=document.getElementById("result");
    p.innerText=fact;
});
async function getfacts() {
    try{
        let res=await axios.get("https://catfact.ninja/fact");
        return res.data.fact;
    }catch(err){
        console.log(err);
        return "NO facts found! sorry";
    }
}