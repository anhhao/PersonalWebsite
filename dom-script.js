/**
 * Created by Amaster on 10/8/2015.
 */

injectHeader();
injectFooter();

function injectHeader(){
    injectName();
    injectMenu();
}

function injectName() {
    var header = document.getElementById("header");
    var name = document.createElement("div");
    name.setAttribute("id", "name");

    var fullName = document.createElement("p");
    fullName.setAttribute("class", "fullName");
    var fullNameLink = document.createElement("a");
    fullNameLink.setAttribute("href", "index.html");
    var nameText = document.createTextNode("Andy Nguyen");
    fullNameLink.appendChild(nameText);
    fullName.appendChild(fullNameLink);
    name.appendChild(fullName);

    var title = document.createElement("p");
    title.setAttribute("class", "title");
    var titleText = document.createTextNode("Software Developer");
    title.appendChild(titleText);
    name.appendChild(title);

    header.appendChild(name);
}

function injectMenu() {
    var header = document.getElementById("header");
    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    var list = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.setAttribute("class", "active");
    var li1Link = document.createElement("a");
    li1Link.setAttribute("href", "#name");
    var li1Text = document.createTextNode("TIMELINE");
    li1Link.appendChild(li1Text);
    li1.appendChild(li1Link);
    list.appendChild(li1);

    var li2 = document.createElement("li");
    var li2Link = document.createElement("a");
    li2Link.setAttribute("href", "#resume-hr");
    var li2Text = document.createTextNode("RESUME");
    li2Link.appendChild(li2Text);
    li2.appendChild(li2Link);
    list.appendChild(li2);

    var li3 = document.createElement("li");
    var li3Link = document.createElement("a");
    li3Link.setAttribute("href", "#contact-hr");
    var li3Text = document.createTextNode("CONTACT");
    li3Link.appendChild(li3Text);
    li3.appendChild(li3Link);
    list.appendChild(li3);

    menu.appendChild(list);

    header.appendChild(menu);
}

function injectFooter(){
    var ft = document.getElementById("ft");
    var footer = document.createElement("div");
    footer.setAttribute("id", "footer");

    var footerContent = document.createElement("footer-content");
    footerContent.setAttribute("id", "footer-content");

    var email = document.createElement("a");
    email.setAttribute("href", "mailto:anhhao1102@gmail.com");
    var emailText = document.createTextNode("Email");
    email.appendChild(emailText);
    footerContent.appendChild(email);

    var span = document.createElement("span");
    var spanText = document.createTextNode(" | ");
    span.appendChild(spanText);
    footerContent.appendChild(span);

    var facebook = document.createElement("a");
    facebook.setAttribute("href", "http://www.facebook.com/anhhao1102");
    var facebookText = document.createTextNode("Facebook");
    facebook.appendChild(facebookText);
    footerContent.appendChild(facebook);

    var copyRight = document.createElement("p");
    var cpyText = document.createTextNode("@ Andy Nguyen 2015");
    copyRight.appendChild(cpyText);
    footerContent.appendChild(copyRight);

    footer.appendChild(footerContent);
    ft.appendChild(footer);
}
