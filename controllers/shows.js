const Show = require("../schemas").show;

const showDetail =  async (showId) => {
    try{
        const query = {showId};
        console.log('Controllers: ', query);
        return  await Show.findOne(query);
    }catch (err){
        console.error("Error : ", err);
    }
}
const listShows = async () => {
    try{
        return await Show.find({});
    }catch (err){
        console.error("Error : ", err);
    }
}

const filterShows = async (tag) => {
    try{
       let query = {title: {$regex: tag , $options: 'i'}};
        const shows = await Show.find(query);
        return shows;
    }catch (err){
        console.error("Error : ", err);
    }
}

module.exports ={
    listShows,
    showDetail,
    filterShows
}