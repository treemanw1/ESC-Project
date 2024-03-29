const express= require('express');
const router= express.Router();
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');

require("../db/conn");
const User= require("../model/userSchema");

const authenticate= require("../middleware/authenticate");
// const User= userschema.User;

router.get('/', (req, res) => {
    res.send(`Hello world from the server ~Router.js`);
});

// adding data through promises
// router.post('/register', (req, res) => {
    
//     const {firstname, lastname, phonenumber, emailaddress, password, confirmpassword }= req.body;
    
//     if(!firstname || !lastname || !phonenumber || !emailaddress || !password || !confirmpassword){
//         return res.status(422).json({error:"Fill all the required fields"});
//     }



//     User.findOne({emailaddress:emailaddress})
//         .then((userExists) => {
//         if(userExists){
//             return res.status(422).json({error:"Email already exists!"});
//         }

//         const user= new User({firstname, lastname, phonenumber, emailaddress, password, confirmpassword});

//         user.save().then(() => {
//             res.status(201).json({message:"User registered succesfully"})
//         }).catch((err) => res.status(500).json({error: "Failed to register succesfully"}))
//     }).catch(err => {console.log(err); });
// });

router.post('/register', async (req, res) => {
    
    const {firstname, lastname, phonenumber, emailaddress, password, confirmpassword }= req.body;
    
    if(!firstname || !lastname || !phonenumber || !emailaddress || !password || !confirmpassword){
        return res.status(422).json({error:"Fill in all the required fields!"});
    }
    if(password.length<6){
        return res.status(425).json({error:"Password too short!"})
    }
    
    try{
        const userExists= await User.findOne({emailaddress:emailaddress});
        if(userExists){
            return res.status(423).json({error:"User with given email already exists!"});
        } else if(password != confirmpassword){
            return res.status(424).json({error:"Password and Confirm Password fields not the same!"});
        } else{
            const user= new User({firstname, lastname, phonenumber, emailaddress, password, confirmpassword});
            
            await user.save();
            res.status(201).json({message:"User registered succesfully!"});
        }

        

    } catch(err){
        console.log(err);
    }
    
});

//login workflow

router.post('/login', async (req, res) => {
    const {emailaddress, password}= req.body;
 
    if (!emailaddress || !password){
        //window.alert("Fill in all the required fields!")
        return res.status(422).json({error:"Fill in all the required fields"})
        
    }

    
    try{
        let token;
        //const {emailaddress, password} = req.body;
        // if(!emailaddress || !password){
        //     return res.status(400).json({error:"Please fill all required inputs!"})
        // }

        const userLogin= await User.findOne({emailaddress:emailaddress});


        if (userLogin){

            const check= await bcrypt.compare(password, userLogin.password);

            token= await userLogin.generateAuthToken();
            


            

            // res.cookie("jwttoken", token, {
            //     expires: new Date(Date.now()+60000000),
            //     httpOnly:true
            // });

            if(!check){
                res.status(400).json({error:"Invalid keyed in credentials!"});
            } else{
                res.json({message:"User Login Successful!"});
            }
        } else{
            res.status(400).json({error:"Invalid keyed in credentials!"});
        }

        



    } catch(err){
        console.log(err);
    }
});


router.get('/about', authenticate, async (req, res) => {
    const {emailaddress, password}= req.body;
 
    if (!emailaddress || !password){
        window.alert("Fill in all the required fields!")
        return res.status(422).json({error:"Fill in all the required fields"})
        
    }

    
    try{
        // let token;
        //const {emailaddress, password} = req.body;
        // if(!emailaddress || !password){
        //     return res.status(400).json({error:"Please fill all required inputs!"})
        // }

        const userLogin= await User.findOne({emailaddress:emailaddress});


        if (userLogin){
            
            const check= await bcrypt.compare(password, userLogin.password);

            //token= await userLogin.generateAuthToken();
            
            // res.cookie("jwtoken", token, {
            //     expires: new Date(Date.now()+6000000000),
            //     httpOnly:true
            // });

            

            if(!check){
                res.status(400).json({error:"Invalid keyed in credentials!"});
            } else{
                res.json({message:"User Login Successful!"});
                res.send(req.rootUser);
            }

           
        } else{
            res.status(400).json({error:"Invalid keyed in credentials!"});
        }

        



    } catch(err){
        console.log(err);
    }
    
});



module.exports= router;