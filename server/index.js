const express=require('express'),
        kitchenCtrl=require('./controllers/kitchenCtrl'),
        itemsCtrl=require('./controllers/itemsCtrl'),
        port =4001,
        app=express();

        app.use(express.json())

        app.get('/api/my-app',kitchenCtrl.selectItems);
        app.post('/api/my-app',kitchenCtrl.addItem);
        app.delete('/api/my-app/',kitchenCtrl.clearPlate);
        // app.get('/api/my-app', kitchenCtrl.selectItems);
        // app.put('/api/my-app/:id',kitchenCtrl.editName);
      

        app.listen(port,()=>console.log(`Server is on ${port}`))