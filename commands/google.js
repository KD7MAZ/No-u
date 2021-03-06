const cheerio = require('cheerio')
const snekfetch = require('snekfetch')
const querystring = require('querystring')

// Depending on your command framework (or if you use one), it doesn't have to
// edit messages so you can rework it to fit your needs. Again, this doesn't have
// to be async if you don't care about message editing.
exports.run = async function (client, message, args) {
  // These are our two variables. One of them creates a message while we preform a search,
  // the other generates a URL for our crawler.
  let searchMessage = await message.channel.send('Searching...');
  let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content)}`;

  // We will now use snekfetch to crawl Google.com. Snekfetch uses promises so we will
  // utilize that for our try/catch block.
  return snekfetch.get(searchUrl).then((result) => {

    // Cheerio lets us parse the HTML on our google result to grab the URL.
    let $ = cheerio.load(result.text);

    // This is allowing us to grab the URL from within the instance of the page (HTML)
    let googleData = $('.r').first().find('a').first().attr('href');

    // Now that we have our data from Google, we can send it to the channel.
    googleData = querystring.parse(googleData.replace('/url?', ''));
    searchMessage.edit(`Result found!\n${googleData.q}`);

    // If no results are found, we catch it and return 'No results are found!'
  }).catch((err) => {
    searchMessage.edit('No results found!');
  });
}