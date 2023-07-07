//Changing style for menu left items
const active_menu = document.querySelectorAll('.menu-item');
const notificationsMessage = document.getElementById('notifications-message');
const messagesBox = document.querySelector('.messages');

const removeActiveMenu = () => { active_menu.forEach((item)=> {
    item.classList.remove('active');
});
}
active_menu.forEach((menu_item)=>{
    menu_item.addEventListener('click',() => {
        removeActiveMenu();
        menu_item.classList.add('active');
        if (menu_item.id != "notifications") {
            document.querySelector('.notification_pop').classList.remove('show');
        }else {
            document.querySelector('.notification_pop').classList.add('show');
            document.querySelector('#notifications .notification_count').style.display = "none";
        }
    });
});
//End

//Messages Notification
notificationsMessage.addEventListener('click', ()=>{
    messagesBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    notificationsMessage.querySelector('.notification_count').style.display = 'none';
    setTimeout(()=>{
        messagesBox.style.boxShadow = 'none';
    }, 2000);
});
//End


//Search Bar
const search_box = document.getElementById('message_search');
const user_message = document.querySelectorAll('.user_message');

const searchMessage = () => {
    const typedContent = search_box.value.toLowerCase();
    user_message.forEach((message)=>{
        let user_name = message.querySelector('h5').textContent.toLowerCase();
        if (user_name.indexOf(typedContent) != -1) {
                message.style.display = 'flex';
        } else {
            message.style.display = 'none';
        }
    });
}

search_box.addEventListener('keyup', searchMessage);


//Getting css Root Element
let root = document.querySelector(':root');
//

//===================Theme Section=======================
const themmeIcon = document.getElementById('theme');
const theme_section = document.querySelector('.theme_section');
const primary_colors = document.querySelectorAll('.primary_color span');
const mainHtml = document.querySelector('html');
//opening theme
const openTheme = () => {
    theme_section.classList.add('show');
}
//closing theme
const closTheme = (e) => {
    if(e.target.classList.contains('theme_section')) {
        theme_section.classList.remove('show');
    }
}
theme_section.addEventListener('click',closTheme);
themmeIcon.addEventListener('click',openTheme);

const removeActiveColor = () => {
    primary_colors.forEach((color)=>{
        color.classList.remove('active');
    });
}

const defaultTheme = () => {
    mainHtml.setAttribute('data-themePrimary', 'defaultColor');
    localStorage.setItem('selectedPrimary', 'default');
}

const yellowTheme = () => {
    mainHtml.setAttribute('data-themePrimary', 'colorYellow');
    localStorage.setItem('selectedPrimary', 'colorYellow');
}

const greenTheme = () => {
    mainHtml.setAttribute('data-themePrimary', 'colorGreen');
    localStorage.setItem('selectedPrimary', 'colorGreen');
}

const redTheme = () => {
    mainHtml.setAttribute('data-themePrimary', 'colorRed');
    localStorage.setItem('selectedPrimary', 'colorRed');
}

const pinkTheme = () => {
    mainHtml.setAttribute('data-themePrimary', 'colorPink');
    localStorage.setItem('selectedPrimary', 'colorPink');
}


primary_colors.forEach((color)=>{
    color.addEventListener('click', () => {
        removeActiveColor();

        if(color.classList.contains('color_1')) {
            color.classList.add('active');
            defaultTheme();

        } else if (color.classList.contains('color_2')) {
            color.classList.add('active');
            yellowTheme();

        }else if (color.classList.contains('color_3')) {
            color.classList.add('active');
            redTheme()

        }else if (color.classList.contains('color_4')) {
            color.classList.add('active');
            greenTheme();

        }else if (color.classList.contains('color_5')) {
            color.classList.add('active');
            pinkTheme();
        }
    });
})

const selectedPrimary = localStorage.getItem('selectedPrimary');
switch (selectedPrimary) {
    case 'colorYellow': yellowTheme();
        break;
    case 'colorGreen': greenTheme();
        break;
    case 'colorRed': redTheme();
        break;
    case 'colorPink': pinkTheme();
        break;
    default:
}
 




//background color change
const bg_colors = document.querySelectorAll('.bg_color span');

const defaultBg = () => {
    mainHtml.setAttribute('data-bgTheme', 'defaultBg');
    localStorage.setItem('selectedBgTheme', 'defaultBg');
}

const dimDark = () => {
    mainHtml.setAttribute('data-bgTheme', 'dimDark');
    localStorage.setItem('selectedBgTheme', 'dimDark');
}

const dimBlack = () => {
    mainHtml.setAttribute('data-bgTheme', 'dimBlack');
    localStorage.setItem('selectedBgTheme', 'dimBlack');
}

bg_colors.forEach((bg_color)=>{
    bg_color.addEventListener('click',()=> {
        if(bg_color.classList.contains('bgcolor_1')) {
           defaultBg();
        } else if (bg_color.classList.contains('bgcolor_2')) { 
            dimDark();
        }
        else if (bg_color.classList.contains('bgcolor_3')) { 
            dimBlack();
        }
    });
});

const selectedBgTheme = localStorage.getItem('selectedBgTheme');
if (selectedBgTheme === 'dimDark') {
        dimBlack();
}else if (selectedBgTheme === 'dimBlack') {
        dimBlack();
}

//==============End of Theme Section=====================


//===================Settings Section====================
const seetingsIcon = document.getElementById('settings');
const settings_section = document.querySelector('.settings_section');
const fontSizes = document.querySelectorAll('.font_size span');
const default_font = document.querySelector('.default_font');
//opening theme
const openSettings = () => {
    settings_section.classList.add('show');
}
//closing theme
const closSettings = (e) => {
    if(e.target.classList.contains('settings_section')) {
        settings_section.classList.remove('show');
    }
}
settings_section.addEventListener('click',closSettings);
seetingsIcon.addEventListener('click',openSettings);
//font size change
const removeActiveFont = () => {
    fontSizes.forEach((item)=>{
        item.classList.remove('active');
    })
}

fontSizes.forEach((font)=>{
    let fontSize;
    
    font.addEventListener('click',()=>{
        removeActiveFont();

        if(font.classList.contains('font_size_1')) {
            font.classList.add('active');
            fontSize = '10px';
            root.style.setProperty('--sticky-left-top','5.4rem');
            root.style.setProperty('--sticky-right-top','5.4rem');

        } else if (font.classList.contains('font_size_2')) {
            font.classList.add('active');
            fontSize = '13px';
            root.style.setProperty('--sticky-left-top','5.4rem');
            root.style.setProperty('--sticky-right-top','-7rem');

        } else if (font.classList.contains('font_size_3')) {
            font.classList.add('active');
            fontSize = '16px';
            root.style.setProperty('--sticky-left-top','-2rem');
            root.style.setProperty('--sticky-right-top','-17rem');

        } else if (font.classList.contains('font_size_4')) {
            font.classList.add('active');
            fontSize = '19px';
            root.style.setProperty('--sticky-left-top','-5rem');
            root.style.setProperty('--sticky-right-top','-25rem');

        } else if (font.classList.contains('font_size_5')) {
            font.classList.add('active');
            fontSize = '22px';
            root.style.setProperty('--sticky-left-top','-10rem');
            root.style.setProperty('--sticky-right-top','-22rem');
        }
         
        document.querySelector('html').style.fontSize = fontSize;   
    });
});

default_font.addEventListener('click', ()=>{
    document.querySelector('html').style.fontSize = '1rem';
    removeActiveFont();   
    document.querySelector('.font_size_3').classList.add('active');
    root.style.setProperty('--sticky-left-top','5.4rem');
    root.style.setProperty('--sticky-right-top','-18rem');   
});

//=============End of Settings Section===================


//Messages Active

const messages_cat_Headings = document.querySelectorAll('.messages_category h6');
const removeActiveHeading = () =>{
        messages_cat_Headings.forEach((heading)=>{
            heading.classList.remove('active');
    });
}

messages_cat_Headings.forEach((heading)=>{
    heading.addEventListener('click', ()=> {
        removeActiveHeading();
        heading.classList.add('active');
    });
});