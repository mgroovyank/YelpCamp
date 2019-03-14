var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");
var data=[{
    name:"Flamenco Beach",
    image:"http://cdn.hiconsumption.com/wp-content/uploads/2015/06/Flamenco-Beach-In-Culebra-Puerto-Rico-0.jpg",
    description:"everyone loves beaches!"
},
          {
    name:"Fool Hollow Park",
    image:"http://cdn.hiconsumption.com/wp-content/uploads/2015/06/Fool-Hollow-Lake-Recreation-Area-Arizona-0.jpg",
    description:"Go with family"
}
];
function seedDB(){
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("removed campgrounds");
        data.forEach(function(seed){
    Campground.create(seed,function(err,campground){
        if(err){
            console.log(err);
        }else{
            console.log("added a campground");
            Comment.create({
                text:"I hope I had a football to play here on the beach",
                author:"Ryan"
            },function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    campground.comments.push(comment);
                    campground.save();
                    console.log("created new comment");
                }
            });
        }
    });
});
    }
  });
}


module.exports=seedDB;
