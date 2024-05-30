//@desc get all contact
//@route Get /api/contacts
//@access public

const getAllContacts = (req,res) => {
    res.status(200).json({message: "Get all contacts"})
}

//@desc create contact
//@route POST /api/contacts
//@access public

const createContact = (req,res) => {
    console.log("The request body is", req.body);
    res.status(201).json({message: "Create contact"})
}

//@desc get contact 
//@route GET /api/contacts/:id
//@access public

const getContact = (req,res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}` })
}

//@desc update contact 
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
}

//@desc update contact 
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req,res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
}

module.exports = {getAllContacts,getContact,updateContact,deleteContact,createContact}