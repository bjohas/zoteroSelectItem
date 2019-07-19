javascript:(function(){
var href = window.location.href;                                                                                                                      
var url = href.replace(/https?\:\/\/(www\.)?zotero\.org\//,"zotero://select/");                                                                       
url = url.replace(/\/[^\/]+\/items\/(collection|item)Key/,"/$1s");                                                                                    
window.location.href = url;                                                                                                                           
})();
