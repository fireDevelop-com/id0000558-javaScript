function loadScript(src){
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
    console.log('hi')
}
//loadScript('assets/scripts/app.js')