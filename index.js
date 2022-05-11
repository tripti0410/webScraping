const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

app.get("/getTimeStories",(req,res)=>{
  const result = [];
  axios.get("https://time.com/")
  .then((r) =>{
    const $ = cheerio.load(r.data);
    $("div.latest-stories")
    .find("ul")
    .each((row, elem) => {
      if(row === 0) {
        $(elem).find('li').each((idx, elem) => {
            const key = $(elem).text().trim();
            const link = $(elem).find('a').attr('href');
            data={
              "title":key.split('\n')[0],
              "link":"https://time.com"+link
            }
            result.push(data);
            
        });
      }
    });
    res.status(200).send({
      "data":result
    })
  })
  .catch((err)=>{
    return err
  })
})

app.listen(3000,()=>{
  console.log("connection successfull")
})