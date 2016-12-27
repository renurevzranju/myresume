/*Bio */
var bio = {
	'name': 'Revathi Selvanathan',
	'role': 'Web-Developer',
	'welcomeMessage': '☯ “Do not go where the path may lead, go instead where there is no path and leave a trail.” ☯ - Ralph Waldo Emerson',
	'birth': {
		'date': '20 December 1992',
		'location': 'Pondicherry, India'
	},
	'contacts': {
		'email': 'revathimeenashi@gmail.com',
		'mobile': '555-123-985',
		'github': 'renurevzranju'
	},
	'skills': ['Programming','Handicraft Works','Sketching','Teaching','Painting'],
	'biopic': 'images/rev.jpg'
};
 //Display Function for Bio Section:
 bio.display = function () {
 	//Prepend names in the header and footer
 	$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
 	$('#lets-connect').prepend(HTMLfooterName.replace('%data%', bio.name));

 	//Appending all other variables in Bio:
 	var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');
    var formattedHTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedHTMLbirthdate = HTMLbirthdate.replace('%data%', bio.birth.date);
    var formattedHTMLbirthplace = HTMLbirthplace.replace('%data%', bio.birth.location);
    var formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);

    // Append the role, birth and contact information at the header of the website
    $topContacts.append(formattedHTMLheaderRole, formattedHTMLbirthdate, formattedHTMLbirthplace, formattedHTMLemail, formattedHTMLmobile, formattedHTMLgithub);
    $footerContacts.append(formattedHTMLheaderRole, formattedHTMLbirthdate, formattedHTMLbirthplace, formattedHTMLemail, formattedHTMLmobile, formattedHTMLgithub);
    
    // Append the image and the welcome message
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic).replace('%alt%', bio.name));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills.length) {
        var wordlength = bio.skills.length;
        // Append all the skills, and the skills title
        $('#header').append(HTMLskillsStart);
        for (var skill = 0; skill < wordlength; skill++) {
            $('#skills').append(HTMLskills.replace('%data%', ' ⚛ ' + bio.skills[skill]));
        }
    }   
 };

//Education Section
var education = {
	'schools' : [
		{
			'name': 'SRM University',
			'location': 'Chennai, India',
			'degree': 'Masters of Technology',
			'majors': ['Communication Systems'],
			'dates': '2014-2016',
			'url': 'https://en.wikipedia.org/wiki/SRM_University'
		},{
			'name': 'Pondicherry University',
			'location': 'Pondicherry, India',
			'degree': 'Bachelors of Technology',
			'majors': ['Electronics and Communication Engineering'],
			'dates': '2010-2014',
			'url': 'https://en.wikipedia.org/wiki/Pondicherry_University'
		}
	],
	'onlineCourses' : [
		{
			'title': 'Online Course',
			'school': 'Udacity',
			'major': 'Front-End Web Development',
			'dates': '2016',
			'url': 'https://en.wikipedia.org/wiki/Udacity'
		}
	]
};

//Display the education function:
education.display = function () {
	var educationLength = education.schools.length;
	for (var school = 0; school < educationLength; school++) {
		$('#education').append(HTMLschoolStart);

	//Create all the variables and append it.
		var $lastEducationEntry = $('.education-entry:last');
		var formattedHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[school].name) + HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);

		// Append the info that is not an array
        $lastEducationEntry.append(formattedHTMLschoolName, formattedHTMLschoolDates, formattedHTMLschoolLocation);
        
        // Append the info from the 'majors' array, throught a loop
        if (education.schools[school].majors.length > 0) {
            var wordlength = education.schools[school].majors.length;
            for (var major = 0; major < wordlength; major++) {
                $lastEducationEntry.append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
            }
        }

        // Append the URL in the <a href> from the school name. Also add the target=_blank property to the link.
        $('.education-entry:last a').attr('href', education.schools[school].url).attr('target', '_blank');
	}
		var onlineLength = education.onlineCourses.length;
		for (var course = 0; course < onlineLength; course++) {
			$('#education').append(HTMLonlineStart);

			var $lastOnlineEntry = $('.online-entry:last');
			var formattedcourseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
			var formattedHTMLcourseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
			var formattedHTMLcourseMajor = HTMLonlineMajor.replace('%data%', education.onlineCourses[course].major);
			$lastOnlineEntry.append(formattedcourseTitle, formattedHTMLcourseDates, formattedHTMLcourseMajor);

			$('.online-entry:last a').attr('href', education.onlineCourses[course].url).attr('target', '_blank');
		}
};

//Work Section:
var work = {
	'jobs': [
	{
		'employer': 'Home Decor',
		'title': 'Interior Designer',
		'location': 'Pondicherry, India',
		'dates': '2014-2015',
		'description': 'Interior design is the art and science of enhancing the interiors, sometimes including the exterior, of a space or building, to achieve a healthier and more aesthetically pleasing environment for the end user. An interior designer is someone who plans, researches, coordinates, and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.',
		'url': 'https://en.wikipedia.org/wiki/Interior_design'
	},{
		'employer': 'Handicraft Products',
		'title': 'Designer',
		'location': 'Pondicherry, India',
		'dates': '2014-2016',
		'description': 'A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by hand or by using only simple tools. It is a traditional main sector of craft, and applies to a wide range of creative and design activities that are related to making things with ones hands and skill, including work with textiles, moldable and rigid materials, paper, plant fibers, etc. Usually the term is applied to traditional techniques of creating items (whether for personal use or as products) that are both practical and aesthetic.Handicraft industries are those that produces things with hands to meet the needs of the people in their locality.Machines are not used.',
		'url': 'https://en.wikipedia.org/wiki/Handicraft'
	}
	]
};

// Display of Work Section:
work.display = function () {
	var workLength = work.jobs.length;
	for (var job = 0; job < workLength; job++) {
		//Work Div
		$ ('#workExperience').append(HTMLworkStart);

		//Creating all variables and appending together
		var $lastWorkEntry = $('.work-entry:last');
		var formattedHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		var formattedHTMLworkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		
		$lastWorkEntry.append(formattedHTMLworkEmployer);
		$lastWorkEntry.append(formattedHTMLworkDates, formattedHTMLworkDescription, formattedHTMLworkLocation);
		$('.work-entry:last a').attr('href', work.jobs[job].url).attr('target','_blank');
	}
};

//Project Section:
var projects = {
	'projects': [
	{
		'title': 'Metasurface based circular Polarized Reconfigurable Antenna',
		'dates': '2015-2016',
		'description': 'A reconfigurable antenna is an antenna capable of modifying dynamically its frequency and radiation properties in a controlled and reversible manner. In order to provide a dynamical response, reconfigurable antennas integrate an inner mechanism (such as RF switches, varactors, mechanical actuators or tunable materials) that enable the intentional redistribution of the RF currents over the antenna surface and produce reversible modifications over its properties. Reconfigurable antennas differ from smart antennas because the reconfiguration mechanism lies inside the antenna rather than in an external beamforming network. The reconfiguration capability of reconfigurable antennas is used to maximize the antenna performance in a changing scenario or to satisfy changing operating requirements.',
		'images': ['./images/ra.jpg', './images/ra1.jpg', './images/ra2.jpg', './images/ra3.jpg'],
		'url': 'http://ieeexplore.ieee.org/document/7295588/'
	},{
		'title': 'An Efficient Segmentation of Hyperspectal Images',
		'dates': '2013-2014',
		'description': 'Hyperspectral imaging, like other spectral imaging, collects and processes information from across the electromagnetic spectrum. The goal of hyperspectral imaging is to obtain the spectrum for each pixel in the image of a scene, with the purpose of finding objects, identifying materials, or detecting processes',
		'images': ['./images/hp1.jpg', './images/hp2.jpg', './images/hp3.jpg', './images/hp4.jpg', './images/hp5.jpg'],
		'url': 'https://en.wikipedia.org/wiki/Hyperspectral_imaging'
	}
	]
};

//Display the Project Section:
projects.display = function() {
	var projectLength = projects.projects.length;
	for (var project = 0; project < projectLength; project++) {
		$('#projects').append(HTMLprojectStart);
		//Creating variables and appending it
		var $lastProjectEntry = $('.project-entry:last');
		var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

		$lastProjectEntry.append(formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);

		//Append images through loop
		if (projects.projects[project].images.length > 0) {
			var wordLength = projects.projects[project].images.length;
			for (var image = 0; image < wordLength; image++) {
				$lastProjectEntry.append(HTMLprojectImage.replace('%data%', projects.projects[project].images[image]));
			}
		}
		$('.project-entry:last a').attr('href', projects.projects[project].url).attr('target', '_blank');
	}
};


//MAP Section:
$('#mapDiv').append(googleMap);

//Invocation
bio.display();
education.display();
work.display();
projects.display();