let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
   let link=await getImg();
   let img=document.querySelector("#result");
   img.setAttribute("src",link);
})
let url="https://dog.ceo/api/breeds/image/random";
async function getImg(){
    try{
      let res=await axios.get(url);
      return res.data.message
    }
catch (e){
console.log("Error",e)
return "Couldn't Load Image"
}
}