const express=require('express'),
        kitchenCtrl=require('./controllers/kitchenCtrl'),
        itemsCtrl=require('./controllers/itemsCtrl'),
        port =4001,
        app=express();

        app.use(express.json())

        app.get('/api/my-app',kitchenCtrl.selectItems);
        app.post('/api/my-app',kitchenCtrl.addItem);

        // app.get('/api/my-app', kitchenCtrl.selectItems);
        // app.put('/api/my-app/:id',kitchenCtrl.editName);
        // app.delete('/api/my-app/:id',kitchenCtrl.clearPlate);

        app.listen(port,()=>console.log(`Server is on ${port}`))