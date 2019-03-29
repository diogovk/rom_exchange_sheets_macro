/**
* Fetches latest value for a certain item in ROM Exchange.
* @param item_name The name of the item being quoted
* @param server (optional) (default: "global") the ragnarok server to be used
* @customfunction
* Example Usage: 
*                =ROMX_latest("Orcish Voucher")
*                =ROMX_latest("Orcish Voucher", "sea")
*/
function ROMX_latest(item_name, server){
    server = typeof server !== 'undefined' ? server : "global";
    
    url = "https://www.romexchange.com/api?item="+item_name+"&range=Week"
    
    var res = UrlFetchApp.fetch(url);
    var content = res.getContentText();
    var json = JSON.parse(content);
    return json[0][server]["latest"]
    
  
  
}
