const root = document.querySelector("#root");
root.style.width = "100%";

const logo = document.createElement("img");

root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";
root.style.flexDirection = "row";

logo.src = "images/mobitel.png";
root.appendChild(logo);

logo.style.marginTop = "10px";
logo.style.marginLeft = "-25px"
logo.style.width = "400px";
logo.style.height = "580px";

const login = document.createElement("div");

root.appendChild(login);

login.style.marginTop = "-120px";
login.style.width = "335px";
login.style.height = "435px";
login.style.border = "1px solid grey";
login.style.marginLeft = "28px"



login.style.display = "flex";

login.style.flexDirection = "column";



const insta = document.createElement("img");
insta.src = "images/instagram.png";
insta.style.width = "180px";
insta.style.height = "60px";
insta.style.marginTop = "50px";
insta.style.marginLeft = "65px";

login.appendChild(insta);


const user = document.createElement("input");
const pw = document.createElement("input");


login.appendChild(user);
login.appendChild(pw);

user.placeholder = "Phone number, username or email";
pw.placeholder = "Password";

user.style.position = "absolute";
user.style.width = "260px";
user.style.height = "30px";
user.style.marginTop = "160px";
user.style.marginLeft = "30px";


pw.style.position = "absolute";
pw.style.width = "260px";
pw.style.height = "30px";
pw.style.marginTop = "200px";
pw.style.marginLeft = "30px";


const prijava = document.createElement("a");
login.appendChild(prijava);

prijava.textContent = "Log in";
prijava.href = "#";
prijava.style.backgroundColor = "rgb(182, 193, 255)";
prijava.style.color = "#fff";
prijava.style.fontFamily = "Helvetica";
prijava.style.fontSize = "16px";
prijava.style.fontWeight = "700";
prijava.style.display = "flex";
prijava.style.alignItems = "center";
prijava.style.justifyContent = "center";
prijava.style.width = "270px";
prijava.style.lineHeight = "38px";
prijava.style.textDecoration = "none";
prijava.style.marginTop = "136px";
prijava.style.marginLeft = "30px";
prijava.style.borderRadius = "6px";


const or = document.createElement("span");
login.appendChild(or);

or.textContent = "OR";
or.style.color = "grey";
or.style.marginLeft = "153px"
or.style.fontSize = "14px";
or.style.marginTop = "15px";


const face = document.createElement("img");
login.appendChild(face);


face.src = "images/Screenshot_1.png";
face.style.width = "180px";
face.style.marginLeft = "75px";
face.style.marginTop = "25px";
face.style.height = "27px";


face.addEventListener("mouseover", (e) => {
    e.currentTarget.style.cursor = "pointer";

});

face.addEventListener("mouseout", (e) => {
    e.currentTarget.style.textDecoration = "none";
});


const forgot = document.createElement("span");
login.appendChild(forgot);
forgot.textContent = "Forgot password?";
forgot.style.fontSize = "12px";
forgot.style.fontFamily = "Helvetica";
forgot.style.marginLeft = "117px";
forgot.style.marginTop = "27px";


forgot.addEventListener("mouseover", (e) => {
    e.currentTarget.style.cursor = "pointer";

});

forgot.addEventListener("mouseout", (e) => {
    e.currentTarget.style.textDecoration = "none";
});


insta.addEventListener("mouseover", (e) => {
    e.currentTarget.style.cursor = "pointer";

});

insta.addEventListener("mouseout", (e) => {
    e.currentTarget.style.textDecoration = "none";
});



const signUp = document.createElement("div");


root.appendChild(signUp);

signUp.style.marginTop = "440px";
signUp.style.width = "335px";
signUp.style.height = "65px";
signUp.style.border = "1px solid grey";
signUp.style.marginLeft = "-337px"



signUp.style.display = "flex";

const signUp1 = document.createElement("span");
const signUp2 = document.createElement("span");

signUp.appendChild(signUp1);
signUp.appendChild(signUp2);

signUp1.textContent = "Don't have an account?";
signUp2.textContent = "Sign Up";


signUp1.style.fontSize = "14px";
signUp1.style.fontFamily = "Helvetica";
signUp1.style.marginLeft = "57px";
signUp1.style.marginTop = "20px";


signUp2.style.fontSize = "14px";
signUp2.style.fontFamily = "Helvetica";
signUp2.style.marginLeft = "5px";
signUp2.style.marginTop = "20px";
signUp2.style.color = "blue";

signUp2.addEventListener("mouseover", (e) => {
    e.currentTarget.style.cursor = "pointer";

});

signUp2.addEventListener("mouseout", (e) => {
    e.currentTarget.style.textDecoration = "none";
});

const app = document.createElement("span");
root.appendChild(app);
app.textContent = "Get the app.";

app.style.marginTop = "600px";
app.style.width = "335px";
app.style.height = "65px";

app.style.marginLeft = "-212px";

const aplikacije = document.createElement("img");
root.appendChild(aplikacije);
aplikacije.src = "images/Screenshot_2.png";
aplikacije.style.marginTop = "640px";
aplikacije.style.width = "235px";
aplikacije.style.height = "45px";
aplikacije.style.marginLeft = "-416px";


aplikacije.addEventListener("mouseover", (e) => {
    e.currentTarget.style.cursor = "pointer";

});

aplikacije.addEventListener("mouseout", (e) => {
    e.currentTarget.style.textDecoration = "none";
});


const footer = document.createElement("ul");
footer.style.marginTop = "1000px";
footer.style.marginLeft = "-700px";
footer.style.display = "flex";
footer.style.width = "780px";
footer.style.height = "58px";
footer.style.flexWrap = "wrap";
footer.style.fontSize = "12px";

root.appendChild(footer);


const rijeci1 = document.createElement("li");
const rijeci2 = document.createElement("li");
const rijeci3 = document.createElement("li");
const rijeci4 = document.createElement("li");
const rijeci5 = document.createElement("li");
const rijeci6 = document.createElement("li");
const rijeci7 = document.createElement("li");
const rijeci8 = document.createElement("li");
const rijeci9 = document.createElement("li");
const rijeci10 = document.createElement("li");
const rijeci11 = document.createElement("li");
const rijeci12 = document.createElement("li");
const rijeci13 = document.createElement("li");
const rijeci14 = document.createElement("li");
const rijeci15 = document.createElement("li");
const rijeci16 = document.createElement("li");
const rijeci17 = document.createElement("li");
const rijeci18 = document.createElement("li");

footer.appendChild(rijeci1);
footer.appendChild(rijeci2);
footer.appendChild(rijeci3);
footer.appendChild(rijeci4);
footer.appendChild(rijeci5);
footer.appendChild(rijeci6);
footer.appendChild(rijeci7);
footer.appendChild(rijeci8);
footer.appendChild(rijeci9);
footer.appendChild(rijeci10);
footer.appendChild(rijeci11);
footer.appendChild(rijeci12);
footer.appendChild(rijeci13);
footer.appendChild(rijeci14);
footer.appendChild(rijeci15);
footer.appendChild(rijeci16);
footer.appendChild(rijeci17);
footer.appendChild(rijeci18);


rijeci1.textContent = "Meta";
rijeci2.textContent = "About";
rijeci3.textContent = "Blog";
rijeci4.textContent = "Jobs";
rijeci5.textContent = "Help";
rijeci6.textContent = "API";
rijeci7.textContent = "Privacy";
rijeci8.textContent = "Terms";
rijeci9.textContent = "Top Accounts";
rijeci10.textContent = "Hashtags";
rijeci11.textContent = "Locations";
rijeci12.textContent = "Instagram Lite";
rijeci13.textContent = "Contact Uploading & None Users";
rijeci14.textContent = "Dance";
rijeci15.textContent = "Food and Drink";
rijeci16.textContent = "Home & Garden";
rijeci17.textContent = "Music";
rijeci18.textContent = "Visual Arts";


rijeci1.style.listStyle = "none";
rijeci2.style.listStyle = "none";
rijeci3.style.listStyle = "none";
rijeci4.style.listStyle = "none";
rijeci5.style.listStyle = "none";
rijeci6.style.listStyle = "none";
rijeci7.style.listStyle = "none";
rijeci8.style.listStyle = "none";
rijeci9.style.listStyle = "none";
rijeci10.style.listStyle = "none";
rijeci11.style.listStyle = "none";
rijeci12.style.listStyle = "none";
rijeci13.style.listStyle = "none";
rijeci14.style.listStyle = "none";
rijeci15.style.listStyle = "none";
rijeci16.style.listStyle = "none";
rijeci17.style.listStyle = "none";
rijeci18.style.listStyle = "none";


rijeci1.style.marginRight = "20px";
rijeci2.style.marginRight = "20px";
rijeci3.style.marginRight = "20px";
rijeci4.style.marginRight = "20px";
rijeci5.style.marginRight = "20px";
rijeci6.style.marginRight = "20px";
rijeci7.style.marginRight = "20px";
rijeci8.style.marginRight = "20px";
rijeci9.style.marginRight = "20px";
rijeci10.style.marginRight = "20px";
rijeci11.style.marginRight = "20px";
rijeci12.style.marginRight = "20px";
rijeci13.style.marginRight = "20px";
rijeci14.style.marginRight = "20px";
rijeci15.style.marginRight = "20px";
rijeci16.style.marginRight = "20px";
rijeci17.style.marginRight = "20px";
rijeci18.style.marginRight = "20px";


const footerElementi = [
    rijeci1,
    rijeci2,
    rijeci3,
    rijeci4,
    rijeci5,
    rijeci6,
    rijeci7,
    rijeci8,
    rijeci9,
    rijeci10,
    rijeci11,
    rijeci12,
    rijeci13,
    rijeci14,
    rijeci15,
    rijeci16,
    rijeci17,
    rijeci18,

];

for (let element of footerElementi) {
    element.addEventListener("mouseover", (e) => {
        e.currentTarget.style.cursor = "pointer";
       
    });

    element.addEventListener("mouseout", (e) => {
        e.currentTarget.style.textDecoration = "none";
    });
}

rijeci1.style.color = "grey";
rijeci2.style.color = "grey";
rijeci3.style.color = "grey";
rijeci4.style.color = "grey";
rijeci5.style.color = "grey";
rijeci6.style.color = "grey";
rijeci7.style.color = "grey";
rijeci8.style.color = "grey";
rijeci9.style.color = "grey";
rijeci10.style.color = "grey";
rijeci11.style.color = "grey";
rijeci12.style.color = "grey";
rijeci13.style.color = "grey";
rijeci14.style.color = "grey";
rijeci15.style.color = "grey";
rijeci16.style.color = "grey";
rijeci17.style.color = "grey";
rijeci18.style.color = "grey";