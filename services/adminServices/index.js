const Hotel = require('../../models/Hotel')
const Room = require('../../models/Room')

async function createHotel(req,res){
    
    const {name,city,address,title,desc,totalRooms,roomsInfo} = req.body;

    try {
        let hotel = new Hotel({name,city,address,title,desc,totalRooms});
        let savedHotel = await hotel.save();

        if(roomsInfo.length>0){

        let dummyRooms = [];
        roomsInfo.map((room)=>{

            let noOfRooms = room.noOfRooms;
            let roomNo = room.start;
            let type = room.type;
            let price = room.price;

            for(let i = 0; i<noOfRooms; i++){
                let obj = {
                    hotel:hotel._id,
                    roomNumber:roomNo,
                    roomType:type,
                    pricePerNight:price
                }
                roomNo = roomNo + 1;
                dummyRooms.push(obj);
            }

        });

        const rooms = await Room.insertMany(dummyRooms);
        
        const roomsId = rooms.map((room)=>room._id);
        savedHotel.rooms.push(...roomsId);
        const updatedHotel = await savedHotel.save();

        return res.status(201).send({
            msg:"true",
            res:updatedHotel
        })
    }
        return res.status(201).send({
            msg:"true",
            res:hotel
        })
    } catch (error) {
        res.send({
            err:error
        })
    }
}


module.exports = {
    createHotel
}