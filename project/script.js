var namev,datev,agev,genderv,yearv,clgnamev,emailv,cityv,contactv,parentv;
function readForm()
{
    namev=document.getElementById("name").value;
    datev=document.getElementById("date").value;
    agev=document.getElementById("age").value;
    genderv=document.getElementById("gender").value;
    clgnamev=document.getElementById("college").value;
    yearv=document.getElementById("year").value;
    emailv=document.getElementById("email").value;
    cityv=document.getElementById("city").value;
    contactv=document.getElementById("contact").value;
    parentv=document.getElementById("parent").value;
    console.log(namev,agev,genderv,yearv,clgnamev,emailv,cityv,contactv,parentv);
}
document.getElementById("insert").onclick=function()
{
    readForm();
    firebase.database().ref("student/"+namev).set({name:namev,date:datev,age:agev,gender:genderv,year:yearv,college:clgnamev,email:emailv,city:cityv,contact:contactv,parent:parentv,});
    alert("data inserted");
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("age").value="";
    document.getElementById("gender").value="";
    document.getElementById("college").value="";
    document.getElementById("year").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("contact").value="";
    document.getElementById("parent").value="";
};

document.getElementById("read").onclick=function()
{
    readForm();
    firebase.database().ref("student/"+namev).on("value",function(snap){
    document.getElementById("name").value=snap.val().name;
    document.getElementById("date").value=snap.val().date;
    document.getElementById("gender").value=snap.val().gender;
    document.getElementById("age").value=snap.val().age;
    document.getElementById("year").value=snap.val().year;
    document.getElementById("college").value=snap.val().college;
    document.getElementById("email").value=snap.val().email;
    document.getElementById("city").value=snap.val().city;
    document.getElementById("contact").value=snap.val().contact;
    document.getElementById("parent").value=snap.val().parent;

    });
};

document.getElementById("update").onclick=function(){
    readForm();
    firebase.database().ref("student/"+namev).update({age:agev,year:yearv,college:clgnamev,email:emailv,city:cityv,contact:contactv,parent:parentv,});
    alert("data updated");
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("gender").value="";
    document.getElementById("age").value="";
    document.getElementById("year").value="";
    document.getElementById("college").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("contact").value="";
    document.getElementById("parent").value="";
};


document.getElementById("delete").onclick=function(){
    readForm();
    firebase.database().ref("student/"+namev).remove();
    alert("data deleted");
    document.getElementById("name").value="";
    document.getElementById("gender").value="";
    document.getElementById("date").value="";
    document.getElementById("age").value="";
    document.getElementById("year").value="";
    document.getElementById("college").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("contact").value="";
    document.getElementById("parent").value="";
};