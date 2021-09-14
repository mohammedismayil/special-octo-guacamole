const mongoose = require('mongoose')


mongoose
.connect('mongodb://127.0.0.1:27017/special_octo_local',{ useNewUrlParser: true})
.then(console.log('mongo database connected successfully'))
.catch(e => {
    console.error('Connection error', e.message)
})
// mongoose
//     .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

const db = mongoose.connection

module.exports = db