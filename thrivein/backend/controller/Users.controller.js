import db from "../models/index.js";
const User = db.users;
export const register = (req, res) => {
    const { fullName, email, password } = req.body;
    const _user = new User({ fullName, email, password });
    _user.save((err, userDetails) => {
        if (err) {
            console.log(err)
            res.status(500).send({ msg: err });
            return;
        }
        res.send({
            msg: "Successful"
        })
    });
}