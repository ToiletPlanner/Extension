$(document).ready(function()
{
	$( '#tabs' ).tabs();
	initProfile();
	
	var t = new TOILETPLANNER.MODELS.Toilet("Male", 2, 3);
});

function initProfile() 
{
	var ddlGender = $( '#gender' );
	ddlGender.append(new Option(TOILETPLANNER.MODELS.Gender.MALE.name, TOILETPLANNER.MODELS.Gender.MALE.abbrev))
			.append(new Option(TOILETPLANNER.MODELS.Gender.FEMALE.name, TOILETPLANNER.MODELS.Gender.FEMALE.abbrev))
			.change(selectGender);
			
	var gender = localStorage.getItem(TOILETPLANNER.PERSISTENCE.genderKey);
	if (gender) {
		$( '#gender' ).val(gender);
	}
}

function selectGender() {
	var gender = $(this).val();
	if (gender) 
		localStorage.setItem(TOILETPLANNER.PERSISTENCE.genderKey, gender);
	else
		localStorage.removeItem(TOILETPLANNER.PERSISTENCE.genderKey);
}