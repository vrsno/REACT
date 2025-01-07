import emojiList from "./emojiList.json"

export const SearchEmoji = (value)=>{
    const lowerValue = value.toLowerCase()
   const response = []
   emojiList.map(item =>{
    if(item.keywords.includes(lowerValue)){
        response.push(item)
    }
   })

   if (value === ""){
    return response
   }

   return response.slice(0, 24)
}