const charlas = [
    { id:"01", title:"React", speaker:"Juan", price:5000, pictureUrl:"assets/react.png", stock:10},
    { id:"02", title:"Java", speaker:"Pedro", price:5000, pictureUrl:"assets/java.png", stock:20},
    { id:"03", title:"Vue", speaker:"Juan", price:5000, pictureUrl:"assets/vue.png", stock:10},
    { id:"04", title:"JavaScript", speaker:"Pedro", price:14000, pictureUrl:"assets/js.png", stock:30},
    { id:"05", title:"Html", speaker:"Juan", price:3000, pictureUrl:"assets/html.png", stock:10},
    { id:"06", title:"CSS", speaker:"Pedro", price:4000, pictureUrl:"assets/css.png", stock:5},
];

const GetFetchList = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(charlas);
    }, 2000);
})

export default GetFetchList