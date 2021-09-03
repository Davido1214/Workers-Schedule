var dayEl = document.createElement("div")
var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
dayEl.append(currentDay)
document.getElementById("currentDay").appendChild(dayEl)


var dayTime = dayjs().hour()
console.log(dayTime)

var saveInfo = function() {
    setInterval(function(){
       alert("HI") 
    },300000)
}

if(dayTime >= 17 && dayTime <= 24){
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
};

var descId = [
    "description2",
    "description3",
    "description4",
    "description5",
    "description6",
    "description7",
    "description8",
    "description9"
]

var descripSave = [
    "#description",
    "#description2",
    "#description3",
    "#description4",
    "#description5",
    "#description6",
    "#description7",
    "#description8",
    "#description9"
]

if(dayTime >= 9 && dayTime < 10) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description").classList.add("present")
    for(i=0;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
    
    
}
else if (dayTime >= 10 && dayTime < 11) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description2").classList.add("present")
    for(i=1;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 11 && dayTime < 12) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description3").classList.add("present")
    for(i=2;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 12 && dayTime < 13) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description4").classList.add("present")
    for(i=3;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 13 && dayTime < 14) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description5").classList.add("present")
    for(i=4;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 14 && dayTime < 15) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description6").classList.add("present")
    for(i=5;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 15 && dayTime < 16) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description7").classList.add("present")
    for(i=6;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 16 && dayTime < 17) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description8").classList.add("present")
    for(i=7;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 17 && dayTime < 18) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("past")
    })
    document.getElementById("description9").classList.add("present")
    for(i=8;i<10;i++){
        document.getElementById(descId[i]).classList.add("future")
    }
}
else if (dayTime >= 0 && dayTime < 9) {
    document.getElementsByName("1").forEach((element,index)=>{
        element.classList.add("future")
    })
    // document.getElementById("description9").classList.add("present")
    // for(i=8;i<10;i++){
    //     document.getElementById(descId[i]).classList.add("future")
    // }
}

btnArray = [
    "save1",
    "save2",
    "save3",
    "save4",
    "save5",
    "save6",
    "save7",
    "save8",
    "save9"
]

    for(i=0;i<10;i++){
        document.getElementById(btnArray[i]).addEventListener("click",function(){
        console.log("Theres the click")

        var textInput = document.querySelector(descripSave[0]).value;
        var textInput2 = document.querySelector(descripSave[1]).value;
        var textInput3 = document.querySelector(descripSave[2]).value;
        var textInput4 = document.querySelector(descripSave[3]).value;
        var textInput5 = document.querySelector(descripSave[4]).value;
        var textInput6 = document.querySelector(descripSave[5]).value;
        var textInput7 = document.querySelector(descripSave[6]).value;
        var textInput8 = document.querySelector(descripSave[7]).value;
        var textInput9 = document.querySelector(descripSave[8]).value;

        if(textInput.value== null){
            textInput.value = "asd"
        }
        else if(textInput2==null){
            textInput2.value = "s"
        }
    
        
        localStorage.setItem("areaInput",textInput)
        localStorage.setItem("areaInput1",textInput2)
        localStorage.setItem("areaInput2",textInput3)
        localStorage.setItem("areaInput3",textInput4)
        localStorage.setItem("areaInput4",textInput5)
        localStorage.setItem("areaInput5",textInput6)
        localStorage.setItem("areaInput6",textInput7)
        localStorage.setItem("areaInput7",textInput8)
        localStorage.setItem("areaInput8",textInput9)

        })
        break;
    }
    
    

    var local1 = localStorage.getItem("areaInput")
    var local2 = localStorage.getItem("areaInput1")
    var local3 = localStorage.getItem("areaInput2")
    var local4 = localStorage.getItem("areaInput3")
    var local5 = localStorage.getItem("areaInput4")
    var local6 = localStorage.getItem("areaInput5")
    var local7 = localStorage.getItem("areaInput6")
    var local8 = localStorage.getItem("areaInput7")
    var local9 = localStorage.getItem("areaInput8")

    if(local1== null){
        local1 = ""
    }
     if (local2 == null){
        local2 = ""
    }
    if (local3 == null){
        local3 = ""
    }
    if (local4 == null){
        local4 = ""
    }
    if (local5 == null){
        local5 = ""
    }
    if (local6 == null){
        local6 = ""
    }
    if (local7 == null){
        local7 = ""
    }
    if (local8 == null){
        local8 = ""
    }
    if (local9 == null){
        local9 = ""
    }
    
    document.getElementById("description").append(local1)
    document.getElementById("description2").append(local2)
    document.getElementById("description3").append(local3)
    document.getElementById("description4").append(local4)
    document.getElementById("description5").append(local5)
    document.getElementById("description6").append(local6)
    document.getElementById("description7").append(local7)
    document.getElementById("description8").append(local8)
    document.getElementById("description9").append(local9)
    


if(dayTime >= 0 && dayTime <= 0){
    localStorage.clear()
}
saveInfo()