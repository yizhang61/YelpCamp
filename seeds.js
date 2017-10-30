var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?dpr=2&auto=format&fit=crop&w=767&h=511&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: " He is so unlucky that his young apprentice, Manolin, has been forbidden by his parents to sail with him and has been told instead to fish with successful fishermen. The boy visits Santiago's shack each night, hauling his fishing gear, "
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1499363536502-87642509e31b?dpr=2&auto=format&fit=crop&w=767&h=1150&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: " He is so unlucky that his young apprentice, Manolin, has been forbidden by his parents to sail with him and has been told instead to fish with successful fishermen. The boy visits Santiago's shack each night, hauling his fishing gear, "
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1504470695779-75300268aa0e?dpr=2&auto=format&fit=crop&w=767&h=1151&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: " He is so unlucky that his young apprentice, Manolin, has been forbidden by his parents to sail with him and has been told instead to fish with successful fishermen. The boy visits Santiago's shack each night, hauling his fishing gear, "
    }
];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err){
        // if (err) {
        //     console.log(err);
        // }
        // // console.log("removed campgrounds");
        // // Add a few campgrounds
        // data.forEach(function (seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             // console.log("added a campground");
        //             // Create a comment
        //             Comment.create({
        //                     text: "This place is great, but I wish it was internet",
        //                     author: "Homer"
        //                 }, function(err, comment) {
        //                 if (err) {
        //                     console.log(err);
        //                 } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     // console.log("Create a new comment!");
        //                 } 
        //             });
        //         }
        //     });
        // });
    });
    
}

module.exports = seedDB;

