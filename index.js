const jsonfile =require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');
const random=require('random');
const FILE_PATH='./data.json';

// const DATE = moment().format();
//     const data ={
//         date:DATE
//     }

//     jsonfile.writeFile(FILE_PATH,data,()=>{
//    // simpleGit().add([FILE_PATH]).commit(DATE , {'--date':DATE}, makeCommit.bind(this,--n));
//     });


const makeCommit= n =>{

    if(n===0) return simpleGit().push();
    const x=random.int(0,54);
    const y=random.int(0,6);

    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w')
    .add(y,'d').format();

    const data ={
        date:DATE
    }
    console.log(DATE);

    jsonfile.writeFile(FILE_PATH,data,()=>{
    simpleGit().add([FILE_PATH]).commit(DATE , {'--date':DATE}, 
    makeCommit.bind(this,--n));
    });

}

makeCommit(100);

//
// import os
// from random import randint
// for i in range(1, 365):
// for i in range(0, randint(1, 10)):
// d = str(i) + days ago' with open('file.txt', 'a') as file:
// file.write(d)
// os.system('git add.)
// os.system('git commit --date=" + d + -m "commit")
// os.system('git push -u origin main')