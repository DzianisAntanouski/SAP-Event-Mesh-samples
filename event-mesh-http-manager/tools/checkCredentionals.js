module.exports = function checkCredentional(args, message) {
    if(!args[2]) throw new Error(message); 
}