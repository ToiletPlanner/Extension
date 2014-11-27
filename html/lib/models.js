// Create models namespace
TOILETPLANNER.createNamespace("TOILETPLANNER.MODELS");

// Gender enumeration
TOILETPLANNER.MODELS.Gender = 
{
	MALE : { name: "Male", abbrev: "M" },
	FEMALE : { name: "Female", abbrev: "F" }
};

// Toilet object
TOILETPLANNER.MODELS.Toilet = function(gender, totalCubicles, totalUrinals) 
{
	if (gender !== TOILETPLANNER.MODELS.Gender.MALE || 
		gender !== TOILETPLANNER.MODELS.Gender.FEMALE)
	{
		throw new Error("Not a valid gender specified!");
	}
	
	if (typeof totalCubicles !== "number" || totalCubicles < 0) {
		throw new Error("Invalid number of cubicles specified!");
	}
	
	if (typeof totalUrinals !== "number" || totalUrinals < 0) {
		throw new Error("Invalid number of urinals specified!");
	}
	
	this.gender = gender;
	this.totalCubicles = totalCubicles;
	this.totalUrinals = gender === TOILETPLANNER.MODELS.Gender.FEMALE ? 0 : totalUrinals;
}