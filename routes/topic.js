var express = require('express');
var router = express.Router();
const dao = require('../modals/daoservice');

//GET /api/topic
router.get('/', function(req, res, next) {
  //   res.send('Ja yhteys on!');
    dao.getAll((rows)=>{
        res.json(rows);
    })
  });
  
  //GET /api/topic/1
  router.get('/:id', function(req, res, next){
      dao.getOne(req.params.id,(rows)=>{
       res.json(rows[0]);
     })
   })
  
  //POST /api/topic
  router.post('/', function(req, res, next){
      dao.createOne(req.body, (rowCount)=>{
        if(rowCount>0)
        res.status(201).json({message:'Success, new topic created'});
        else{
          res.status(400).json({message:'Error'});
        }
      })
   })
  
  //  //PUT /api/topic/1
  router.put('/:id', function(req, res, next){
      dao.updateOne(req.body, req.params.id, (rowCount)=>{
        if(rowCount>0)
        res.status(200).json({message:'Success, topic updated'});
        else{
          res.status(400).json({message:'Error'});
        }
      })
    })
  
  //DELETE /api/postaus/1
    router.delete('/:id', function(req, res, next){
      dao.deleteOne(req.params.id, (rowCount)=>{
        if(rowCount>0)
        res.status(200).json({message:'Success, topic deleted'});
        else{
          res.status(400).json({message:'Error'});
        }
      })
    })
  
  
  
  module.exports = router;