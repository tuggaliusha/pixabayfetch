let btn= document.getElementById("btn")
console.log(btn);
btn.addEventListener("click",()=>{
    let search=document.getElementById("search").value
    console.log(search);
    let per_page=20
    window.fetch(`https://pixabay.com/api/?key=39149217-790517ef78b164b82398034a4&q=${search}&image_type=photo=${per_page}`)
    .then((data)=>data.json())
    .then((data1)=>{
        console.log(data1.hits);
        for(let ele of data1.hits){
            
            console.log(ele.previewURL);
        let img = `<img  src=${ele.previewURL}  />`
        console.log(img);

        let demo = document.getElementById("demo")
        console.log(demo);
        demo.innerHTML += img

        }

    })
})

