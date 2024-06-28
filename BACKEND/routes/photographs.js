const router = require("express").Router();
const multer = require("multer");
const Photography = require("../models/Album_gallery");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.route("/add").post(upload.array("images"), (req, res) => {
  const Album_Category = req.body.Album_Category;
  const Name = req.body.Name;
  const Description = req.body.Description;
  const images = req.files.map((file) => ({
    filename: file.originalname,
    path: file.path,
  }));

  const newPhotograph = new Photography({
    Album_Category,
    Name,
    Description,
    images,
  });

  newPhotograph.save()
    .then(() => {
      res.json("Photo Album Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getdetails").get((req,res) =>{
    Photography.find().then((albums) => {
        res.json(albums);
    }).catch((err) =>{
        console.log(err);
        res.status(500).json({ error: "An error occurred while fetching customer data." });
    })
})

router.route("/update/:id").put(async (req, res) => {
    const albumId = req.params.id;
    const { Album_Category , Name , Description, images} = req.body;
    
    const updateAlbum = {
      Album_Category,
      Name,
      Description,
      images,
    };

    await Photography.findByIdAndUpdate(albumId, updateAlbum).then((updatedAlbum)=>{
      res.status(200).send({status:"Album Updated", updatedAlbum})
    }).catch ((err) =>{
    console.error(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  })
});

    

router.route("/delete/:id").delete(async(req,res) =>{
    let albumId = req.params.id;

    await Photography.findByIdAndDelete(albumId)
    .then(() =>{
        res.status(200).send({status:"Album deleted"});

    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete data", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let albumId = req.params.id;

  await Photography.findById(albumId)
    .then((photographer) => {
      res.status(200).send({
        status: "Album fetched",
        photographer: {
          Album_Category: photographer.Album_Category,
          Name: photographer.Name,
          Description: photographer.Description,
          images: photographer.images,
        },
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with get album", error: err.message });
    });
});


module.exports = router;