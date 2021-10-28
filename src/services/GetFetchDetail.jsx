const charlaReact = { id:"01", title:"React", speaker:"Juan", description:"React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre" ,price:5000, pictureUrl:"../assets/react.png", stock:10};

const GetFetchDetail = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(charlaReact)
    }, 2000)
})

export default GetFetchDetail