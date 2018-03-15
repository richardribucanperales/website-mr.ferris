console.log("loaded")

var dem = [];
var gre = [];
var lib = [];

var s = document.getElementById("standp")
var h = document.getElementById("historyp")
var p = document.getElementById("policyp")
var f = document.getElementById("featp")
var a = document.getElementById("appealp")
var im = document.getElementById("picture")
var col = document.getElementById("color")

function repChange(){
	var rep = ["The Republican Party is one of the oldest parties to show up in the United States. What they stand for as of right now, though, is they want to restore the American Dream. The way they plan to do that is that they will create strong, responsible, and hardworking Americans who will work for and spend their hard earned money on things that they need and want. This will then rebuild the economy, pushing more money into the market. They will also try to create more jobs and lessen taxes to make it fairer. (GOP)", "The Republican Party was founded on July 6, 1854, right after the anniversary of the nation. It was an anti-slavery convention, in Jackson, Michigan. It was hot, so the crowd was forced outside under a nearby oak grove. It was called the “Under the Oaks Convention,” and the first statewide candidates were selected. This would be the kick-starter for the Republican Party.<br><br>They were united by the desire to abolish slavery, and it was in Jackson hat the Platform of the Under the Oaks Convention read “… we will cooperate and be known as REPUBLICANS…” Before, there were smaller meetings, but the Under the Oaks Convention was the first ever mass meeting of the Republican. <br><br>How the Republicans got their name is fairly simple. The name was chosen alluding to Thomas Jefferson’s Democratic - Republican Party, and conveying a commitment to the inalienable rights of life, liberty, and the pursuit of happiness. (GOP)", "Here’s some of the main public policy issues that they face in this current day in age:<br> <li><ul>Budget and Spending</ul><ul>Economy</ul><ul>Education Reform</ul><ul>Elections</ul><ul>Energy and Environment</ul><ul>Family Values</ul><ul>Foreign Relations</ul><ul>Government Accountability</ul><ul>Health Care</ul><ul>Homeland Security</ul><ul>Immigration</ul><ul>Liberty</ul><ul>National Defense</ul><ul>Special Occasions</ul><ul>Veterans</ul><ul>White House</ul></li>(GOP)", "The website is well designed and looks very appealing. It has a donate page, join us page, a store, and a media page where they post all their twitter posts and current news with the party.", "Mainly the south and the younger generation such as the 18 year old military enlistees."];
	var dem = [];
	var gre = [];
	var lib = [];
	
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "red";
	im.src = "./assets/images/republican.png";
	s.innerHTML = rep[0];
	h.innerHTML = rep[1];
	p.innerHTML = rep[2];
	f.innerHTML = rep[3];
	a.innerHTML = rep[4];
}
function demChange(){
	var dem = ["The Democratic Party is another popular party in the United States. What they stand for right now is that they want to raise incomes and restore economic security for the middle class, create good paying jobs, fight for economic fairness against inequality, bring americans together, remove barriers to opportunity, protect voting rights, fix campaign finance systems, restore democracy, combat climate change, build a clean energy economy, secure environmental justice, ensure the health and safety of all americans, and provide quality and affordable education.(Democrats)", "The democrats pushed for the 19th Amendment, or the right for women to vote in elections. The Honorable President Woodrow Wilson, Democrat, was in office. When the great depression happened, people looked to the Honorable President Franklin D Roosevelt. He created the Social Security Act of 1935. It provided government funding checks to retirees, elderly, unemployed, widows, and orphans. In 1944, he signed the G.I. Bill, providing unprecedented benefits to soldiers returning from WWII. It gave them low cost mortgages, loans for business startups, and tuition reimbursement with living expenses for college. The democrats were also responsible for creating the Civil Rights Act of 1964.(Democrats)", "Here are some of the issues in the current day in age:<li><ul>Civil Rights</ul><ul>Education</ul><ul>Energy Independence</ul><ul>Environment</ul><ul>Health Care</ul><ul>Immigration Reform</ul><ul>Jobs and the Economy</ul><ul>National Security</ul><ul>Retirement Security</ul><ul>Science and Technology Development</ul><ul>Voting Rights for All</ul></li>(Democrats)", "The website is well designed and looks very appealing. It has a donate page, join us page, a store, and a media page where they post all their twitter posts and current news with the party.", "They mainly focus on the north and the new generation college students."];
	
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "blue";
	im.src = "./assets/images/democrat.png";
	s.innerHTML = dem[0];
	h.innerHTML = dem[1];
	p.innerHTML = dem[2];
	f.innerHTML = dem[3];
	a.innerHTML = dem[4];
}
function greenChange(){
	var gre = ["They stand for peace, ecology, social justice, and democracy. They want to cut worldwide military presences and their budget. They also think the human cost for the climate change is way too high. They want renewable energy. They also want a living wage for the high cost of living and a real safety net for when people are down on their luck. Finally, they want to see public financing of elections, open debates, and more representative voting systems.(GP)", "The party was founded on February 4th, 1990. It was founded at the meeting at California State University, Sacramento. They wanted to do a statewide ballot, but to do that, they had to qualify with the California Secretary of State. They needed to convince at least 78,992 Californians to change their voter register to the Green Party. At the meeting 27 Green locals voted in favor of forming a state party, and three stood aside. Other Greens stayed home in protest, arguing that party formation was premature and could co-opt Green values, ultimately undermining the long-term viability of the Green movement.(GP)", "Here’s some of the main issues they want to take care of:<li><ul>Universal Healthcare</ul><ul>Legalize Marijuana</ul><ul>Oppose Military Action in Syria</ul><ul>Independence for Puerto Rico</ul><ul>Cure Islamophobia from the General Populous.</ul></li>(GP)", "The website is well designed and looks very appealing. It has a donate page, join us page, a store, and a media page where they post all their twitter posts and current news with the party.", "The party really focuses on the enviornmenalist community and the Social Justicce Warriors. Like college students and people who are pro liberalist."];
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "green";
	im.src = "./assets/images/green.png";
	s.innerHTML = gre[0];
	h.innerHTML = gre[1];
	p.innerHTML = gre[2];
	f.innerHTML = gre[3];
	a.innerHTML = gre[4];
}
function libChange(){
	var lib = ["They believe that you are a unique and responsible individual. They strongly oppose Government interference into personal, family, and business decisions. They believe that Americans should be free to live their lives and pursue their interests as they see fit, just as long as it doesn’t harm others. (LP)", "They were founded in 1971, and by the Presidential election of 1972, the Libertarian party had 80 party members and attained ballot access in two states. (LP)", "Here’s some of the issues they face:<li><ul>Free to Decide to Pay Taxes</ul><ul>The Economy</ul><ul>Civil Liberties</ul><ul>Crime and Justice</ul><ul>Education</ul><ul> Foreign Policy</ul><ul>Healthcare</ul><ul>Right to own a firearm</ul><ul>War on Drugs</ul><ul>Immigration</ul><li>", "The website is well designed and looks very appealing. It has a donate page, join us page, a store, and a media page where they post all their twitter posts and current news with the party.", "They try to appeal to the younger generation that believes in the people, not the government."];

	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "yellow";
	im.src = "./assets/images/lib.jpg";
	s.innerHTML = lib[0];
	h.innerHTML = lib[1];
	p.innerHTML = lib[2];
	f.innerHTML = lib[3];
	a.innerHTML = lib[4];
}
function ampChange(){
	var amp = ["The American Party", "1972", "1976, Tom Anderson carried 161,000 votes", "Unkown, but most popular vote was in 1976", "Very Conservative, Christian Splinter"];
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "blue";
	im.src = "../assets/images/americanparty.jpg";
	s.innerHTML = amp[0];
	h.innerHTML = amp[1];
	p.innerHTML = amp[2];
	f.innerHTML = amp[3];
	a.innerHTML = amp[4];
}
function indChange(){
	var ind = ["American Independant Party", "iAround 1968", "1968, got 10 million votes and won 5 southern states.", "1968, 14% national vote", "Very liberal, right wing"];
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "blue";
	im.src = "../assets/images/independantparty.jpg";
	s.innerHTML = ind[0];
	h.innerHTML = ind[1];
	p.innerHTML = ind[2];
	f.innerHTML = ind[3];
	a.innerHTML = ind[4];
}
function jusChange(){
	var jus = ["Justice Party", "2011", "2012, got 43000 ballots in 16 states", "2012, won 43000 votes mkaing it 7th place.", "Liberal"];
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "blue";
	im.src = "../assets/images/justiceparty.png";
	s.innerHTML = jus[0];
	h.innerHTML = jus[1];
	p.innerHTML = jus[2];
	f.innerHTML = jus[3];
	a.innerHTML = jus[4];
}
function vetChange(){
	var vet = ["Veterans Party of America", "2003, legally dissolved in 2013, reintroduced 2014", "2016, 13th place with 70004 ballots", "2016, 13th place, 70004 ballots", "Moderate, but more towards conservative."]
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "blue";
	im.src = "../assets/images/veteransparty.jpg";
	s.innerHTML = vet[0];
	h.innerHTML = vet[1];
	p.innerHTML = vet[2];
	f.innerHTML = vet[3];
	a.innerHTML = vet[4];
}
function whigChange(){
	var whig = ["Modern Whig Party", "2008","?","?","Centralists"];
	var s = document.getElementById("standp")
	var h = document.getElementById("historyp")
	var p = document.getElementById("policyp")
	var f = document.getElementById("featp")
	var a = document.getElementById("appealp")
	var im = document.getElementById("picture")
	var col = document.getElementById("color")
	col.style.backgroundColor = "blue";
	im.src = "../assets/images/whigsparty.jpg";
	s.innerHTML = whig[0];
	h.innerHTML = whig[1];
	p.innerHTML = whig[2];
	f.innerHTML = whig[3];
	a.innerHTML = whig[4];
}
