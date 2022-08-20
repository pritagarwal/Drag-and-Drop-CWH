console.log("This is drag and drop utility");

const imgBox = document.querySelector(".imgBox");
const whiteBoxs = document.getElementsByClassName("whiteBox");
//console.log(imgBox,whiteBoxs);


imgBox.addEventListener("dragstart",(e)=>{
    console.log("DragStart has been triggered");
    e.target.className+=" hold";
    setTimeout(()=>{
        e.target.className +=" hide";
    },0);
  //  console.log(e.target.className);

});

imgBox.addEventListener("dragend",(e)=>{
    console.log("DragEnd has been triggered");
    e.target.className=" imgBox";
  //  console.log(e.target.className);
});


for(whiteBox of whiteBoxs){

    whiteBox.addEventListener("dragover",(e)=>{
        console.log("I am in dragover");
        e.preventDefault();
    });

    whiteBox.addEventListener("dragenter",(e)=>{
        console.log("I am in dragenter");
        e.target.className+=" dashed";
    });

    whiteBox.addEventListener("dragleave",(e)=>{
        console.log("I am in dragleave");
        e.target.className = "whiteBox";
    });

    whiteBox.addEventListener("drop",(e)=>{
        console.log("I am in drop");
        e.target.append(imgBox);
        e.target.className = "whiteBox";

    });
}


