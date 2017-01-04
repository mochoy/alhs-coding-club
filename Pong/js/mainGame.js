var projectile, player; //Holds sprites for projectile and player
var playerSpeed = 7;   //Determines speed of player
var keyW, keyS;         //Used for movement via keyboard press
var gameVar = 
{
	preload: function()
	{
		game.load.image("projectileImg", "assets/penguin.png");
		game.load.image("playerImg", "assets/line.png");
	},

	create: function()
	{
		//Background color
		game.stage.backgroundColor = '#003366';
		
		//Create projectile
		projectile = game.add.sprite(60, 60, "projectileImg");
		projectile.scale.setTo(0.03, 0.03);        //Change size of projectile
		game.physics.arcade.enable(projectile);    //Enables projectile to use  phaser physics
		projectile.body.collideWorldBounds = true; //Projectile doesn't go out of bounds
		projectile.body.velocity.setTo(200, 200);  //Sets projectile's velocity (speed) 
		projectile.body.bounce.set(1);             //Projectile bounces around

		//Create player
		player = game.add.sprite(20, 70, "playerImg");
		player.scale.setTo(0.03, 0.03);            //Changes size of player
		game.physics.arcade.enable(player);        //Enables player to use phaser physics
		player.body.collideWorldBounds = true;     //Player doesn't go out of bounds
		player.body.immovable = true;              //Player doesn't get moved when it hits the projectile

		//Binds keys to keyA and keyD
		keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
		keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
	},

	update: function()
	{
		//Player and projectile can collide
		game.physics.arcade.collide(projectile, player);

		//Basic movements for player
		if(keyW.isDown)
		{
			player.y -= playerSpeed;
		}
		else if(keyS.isDown)
		{
			player.y += playerSpeed;
		}
	}
}