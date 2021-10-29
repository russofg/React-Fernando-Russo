const charlas = [
    { id:"01", categoria:"Programación", title:"React", speaker:"Juan", price:5000, pictureUrl:"assets/react.png", stock:10},
    { id:"02", categoria:"Programación", title:"Java", speaker:"Pedro", price:5000, pictureUrl:"assets/java.png", stock:20},
    { id:"03", categoria:"Programación", title:"Vue", speaker:"Juan", price:5000, pictureUrl:"assets/vue.png", stock:10},
    { id:"04", categoria:"Programación", title:"JavaScript", speaker:"Pedro", price:14000, pictureUrl:"assets/js.png", stock:30},
    { id:"05", categoria:"Programación", title:"Html", speaker:"Juan", price:3000, pictureUrl:"assets/html.png", stock:10},
    { id:"06", categoria:"Programación", title:"CSS", speaker:"Pedro", price:4000, pictureUrl:"assets/css.png", stock:5},
    { id:"07", categoria:"Edicón", title:"Adobe Premiere", speaker:"Juan", price:10000, pictureUrl:"assets/premiere.png", stock:15},
    { id:"08", categoria:"Edicón", title:"Adobe After Effects", speaker:"Pedro", price:12000, pictureUrl:"assets/after-effects.png", stock:20},
    { id:"09", categoria:"Edicón", title:"Adobe Audition", speaker:"Juan", price:8000, pictureUrl:"assets/audition.png", stock:10},
    { id:"10", categoria:"Edicón", title:"Adobe Photoshop ", speaker:"Pedro", price:5000, pictureUrl:"assets/adobe-photoshop.png", stock:20},
    { id:"11", categoria:"Edicón", title:"Adobe Illustrador", speaker:"Juan", price:5000, pictureUrl:"assets/adobe-illustrator.png", stock:10},
];

const GetFetchList = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(charlas);
    }, 1000);
})

export default GetFetchList