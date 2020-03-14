<!-- /*拖放  */ --><!-- /*拖放  */ --><!-- /*拖放  */ --><!-- /*拖放  */ -->
function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}


<!-- /*拖放  */ --><!-- /*拖放  */ --><!-- /*拖放  */ --><!-- /*拖放 END */ -->












<!-- /*aa1 */ --><!-- /*aa1 */ --><!-- /*aa1 */ --><!-- /*aa1 */ -->
function aa1onClickChgiframeSrc()
{document.getElementById("aa1iframe").src = document.getElementById("aa1WebChgiframeSrc").value;}

function aa1c() {
    var r= new FileReader();
    var f=document.getElementById('aa1ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa1textarea').value=this.result;
    };
}

function aa1download(){
    var text = document.getElementById("aa1textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa1 END */ --><!-- /*aa1 END */ --><!-- /*aa1 END */ -->





<!-- /*aa2 */ --><!-- /*aa2 */ --><!-- /*aa2 */ --><!-- /*aa2 */ -->
function aa2onClickChgiframeSrc()
{document.getElementById("aa2iframe").src = document.getElementById("aa2WebChgiframeSrc").value;}

function aa2c() {
    var r= new FileReader();
    var f=document.getElementById('aa2ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa2textarea').value=this.result;
    };
}

function aa2download(){
    var text = document.getElementById("aa2textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa2 END */ --><!-- /*aa2 END */ --><!-- /*aa2 END */ -->


<!-- /*aa3 */ --><!-- /*aa3 */ --><!-- /*aa3 */ --><!-- /*aa3 */ -->
function aa3onClickChgiframeSrc()
{document.getElementById("aa3iframe").src = document.getElementById("aa3WebChgiframeSrc").value;}

function aa3c() {
    var r= new FileReader();
    var f=document.getElementById('aa3ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa3textarea').value=this.result;
    };
}

function aa3download(){
    var text = document.getElementById("aa3textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa3 END */ --><!-- /*aa3 END */ --><!-- /*aa3 END */ -->


<!-- /*aa4 */ --><!-- /*aa4 */ --><!-- /*aa4 */ --><!-- /*aa4 */ -->
function aa4onClickChgiframeSrc()
{document.getElementById("aa4iframe").src = document.getElementById("aa4WebChgiframeSrc").value;}

function aa4c() {
    var r= new FileReader();
    var f=document.getElementById('aa4ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa4textarea').value=this.result;
    };
}

function aa4download(){
    var text = document.getElementById("aa4textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa4 END */ --><!-- /*aa4 END */ --><!-- /*aa4 END */ -->

<!-- /*aa5 */ --><!-- /*aa5 */ --><!-- /*aa5 */ --><!-- /*aa5 */ -->
function aa5onClickChgiframeSrc()
{document.getElementById("aa5iframe").src = document.getElementById("aa5WebChgiframeSrc").value;}

function aa5c() {
    var r= new FileReader();
    var f=document.getElementById('aa5ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa5textarea').value=this.result;
    };
}

function aa5download(){
    var text = document.getElementById("aa5textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa5 END */ --><!-- /*aa5 END */ --><!-- /*aa5 END */ -->

<!-- /*aa6 */ --><!-- /*aa6 */ --><!-- /*aa6 */ --><!-- /*aa6 */ -->
function aa6onClickChgiframeSrc()
{document.getElementById("aa6iframe").src = document.getElementById("aa6WebChgiframeSrc").value;}

function aa6c() {
    var r= new FileReader();
    var f=document.getElementById('aa6ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa6textarea').value=this.result;
    };
}

function aa6download(){
    var text = document.getElementById("aa6textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa6 END */ --><!-- /*aa6 END */ --><!-- /*aa6 END */ -->

<!-- /*aa7 */ --><!-- /*aa7 */ --><!-- /*aa7 */ --><!-- /*aa7 */ -->
function aa7onClickChgiframeSrc()
{document.getElementById("aa7iframe").src = document.getElementById("aa7WebChgiframeSrc").value;}

function aa7c() {
    var r= new FileReader();
    var f=document.getElementById('aa7ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa7textarea').value=this.result;
    };
}

function aa7download(){
    var text = document.getElementById("aa7textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa7 END */ --><!-- /*aa7 END */ --><!-- /*aa7 END */ -->

<!-- /*aa8 */ --><!-- /*aa8 */ --><!-- /*aa8 */ --><!-- /*aa8 */ -->
function aa8onClickChgiframeSrc()
{document.getElementById("aa8iframe").src = document.getElementById("aa8WebChgiframeSrc").value;}

function aa8c() {
    var r= new FileReader();
    var f=document.getElementById('aa8ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa8textarea').value=this.result;
    };
}

function aa8download(){
    var text = document.getElementById("aa8textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa8 END */ --><!-- /*aa8 END */ --><!-- /*aa8 END */ -->

<!-- /*aa9 */ --><!-- /*aa9 */ --><!-- /*aa9 */ --><!-- /*aa9 */ -->
function aa9onClickChgiframeSrc()
{document.getElementById("aa9iframe").src = document.getElementById("aa9WebChgiframeSrc").value;}

function aa9c() {
    var r= new FileReader();
    var f=document.getElementById('aa9ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa9textarea').value=this.result;
    };
}

function aa9download(){
    var text = document.getElementById("aa9textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa9 END */ --><!-- /*aa9 END */ --><!-- /*aa9 END */ -->


<!-- /*aa10 */ --><!-- /*aa10 */ --><!-- /*aa10 */ --><!-- /*aa10 */ -->
function aa10onClickChgiframeSrc()
{document.getElementById("aa10iframe").src = document.getElementById("aa10WebChgiframeSrc").value;}

function aa10c() {
    var r= new FileReader();
    var f=document.getElementById('aa10ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aa10textarea').value=this.result;
    };
}

function aa10download(){
    var text = document.getElementById("aa10textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
<!-- /*aa10 END */ --><!-- /*aa10 END */ --><!-- /*aa10 END */ -->











<!-- /*aaaaaaa001 */ --><!-- /*aaaaaaa001 */ --><!-- /*aaaaaaa001 */ -->
function aaaaaaa001onClickChgiframeSrc()
{document.getElementById("aaaaaaa001iframe").src = document.getElementById("aaaaaaa001WebChgiframeSrc").value;}

function aaaaaaa001c() {
    var r= new FileReader();
    var f=document.getElementById('aaaaaaa001ChgtextareaSrc').files[0];
    r.readAsText(f,"uft8");
    r.onload=function() {
        document.getElementById('aaaaaaa001textarea').value=this.result;
    };
}

function aaaaaaa001download(){
    var text = document.getElementById("aaaaaaa001textarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = " ";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
 
 
 



<!-- /*aaaaaaa001 END */ --><!-- /*aaaaaaa001 END */ --><!-- /*aaaaaaa001 END */ -->






<!-- /*_Atw202003131241 */ --><!-- /*_Atw202003131241 */ -->



}





<!-- /*_Atw202003131241 END */ --><!-- /*_Atw202003131241 END */ -->
