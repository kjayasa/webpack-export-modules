"use strict";

const path= require("path"),
        fs = require('fs');

const codeTemplate=fs.readFileSync(path.join(__dirname,"codeTemplate.js"),"utf8"),
      jsExtensionRexg= new RegExp("\.js$","i");

function generateCode(map){
    if(codeTemplate){
        return codeTemplate.replace("_$insert_map_obj_here$_",JSON.stringify(map));
    }
    else{
        return "//////////// webpack-export-module PLUGIN Failed////////////////////////////"
    }
}



class ExportModulePlugin{
    constructor(options){
        if(options){
            this.options=options;
        }
    }
    apply(compiler) {
        const options = this.options;
        compiler.plugin("compilation", (compilation)=> {
            compilation.mainTemplate.plugin('startup', (source, module, hash) =>{
            let rootPath=(options && options.rootPath) || compiler.context;
            let originName = `$${(module.origins && module.origins.length ? module.origins[0].name : 'main')}`;
            let exportedModules={};
            compilation.modules.forEach(m=>exportedModules[`${originName}!${path.relative(rootPath,m.resource.replace(jsExtensionRexg,""))}`]=m.id);

            return [generateCode(exportedModules)].join('\n') + source;
        });
    });
    }
}

module.exports=ExportModulePlugin;