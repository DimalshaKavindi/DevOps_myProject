const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const SignupScema = new Schema({
    
    Email :{
        type : String,
        required: true
    },

    UserName :{
        type : String,
        required : true
    },

    Password :{
        type : String,
        required : true
    }

})

const CustomerSignupmodel = mongoose.model("Customer_SignUp_Detail",SignupScema);
module.exports = CustomerSignupmodel;