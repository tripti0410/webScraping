Api_Name=/getTimeStories
Api_Method=get
Api_Port=3000
Api_Fetch_Url=http://localhost:3000/getTimeStories

Api Working:
fetching the data of the web page(html of that web page) by using axios.get("https://time.com/") and than parsing it content by using "cheerio"(npm library for parsing the web pages) and than extracting the particular part of the web page.