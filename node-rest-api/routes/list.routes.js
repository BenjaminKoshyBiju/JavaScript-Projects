module.exports = (app) => {
    const list = require('../controllers/list.controller.js');

    
    app.post('/list/create', list.create);

   
    app.get('/list', list.findAll);

  
    app.get('/list/:id', list.findOne);

   
    app.put('/list/update/:id', list.update);

   
    app.delete('/list/delete/:id', list.delete);
}