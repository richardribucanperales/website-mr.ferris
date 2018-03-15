console.log("loaded")
var rep = ["The Republican Party is one of the oldest parties to show up in the United States. What they stand for as of right now, though, is they want to restore the American Dream. The way they plan to do that is that they will create strong, responsible, and hardworking Americans who will work for and spend their hard earned money on things that they need and want. This will then rebuild the economy, pushing more money into the market. They will also try to create more jobs and lessen taxes to make it fairer. (GOP)", "The Republican Party was founded on July 6, 1854, right after the anniversary of the nation. It was an anti-slavery convention, in Jackson, Michigan. It was hot, so the crowd was forced outside under a nearby oak grove. It was called the “Under the Oaks Convention,” and the first statewide candidates were selected. This would be the kick-starter for the Republican Party.<br><br>They were united by the desire to abolish slavery, and it was in Jackson hat the Platform of the Under the Oaks Convention read “… we will cooperate and be known as REPUBLICANS…” Before, there were smaller meetings, but the Under the Oaks Convention was the first ever mass meeting of the Republican. <br><br>How the Republicans got their name is fairly simple. The name was chosen alluding to Thomas Jefferson’s Democratic - Republican Party, and conveying a commitment to the inalienable rights of life, liberty, and the pursuit of happiness. (GOP)"];
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
	col.styles.backgroundColor = "red"
	im.src = "../images/republican.png"
	s.innerHTML = rep[0]
	h.innerHTML = rep[1]
}