var log = {
  info: function(info){
    console.log("Info: " + info)
  },
  warning: function(warning){
    console.log("Warning: " + warning)
  },
  err: function(err){
    console.log("Err: " + err)
  }
}

module.exports = log;