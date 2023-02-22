//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 255;
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	bacground_imgTag.src = background_image;


	background_imgTag = new Image();
	background_imgTag.onload = uploadgreencar;
	bacground_imgTag.src = greencar_image
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar.width, greencar.height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("uwuwuwuwuwuwuuw up")
		upload_background();
		upload_greencar();
	}
	//Define function to move the car upward
}

function down()
{
	greencar_y = greencar_y + 10;
		console.log("uwuwuwuwuwuwuuw down")
		upload_background();
		upload_greencar();
	//Define function to move the car downward
}

function left()
{
	greencar_x = greencar_x - 10;
		console.log("uwuwuwuwuwuwuuw left")
		upload_background();
		upload_greencar();
	//Define function to move the car left side
}

function right()
{
	greencar_y = greencar_y + 10;
		console.log("uwuwuwuwuwuwuuw right")
		upload_background();
		upload_greencar();
	//Define function to move the car right side
}
