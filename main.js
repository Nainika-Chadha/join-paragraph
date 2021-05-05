function Get_paragraph_1(){
data=[];
for(var i=1; i<=4;i++){
data.push(document.getElementById("td"+i).value);
}
document.getElementById("sp1").innerHTML=data.join(" . ");
}

function Get_paragraph_2(){
    data=[];
    for(var i=1; i<=4;i++){
    data.push(document.getElementById("t"+i).value);
    }
    document.getElementById("sp2").innerHTML=data.join(" . ");
    }