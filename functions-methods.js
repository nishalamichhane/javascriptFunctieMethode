// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

// 1. FUNCTIE
function congratulate() {
    console.log("Gefeliciteerd!");
}

// 2. METHODE, want hij is een property op het birthday object
const birthday = {
    congratulate: function () {
        console.log("Gefeliciteerd!");
    },
};
/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
/*let domain=null;
function getEmailDomain(emailnaam){
   domain = emailnaam.substring(emailnaam.indexOf('@') + 1);
   return domain;
}
const getDomain = getEmailDomain("n.eeken@novi-education.nl");
console.log(getDomain);*/
const domain = {
    getEmailDomain: function() {
        return this.email.substring(this.email.indexOf('@') + 1);
    }
}
const email1 = {
    email:"n.eeken@novi-education.nl"

}
const domainname = domain.getEmailDomain.call(email1);
console.log(domainname);

// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
const domaintype = {
    typeOfEmail: function() {
        if(this.emailaddress == "n.eeken@novi-education.nl"){
            return "Student";
        }
        else if(this.emailaddress == "t.mellink@novi.nl"){
            return "Medewerker";
        }
        else if(this.emailaddress == "novi.nlaapjesk@outlook.com"){
            return "Extern";
        }
    }
}
const emailaddress1 = {
    emailaddress:"novi.nlaapjesk@outlook.com"
}
const emailtype = domaintype.typeOfEmail.call(emailaddress1);
console.log(emailtype);

// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.

const checkEmail = {
    checkEmailValidity: function() {
        const regex_pattern = /(.+)@(.+){2,}\.(.+){2,}/;

        if (regex_pattern.emailaddress2) {
            return true;
        }
        else {
            return false;
        }

    }
}

const emailaddress2 = {
    emailaddress2:"nisha@nisha.com"
}
const emailValidity = checkEmail.checkEmailValidity.call(emailaddress2);
console.log(emailValidity);

// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in