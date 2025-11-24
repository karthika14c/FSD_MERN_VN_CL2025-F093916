function downloadFile(filename, callback){
    console.log(`Downloading ${filename}...`);
    callback();
}
function downloading(){
    setTimeout(()=>{
        console.log("Download Complete!")
    },2000
)
}

downloadFile("File1",downloading)