
if(message.guild.id === "ID de ton serveur"){
    if(message.author.id === "302050872383242240"){ //Identifiant de disboard
      let auteur = message.embeds[0].description.substr(2, 18) //fetch l'utilisateur qui à bumper
      let msgrequis = "Bump effectué !" //fetch le message qui dit que vous avez bumper le serveur
      if(message.embeds[0].description.includes(msgrequis)){ //cherche le message "Bump effectué
      // N'oublier pas de rajouter votre fonction si vous voulez donner des crédits à la personne qui bump votre serveur !
      // Exemple avec quick.db :
      //db.add(votrefonction_${auteur}, 10)
      // Exemple avec wio.db :
      //db.add(votrefonction_${auteur}, 10) 
       message.channel.send(`<@${auteur}> vous avez gagné un truc !`) //s'envoie si la commande n'est pas en cooldown
      }else if(message.embeds[0].description.includes("avant que le serveur puisse être bumpé !")){
        message.channel.send(`<@${auteur}> vous n'avez rien gagné !`) //s'envoie si la commande est en cooldown
      }
    }
  }
