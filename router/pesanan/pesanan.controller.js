const connection = require('../../config/db')

const queryPesanan = `select pesanan.id as pesananID, user.nama, product.nama as product, pesanan.tanggal, pesanan.total_harga 
from ((pesanan join user on pesanan.user_id = user.id)
join product on pesanan.product_id = product.id
)`

module.exports = {
    getAllOrder : (req,res) => {
        connection.query(queryPesanan, 
            (err,data)=> {
                if (err) {
                    console.log(err)
                } else {
                    res.json(data)
                }
            }
        )
    },
    getOrderByID: (req,res) => {
        connection.query(`${queryPesanan} where pesanan.id = ${req.params.id}`, 
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