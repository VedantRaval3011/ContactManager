const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model.js")
//@desc get all contact
//@route Get /api/contacts
//@access private

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id})
  res.status(200).json({contacts});
});

//@desc create contact
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    //here key value pair(name: name) are same so in ES6 we can just write the key 
    name,
    email,
    phone,
    user_id: req.user.id
  })
  res.status(201).json(contact);
});

//@desc get contact
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
  
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
  res.status(200).json(contact);
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
  if(contact.user_id.toString()!= req.user.id){
    req.status(403);
    throw new Error("User don't have permission to update others contacts")
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )
  res.status(200).json(updateContact);
});

//@desc update contact
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
  if(contact.user_id.toString()!= req.user.id){
    req.status(403);
    throw new Error("User don't have permission to update others contacts")
  }
  
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json("contact deleted succesfully");
});

module.exports = {
  getAllContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
