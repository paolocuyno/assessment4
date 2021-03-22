// const items = require('../my-app/menu.json')
// const selectedItems=[];
// let id=1;
// module.exports={
//     getSelectedItems: (req,res)=>{
//         res.status(200).send(selectedItems);
//     },
//     selectItems: (req,res) =>{
//         const {item}=req.body;
//         item.id=id;
//         id++;
//         selectedItems.push(item);
//         res.status(200).send(selectedItems)
//     }
// }