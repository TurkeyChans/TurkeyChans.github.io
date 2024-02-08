var copyDate = new Date();
year = copyDate.getFullYear();
month = copyDate.getMonth();
day = copyDate.getDate();
var before_B = (year-1) - 2003;
var after_B = year - 2003;
const string1 = "My name is Louis, and I'd want to introduce myself. I'm ";
const string2 = " years old and from the Dominican Republic. I speak both English, Spanish, and ASL (American Sign Language). I'm a junior student at CUNY Lehman College. I'd want to work at Microsoft as a software developer. I graduated from a private high school, so this public college will be a new environment for me.    ";
let light_dark_mode = false;
const error_meg = "There was an error to this page... Error is ";

const copys = document.getElementById('copyrights'); 
const copysss = document.createElement('p');
const copyss = document.createTextNode('Copyright ' + year);
copysss.appendChild(copyss);
copys.appendChild(copysss);

try {
    const age = document.getElementById('about_me_quick_brief');
    const ages = document.createElement('p');
    if(month >= 10 && day >= 7) {
        const agesss = document.createTextNode(string1 + after_B + string2);
        ages.appendChild(agesss);
        age.appendChild(ages);
    }
    else {
        const agesss = document.createTextNode(string1 + before_B + string2);
        ages.appendChild(agesss);
        age.appendChild(ages);
    }
}
catch(err) {
    console.log(error_meg + err);

}


function both_dark_and_light(light_dark_mode) {
    const imageElement = document.getElementById('discords');
    const imageElement1 = document.getElementById('githubs');
    const imageElement2 = document.getElementById('sun_moon');
    const switing = document.getElementById('switcher');
    let buttondis = document.getElementById('email_linkid');
    if(light_dark_mode) {
        let aElements = document.querySelectorAll('a');
        for (let i = 0; i < aElements.length; i++) {
            aElements[i].style.color = 'black';
        }

        let buttonElements = document.querySelectorAll('button');
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].style.backgroundColor = 'white';
        }

        copys.style.color = 'black';
        buttondis.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        imageElement.src = 'pic/darkdiscord.png';
        imageElement1.src = 'pic/darkgithub.png';
        imageElement2.src = 'pic/light-bulb-removebg-preview.png';
    }
    else {
        let aElements = document.querySelectorAll('a');
        for (let i = 0; i < aElements.length; i++) {
            aElements[i].style.color = 'white';
        }

        let buttonElements = document.querySelectorAll('button');
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].style.backgroundColor = 'black';
        }
        
        switing.style.backgroundColor = 'gray';
        copys.style.color = 'white';
        buttondis.style.color = 'white';
        document.body.style.backgroundColor = "rgb(37, 37, 37)";
        imageElement.src = 'pic/lightdiscord.png';
        imageElement1.src = 'pic/lightgithub.png';
        imageElement2.src = 'pic/light-bulb__1_-removebg-preview.png';
    }
}

function dark_light_discord() {
    const dark_discord_p = document.getElementById("discord_p");
    const dark_discord_p2 = document.getElementById("discord_p2");

    if(light_dark_mode) {
        dark_discord_p.style.color = 'black';
        dark_discord_p2.style.color = 'black';
        both_dark_and_light(true);
        light_dark_mode = false;
    }
    else {
        dark_discord_p.style.color = 'white';
        dark_discord_p2.style.color = 'white';
        both_dark_and_light(false);
        light_dark_mode = true;
    }
}

function dark_light_about_me() {
    if(light_dark_mode) {
        const dark_p = document.getElementById("about_me_p_id");
        dark_p.style.color = 'black';
        both_dark_and_light(true);
        light_dark_mode = false;
    }
    else {
        const dark_p = document.getElementById("about_me_p_id");
        dark_p.style.color = 'white';
        both_dark_and_light(false);
        light_dark_mode = true;
    }
}

function dark_light() {

    var projectedit = 'project_edit' + 1;
    var projectdate = 'project_date' + 1;
    var projectdes = 'project_des' + 1;
    var projects = 'projects' + 1;

    if(light_dark_mode) {
        const findings = document.getElementsByClassName('project1_dark').length;
        for(let j = 1; j <= findings+1; ++j) {
            const element3 = document.getElementById(projects);
            element3.classList.replace("project1_dark", "project1");
            projects = 'projects' + j;
        }

        const findings2 = document.getElementsByClassName('project1').length;
        for(let i = 1; i <= findings2+1; ++i) {
            
            const element = document.getElementById(projectedit);
            element.classList.replace("project_edit_dark", "project_edit");
            projectedit = 'project_edit' + i;
            
            const element1 = document.getElementById(projectdate);
            element1.classList.replace("project_date_dark", "project_date");
            projectdate = 'project_date' + i;
            
            const element2 = document.getElementById(projectdes);
            element2.classList.replace("project-des_dark", "project-des");
            projectdes = 'project_des' + i;  
             
        }
        const element4 = document.getElementById("lable_proo");
        element4.classList.replace("lable_pro_dark", "lable_pro");
        
        both_dark_and_light(true);
        light_dark_mode = false;
    }
    
    else {
        const findings = document.getElementsByClassName('project1').length;
        for(let j = 1; j <= findings+1; ++j) {

            const element3 = document.getElementById(projects);
            element3.classList.replace("project1", "project1_dark");
            projects = 'projects' + j;

        }

        const findings2 = document.getElementsByClassName('project1_dark').length;


        for(let i = 1; i <= findings2+1; ++i) {

            const element = document.getElementById(projectedit);
            element.classList.replace("project_edit", "project_edit_dark");
            projectedit = 'project_edit' + i;

            const element1 = document.getElementById(projectdate);
            element1.classList.replace("project_date", "project_date_dark");
            projectdate = 'project_date' + i;

            const element2 = document.getElementById(projectdes);
            element2.classList.replace("project-des", "project-des_dark");
            projectdes = 'project_des' + i;  
             
        }
        const element4 = document.getElementById("lable_proo");
        element4.classList.replace("lable_pro", "lable_pro_dark");

        
        both_dark_and_light(false);
        light_dark_mode = true;
    }
}