// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
const youtubeParser = (url) => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#]*).*/;
  var match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
}

export default youtubeParser