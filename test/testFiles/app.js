import module1 from "./appModules/module1"
function app(){
    if(module1){
    return `test pp ${module1()}`
    }
}

app();

export default app;