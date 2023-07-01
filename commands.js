module.exports = {
"真心話大冒險" :   function(interation){
        try {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
            }
            function rplmsg(input){
                interation.reply(input)
            }
            gamerole = interation.options.get("role").role
            probability = interation.options.get("probability").value
            players = interation.guild.members.cache.filter(member => member.roles.cache.some( r => r == gamerole))
            //players is a collection that members has the gamerole
            console.log(players.size)
            console.log(players)
            if((players.size<3)||(probability>100)||(probability<0)){
                if (players.size<3){
                    if((probability>100)||(probability<0)){
                        rplmsg("遊玩人數須為三人以上，機率數值設定超出範圍")
                        return
                    }
                    rplmsg("遊玩人數須為三人以上")
                    return
                }
                rplmsg("機率數值設定超出範圍")
                return;
            }
            randnum  = getRandomInt(0,players.size)
            asknum = getRandomInt(0,players.size)
            while(asknum == randnum){
                asknum = getRandomInt(0,players.size)
            }
            playarr = Array.from(players)
            if (getRandomInt(1, 101)<= probability){
                mode = "大冒險"
            }
            else{
                mode = "真心話"
            }
            ask = playarr[asknum]
            rand = playarr[randnum]
            rplmsg(`大冒險機率${probability}%，${ask[0]}出題，${rand[0]}${mode}`)
            }catch(error) {
            console.log(error);
        }
    }
}