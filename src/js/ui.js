//HIDES ALL THE ALERT BOX
$('.alert').hide();

const getParams = ()=> {
    const url = window.location.href;
	let params = {};
	let parser = document.createElement('a');
	parser.href = url;
	let query = parser.search.substring(1);
	let vars = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

//get params from url
const queryParams = getParams().tab || 'gc';

if(document.querySelectorAll('centered').length<22){
//   alert('Clear your cache!')  
}

const availableTabs = ['gc','qcc','emc','nfemc','ascc'];
for(let tab of availableTabs){
    if(tab!==queryParams && document.querySelector(`#${tab}`)){
        document.querySelector(`#${tab}`).style.display = 'none';
        // document.querySelector(`#${tab}-ad`).style.display = 'none';
    }
}

//Changing active link
const changeActiveLink = function(){
    $('li').removeClass('active');
    className = '.link-'+queryParams;
    $(className).addClass('active');
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').attr('aria-expanded',false);
}
changeActiveLink();

// register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=> {
        navigator.serviceWorker.register('/serviceWorker.js').then((registration)=> {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err)=> {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

//apply ui theme
const appluTheme = (ui_theme)=>{
    window.localStorage.setItem('ui_theme',ui_theme || 'dark');
    document.querySelector('#theme-selector').value = ui_theme || 'dark';
    if(ui_theme==='dark'){
        document.querySelector('.fb-comments').setAttribute("data-colorscheme", "dark");
        document.querySelector('head').innerHTML += `
        <link rel="stylesheet" type="text/css" href="/src/css/themes/dark.css">
        `;
    }else if(ui_theme==='light'){
        document.querySelector('.fb-comments').setAttribute("data-colorscheme", "light");
        document.querySelector('head').innerHTML += `
        <link rel="stylesheet" type="text/css" href="/src/css/themes/light.css">
        `;

    }else{
        document.querySelector('.fb-comments').setAttribute("data-colorscheme", "dark");
        document.querySelector('head').innerHTML += `
        <link rel="stylesheet" type="text/css" href="/src/css/themes/dark.css">
        `;
    }
}

//onload
let ui_theme = window.localStorage.getItem('ui_theme');
appluTheme(ui_theme);

//handle theme change
document.querySelector('#theme-selector').addEventListener('change',(e)=>{
    appluTheme(e.target.value);
})

