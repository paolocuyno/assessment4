const items = require('../../menu.json')

let clickedItems=[];
let id=0;
let total=0;

module.exports={
    selectItems:(req,res)=>{
        const itemsArray=[];

     res.status(200).send(items)  
    },

    addItem:(req,res)=>{
        const { name, price } = req.body
        clickedItems.push({name,price,id})
        id++
        total=total+price
    res.status(200).send({clickedItems,total})
    },

    clearPlate:(req,res)=>{
        clickedItems=[]
        total=0
    res.status(200).send({clickedItems,total})
    }

}