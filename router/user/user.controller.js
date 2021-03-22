const connection = require('../../config/db')

let queryUser = `select * from user`
const queryPesanan = `select pesanan.id as pesananID, user.nama, product.nama as product, pesanan.tanggal, pesanan.total_harga 
from ((pesanan join user on pesanan.user_id = user.id)
join product on pesanan.product_id = product.id
)`

module.exports = {
    getAllUser : (req,res) => {connection.query(queryUser,
        (err,data)=> {
            if(err) {
                console.log(err)
            } else {
                res.json(data)
            }
        }
        )
    },
    getUserByID: (req,res) => {
        connection.query(`${queryUser} where user.id = ${req.params.id}`,
        (err,data) => {
            if (err) {
                console.log(err)
            } else {
                res.json(data)
            }
        }
    )
    },
    getOrderByUserID : (req,res) => {
        connection.query(`${queryPesanan} where user.id = ${req.params.id}`, 
            (err,data)=> {
                if (err) {
                    console.log(err)
                } else {
                    res.json(data)
                }
            }
        )
    },
}