const mongoose = require ("mongoose");

const bcrypt = require ("bcrypt");

const adminSchema = new mongoose.Schema({

username :{
    type:String,
    require:[true,"Username Is Required"]
},
email :{
    type:String,
    require:[true,"Email Is Required"]

},
password :{
    type:String,
    require:[true,"Password Is Required"],
    minlength:[6,"Password Must Be 6 Char"]
}
},{timestamps:true})

// Hooks
adminSchema.pre("save",async function (next) {
   if(!this.isModified("password"))return next ();
   this.password = await bcrypt.hash (this.password,10); 
});

adminSchema.method.comparePassword =  async function (matchedPassword) {
return await bcrypt.compare(matchPassword,this.Password)
};

const Admin = mongoose.model("admin",adminSchema);
module.exports = Admin;