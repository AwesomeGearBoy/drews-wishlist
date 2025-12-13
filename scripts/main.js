function saveCheckboxState(id, isChecked) {
    saveState = isChecked ? "true" : "false";
    console.log("Setting checkbox ID [" + id + "] to " + saveState);
    localStorage.setItem(id, saveState);
}

function loadCheckboxStates() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    console.log("Setting checks...");
    checkboxes.forEach(checkbox => {
        const saved = localStorage.getItem(checkbox.id);
        if (saved === "true") {
            checkbox.checked = true;
        }
    });
}

function initChecklistSave() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    console.log("Listening for checkbox input...");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            saveCheckboxState(checkbox.id, checkbox.checked);
        });
    });
}

console.log("Loading all items...");
loadCheckboxStates();
console.log("Initiating save data...");
initChecklistSave();
