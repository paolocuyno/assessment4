const items = require('../../menu.json')

let clickedItems=[];
let id=0

module.exports={
    selectItems:(req,res)=>{
        const itemsArray=[];

     res.status(200).send(items)  
    },

    addItem:(req,res)=>{
        const { name, price } = req.body
        clickedItems.push({name,price,id})
        id++
    res.status(200).send(clickedItems)
    }
}