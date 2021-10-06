

const fs= require('fs')
///////////////////////add method//////////
const addStdData=(id,namestd,subject,grade,comment)=>{
    const stdData=loadStdData();
    const repatedId=stdData.filter((stdid)=>{
        return stdid.id==id
       
    })
    if(repatedId.length===0){
        stdData.push({
            id,
            namestd,
            subject,
            grade,
            comment
        });
        saveStdData(stdData);
        console.log("save sucess")
    }
    else{
        console.log("repated id,insert again")
    }
    
    
}

const loadStdData=()=>{
    try{
        const bufferData= fs.readFileSync('std.json').toString();
        return JSON.parse(bufferData)
    }
    catch(e){
        return []
    }
}
const saveStdData=(stdData)=>{
    const saveData=JSON.stringify(stdData);
    fs.writeFileSync('std.json',saveData)
    
}
//////////////////remove method
const removestd=(id)=>{
    const stdData=loadStdData();
    const primaryStd=stdData.filter((std)=>{
        return std.id!==id
    })
    saveStdData(primaryStd);
    console.log('remove std')
}
///////////////////read method
const readstd=(id)=>{
    const stdData=loadStdData();
    const std=stdData.find((ele)=>{
        return ele.id===id;
    });
   if(std){
       console.log( 'std id= '+std.id, 'std name '+std.namestd)
   }
   else{
       console.log('this id not found,insert again')
   }
}
////////////////////list method//////////////
const list=()=>{
    const stdData=loadStdData();
     stdData.forEach(std => {
        console.log('student name is '+std.namestd,' subject is '+ std.subject +' grade is '+ std.grade)
    });
}
module.exports={
    addStdData,
    removestd,
    readstd,
    list
}