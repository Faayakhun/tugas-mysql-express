const express = require ('express')
const connection = require('./config/db')
const userRouter = require('./router/user')
const productRouter = require('./router/product')
const orderRouter = require('./router/pesanan')

const app = express()

const PORT = process.env.PORT || 3000


connection.connect((err) => {
    if (err) {
        console.log(err.sqlMessage)
    } else {
        console.log('database connected')
    }
})

app.get('/', (req,res)=> {
    res.json('Tugas Express Mysql')
})

app.use('/user',userRouter)
app.use('/product', productRouter)
app.use('/pesanan',orderRouter)

app.listen(PORT, ()=> {
    console.log('tes running')
})