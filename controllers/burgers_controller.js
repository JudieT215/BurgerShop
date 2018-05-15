var express = require("express");

var router = express.Router();

// / Import the model (burger.js) to use its database functions.
var burger_con = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res){
//     res.redirect('/burgers');
// });

router.get("/", function (req, res) {
    burger_con.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/create/burgers", function (req, res) {
    burger_con.create(
    ["newBurger", "eaten" ],
      [req.body.name, req.body.eaten],
      function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      }
    );
});

router.put('/burgers/update', function(req, res){
    burger_con.update(req.body.burger_id), function(result){
        console.log(result);
        res.redirect("/");
    }
})
// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger_con.update(
//       {
//         eaten: req.body.eaten
//       },
//       condition,
//       function(result) {
//         if (result.changedRows == 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
//       }
//     );
// });

router.delete("/burgers/delete/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger_con.delete(condition, function(result) {
      if (result.affectedRows == 0) {
      res.redirect('/');
      }
    });
});


// Export routes for server.js to use.
module.exports = router;