// Habit Tracker JavaScript
// Saves and restores checkbox state using localStorage

const STORAGE_KEY = "habit-tracker-data";

function saveState() {
  const data = [];
  document.querySelectorAll("tbody tr").forEach((row, rowIndex) => {
    const rowData = [];
    row.querySelectorAll("input[type='checkbox']").forEach(cb => {
      rowData.push(cb.checked);
    });
    data[rowIndex] = rowData;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadState() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!data) return;

  document.querySelectorAll("tbody tr").forEach((row, rowIndex) => {
    if (!data[rowIndex]) return;
    row.querySelectorAll("input[type='checkbox']").forEach((cb, i) => {
      cb.checked = data[rowIndex][i];
    });
  });
}

function attachEvents() {
  document.querySelectorAll("input[type='checkbox']").forEach(cb => {
    cb.addEventListener("change", saveState);
  });
}

window.addEventListener("load", () => {
  loadState();
  attachEvents();
});
