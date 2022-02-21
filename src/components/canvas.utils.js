export let drawImageOnCanvas = (customCanvas , img , values) => {
     
    const context = customCanvas.getContext('2d')
    let height = img.naturalHeight
    let width = img.naturalWidth
    img.onload = function() {
        height = img.naturalHeight
        width = img.naturalWidth 
        context.canvas.width = width
        context.canvas.height = height
        context.filter = `${values}`
        context.drawImage(img,0,0,context.canvas.width,context.canvas.height);
    }
}