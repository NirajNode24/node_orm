var db = require('../models/index');
const Admin = db.Admin;

// const List_Admin = async (req, res) => {
//     console.log("called api")
//     const admin = await Admin.create({ firstName: "niraj", lastName: "kumar" });
//     console.log(admin instanceof Admin);
//     res.send('Hello test!')
//   }

 
const Add_Admin = async (req, res) => {
    try {
      var data =(req.body)
      console.log(data)
      const admin = await Admin.create(data);
      res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
      // Handle any errors that occur during the Admin creation process
      console.error("Error creating admin:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  const List_Admin = async (req, res) => {
      try {
        // Create an Admin with the given data
        const admin = await Admin.findAll();
        res.status(200).json({admin });
      } catch (error) {
        // Handle any errors that occur during the Admin creation process
        console.error("Error creating admin:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };

    const Get_Admin = async (req, res) => {
      try {
        // Create an Admin with the given data
        const admin = await Admin.findOne({ where: {
          id : req.params.id
        }});
        res.status(200).json({ message: `your id is:${req.params.id}`, admin });
      } catch (error) {
        // Handle any errors that occur during the Admin creation process
        console.error("Error creating admin:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };

    const Update_Admin = async (req, res) => {
      try {
        var data =req.body;
         await Admin.update(data, {
          where: { id: req.params.id}
        });
        res.status(200).json({ message: `Admin updated successfully ${req.params.id}` });
      } catch (error) {
        // Handle any errors that occur during the Admin creation process
        console.error("Error creating admin:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
    const Delete_Admin = async (req, res) => {
      try {
        await Admin.destroy({
          where: { id: req.params.id },
          // truncate: true
        });
    
        res.status(200).json({ message: `Admin deleted successfully ${req.params.id}` });
      } catch (error) {
        console.error("Error deleting admin:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
  
  
    module.exports = { Add_Admin, List_Admin,Get_Admin,Update_Admin,Delete_Admin};


