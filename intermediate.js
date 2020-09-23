var howmanynights = prompt("How many nights"); 

class Hotel {
	hotelName;
	numberOfNights;
	address;
	image;

	constructor (a, b, c, d) {
		this.hotelName = a;
		this.numberOfNights = b;
		this.address = c;
		this.image = d;
	}
	
	printHotel(){
		


		if (hotel1.numberOfNights > Number(howmanynights)) {
			document.getElementById("message").innerHTML = "I'll reserve";
		}else {
			document.getElementById("message").innerHTML = "Not available";
		}
		document.getElementById("hotel").innerHTML = "<img src='" + this.image + "'>"
		document.getElementById("something").innerHTML = howmanynights;
	}

}



var hotel1 = new Hotel ("Hilton", Math.round(Math.random()*11), "Miami", "hotel.jfif");
hotel1.printHotel();