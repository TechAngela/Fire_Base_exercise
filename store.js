var rep = db.collection("Report");
var btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    addData();
});



function addData(){
    let user = {
        name: "Image",
        profImg: "https://res.cloudinary.com/drof5meln/image/upload/v1681932371/enjoyk/hvn2_dlvbkj.jpg",
    };
    rep.add(user);
}
