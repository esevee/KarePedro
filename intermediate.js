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
		var howmanynights = document.getElementById("howmanynights").value 


		if (hotel1.numberOfNights > "howmanynights") {
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

document.getElementById("result").addEventListener("click", Hotel, false);





