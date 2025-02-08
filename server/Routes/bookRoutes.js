const express = require('express');
const Book = require('../models/book');

const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        const Books = await Book.find();

        res.status(200).json(Books);
    }
    catch(err){
        res.status(500).json({message:"Error fetching Books",err:err.message});
    }
});

router.get("/:id",async (req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).json({message:"Id not found",err:err.message});
        }
        res.status(200).json(book);
    }
    catch (err){
        res.status(500).json({message:"Error",err:err.message});
    }
})

router.post("/",async (req,res)=> {
    try{
        const {name,author,year} = req.body;
        const newbooks = new Book({name,author,year});
        await newbooks.save();
        res.status(200).json(newbooks);
    }
    catch (err){
        res.status(500).json({message:"Error posting books",err:err.message});
    }
});

router.put("/:id",async (req,res)=>{
    try{
        const {name,author,year} = req.body;
        const updateBook = await Book.findByIdAndUpdate(req.params.id,{name,author,year},{new:true,runValidators: true});

        res.status(200).json(updateBook)
    }
    catch (err){
        res.status(404).json({message:"Error updating the document",err:err.message});
    }
});

router.delete("/:id",async (req,res)=>{
    try{
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        if(!deleteBook){
            return res.status(404).json({messge:"Book not found"});
        }
        res.status(200).json(deleteBook)
    }
    catch (err){
        res.status(404).json({message:"Error updating the document",err:err.message});
    }
});


module.exports = router;