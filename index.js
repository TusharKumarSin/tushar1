const fs=require('fs')
const path=require('path')
const replacethis="Tushar"
const replacewith="Monu"
const preview=false;
const folder=__dirname 


try{
fs.readdir(folder,(err,data)=>{
    console.log(data);
    for(let index=0;index<data.length;index++){
    const item=data[index]
     let oldFile=path.join(folder, item)
     let newFile=path.join(folder,item.replaceAll(replacethis,replacewith));
     if(!preview){
          fs.rename(oldFile,newFile,()=>{
            console.log("Rename Succesful!")
          })
     }else{
        if("data/"+item!==newFile){
            console.log(item+" will be rename as "+newFile);
        }
     }

    }
    
})
}catch(err){
    console.error(err);
}