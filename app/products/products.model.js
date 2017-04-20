var mongoose = require("mongoose");
var products = {
  Picture:{type:String},
    Name: { type: String },
    Price: { type: Number },
    Description: { type: String },
    ProductId:{type:String},
    Index:{type:String},
    createdDate: { type: Date,defaulte:Date.now },
    isAvailable: {type: Boolean,default:false}
};
//attach products to the schema
var productSchema = mongoose.Schema(products);
//attach schema to the collectioin/document
//in the database the table name is "products"
//mongoose will pluralize the modelname.
mongoose.model("product",productSchema);
