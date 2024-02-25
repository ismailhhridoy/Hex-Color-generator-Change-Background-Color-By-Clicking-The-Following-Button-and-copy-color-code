/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler
// window.onload = ()=>{
// 	main()
// }
main();

function main(){
	const changeBtn = document.getElementById("change-btn");
	const root = document.getElementById("root");
	const output = document.getElementById("output");
	const copyBtn = document.getElementById("copy-btn");

	changeBtn.addEventListener('click', function(){
		root.style.backgroundColor = hexColorGenerator();
		output.value = hexColorGenerator();
		copyBtn.innerHTML = "Copy";
	})

	copyBtn.addEventListener('click', function(){
		navigator.clipboard.writeText(output.value);
		copyBtn.innerHTML = "Copied";
	})
}
// step 2 - random color generator function
function hexColorGenerator(){
	const red = Math.floor(Math.random()*255);
	const green = Math.floor(Math.random()*255);
	const blue = Math.floor(Math.random()*255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
// step 3 - collect all necessary references

// step 4 - handle the click event
