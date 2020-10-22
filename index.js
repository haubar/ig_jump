
const axios = require('axios')
const qs = require('qs')

exports.jump = async(req, res) => {
    if(req.query.keyword){
      return gettag(req, res)
    }
}

  const getUrl = async(url, data='', headers='', method='GET') => {
    headers = headers ? headers : {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'}
    const options = {
      method: method,
      headers: headers,
      data: data,
      url
    }


    return await axios(options)
    .then(async (res) => {
      return res.data
    })
    .catch(async (err) => {
        await setTimeout(() => console.log(' To Reconnect !'), 6000);
        throw new Error(err)
    })
  }

   const gettag = async(req, res) => {
   
    let url = 'https://www.instagram.com/explore/tags/'+req.query.keyword+'/?__a=1'
    let json = await getUrl(url, '', headers)
    res.status(200).send(json.json)

  }
