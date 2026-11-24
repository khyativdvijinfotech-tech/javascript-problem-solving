// task 2
/*function task(name,delay){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(name);
            resolve();
        },delay);
    });
}
task("Task 1",1000);
task("Task 2",2000);
task("Task 3",3000);

//task 3
async function runTasks(){
    await task("Task 1",1000);
    await task("Task 2",2000);
    await task("Task 3",3000);
}

runTasks();

//task 4 this problem is call by promisification
function getdata(callback){
    setTimeout(()=>{
        callback("Data Received");
    },1000);
}
function getdataPro(){
    return new Promise(resolve =>{
        getdata(resolve);
    });
}
getdataPro().then(console.log);

//task 5 this is basic promise queue
function task(name){
    return()=>new Promise(resolve=>{
        setTimeout(()=>{
            console.log(name);
            resolve();
        },1000);
    });
}
let queue =Promise.resolve();

queue=queue.then(task("Task 1"));
queue=queue.then(task("Task 2"));
queue=queue.then(task("Task 3"));

//task 7
function delay(task){
    return new Promise(resolve =>
        setTimeout(resolve,task));
}
async function run(){
    console.log("API 1");
    await delay(2000);

     console.log("API 2");
    await delay(2000);

     console.log("API 3");
}
run();
//task 8
async function runbatch(){
    const task=[1,2,3,4,5];

    for (let i=0;i<task.length;i+=2){
        const batch=task.slice(i,i+2);

        await Promise.all(
            batch.map(n=>
                Promise.resolve(n*10)
            )
        ).then(console.log);
    }
    
}
runbatch();

//task 9
async function run(params) {
    const results=await Promise.allSettled([
        Promise.resolve("Success 1"),
        Promise.reject("error 1"),
        Promise.resolve("success 2")
    ]);
    console.log(results);
}
run();

//task 12
Promise.resolve(1)
.then(x=>x+1)
.then(x=>Promise.resolve(x+1))
.then(x=>x+1)
.then(console.log);

//task 13
async function run(){
    const results=await Promise.all([
        Promise.resolve(10),
        Promise.resolve(20),
        Promise.resolve(30),
        Promise.resolve(40),
        Promise.resolve(50)
    ]);
    console.log(results);
}
run();*/

//task 14
async function run(){
    const tasks=[
        10,20,30,40,50
    ];
    for(const task of tasks){
        await Promise.resolve(task).then(console.log);
    }
}
run();