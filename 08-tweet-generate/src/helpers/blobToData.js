export const blobToData = blob =>{
    return new Promise((resolve, _) =>{
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(blob);
    })
}