function saveCheckboxState(id, isChecked) {
    localStorage.setItem(id, isChecked ? "true" : "false");
}

function loadCheckboxStates() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        const saved = localStorage.getItem(checkbox.id);
        if (saved === "true") {
            checkbox.checked = true;
        }
    });
}

function initChecklistSave() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            saveCheckboxState(checkbox.id, checkbox.checked);
        });
    });
}

loadCheckboxStates();
initChecklistSave();
