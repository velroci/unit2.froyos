function countFlavors() {
    // Get the input value and split it into an array of flavors
    const Getflavors = document.getElementById("Getflavors").value;
    const flavorsArray = Getflavors.split(",");

    // Create an object to store the count of each flavor
    const flavorCount = {};

    // Count the flavors
    for (const flavor of flavorsArray) {
        const trimmedFlavor = flavor.trim(); // Remove leading/trailing spaces
        if (trimmedFlavor in flavorCount) {
            flavorCount[trimmedFlavor]++;
        } else {
            flavorCount[trimmedFlavor] = 1;
        }
    }

    // Display the results in the browser console
    
 console.table(flavorCount);
}