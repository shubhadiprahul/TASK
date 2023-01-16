const categories = require('../model/categories')
const nodemailer = require('nodemailer');

exports.addCategories = async(req,res) =>{
    // console.log(req.file)
    console.log(req.body)
    const {name,img_url} = req.body
    if (!name && !img_url) {
        res.json({
            msg: "Enter name & url"
        })
        return
    }
    categories.create({
        categories_name: name,
        categories_img_url: img_url
    }).then((resp) => {
        res.json({
            code : 200,
            msg: "Category Added"
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            code: 400,
            msg: "Something went wrong"
        })
    })
}

exports.updateCategory = async (req,res) => {
    const {id,name,img_url}=req.body
    if (!id) {
        res.json({
            msg: "Enter ID"
        })
        return
    }
    categories.updateOne({
        _id: id
    },{
        $set:{
            categories_name: name,
            categories_img_url: img_url
        }
    }).then((resp)=> {
        if(resp.modifiedCount && resp.matchedCount) {
            res.json({
                code: 200,
                msg:"Updated"
            })
        } else {
            res.json({
                code: 200,
                msg:"Something wrong"
            })
        }
    }).catch((err) => {
        console.log(err)
        re.json({
            msg: "Something went wrong"
        })
    })
}


exports.deleteCategory = async (req,res) => {
    const {id} = req.body
    if (!id) {
        res.json({
            msg: "Enter ID"
        })
        return
    }
    categories.deleteOne({
        _id: id
    }).then((resp) =>{
        res.json({
            code: 200,
            msg: " Successfully Deleted"
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            code: 400,
            msg: `Something went wrong`
        })
    })
}




exports.SendMail = async(req,res) => {
    console.log(req.body)
    const {send_to,subject,message} = req.body

    let config = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 587,
        auth:{
            user:"shubhadip20@navgurukul.org",
            pass:"ShUBh@@08"
        }
    })

    let mailDetails = {
        from: "shubhadip20@navgurukul.org",
        to: send_to,
        subject: subject,
        html: `<h1>${message}<h1>`
    }

    config.sendMail(mailDetails,(err,data) => {
        if(err) {
            console.log(err)
            res.json({
                code: 400,
                msg:"something wrong"
            })
        } else {
            console.log("email sent")
            res.json({
                code: 200,
                msg:"email sent"
            })
        }
    })

    
}