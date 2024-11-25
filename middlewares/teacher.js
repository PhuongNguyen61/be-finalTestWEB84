const teacherMiddleware = {
    createTeacher: async (req, res, next) => {
        try {
            const {name, email, phoneNumber, dob, identity, address, degrees, des} = req.body
            if (!name) throw new Error('name is missing!')
            if (!email) throw new Error('email is missing!')
            if (!phoneNumber) throw new Error('phoneNumber is missing!')
            if (!dob) throw new Error('dob is missing!')
            if (!identity) throw new Error('identity is missing!')
            if (!address) throw new Error('address is missing!')
            if (!degrees) throw new Error('degrees is missing!')
            if (!des) throw new Error('des is missing!')
            return next()
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    }
}

export default teacherMiddleware