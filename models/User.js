const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        Default: Date.now
    }
});

UserSchema.pre('save', function hashpassword(next) {
    //hash the password only if the password has been changed
    if(!this.isModified('modified')) {
        next();
        return;
    }
    
    // generate the hash
    bcrypt.hash(this.password, null, (err, hash) => {
        if(err) {
            next(err);
            return;
        }

        // change the password to the hashed version
        this.password = hash;
        next();
    });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
};
  
const User = mongoose.model('User', UserSchema);

module.exports = User;