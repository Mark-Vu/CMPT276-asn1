let maxBound = parseFloat(document.getElementById('maxBound').value);
let APlusBound = parseFloat(document.getElementById('A+Bound').value);
let ABound = parseFloat(document.getElementById('ABound').value);
let AMinusBound = parseFloat(document.getElementById('A-Bound').value);

let BPlusBound = parseFloat(document.getElementById('B+Bound').value);
let BBound = parseFloat(document.getElementById('BBound').value);
let BMinusBound = parseFloat(document.getElementById('B-Bound').value);

let CPlusBound = parseFloat(document.getElementById('C+Bound').value);
let CBound = parseFloat(document.getElementById('CBound').value);
let CMinusBound = parseFloat(document.getElementById('C-Bound').value);

let DBound = parseFloat(document.getElementById('DBound').value);
let FBound = parseFloat(document.getElementById('FBound').value);


const newGradeInput = document.getElementById('newGradeInput');

const submitBtn = document.getElementById('boundSubmitBtn');

const APlusBar = document.getElementsByClassName('APlusBar');
const ABar = document.getElementsByClassName('ABar');
const AMinusBar = document.getElementsByClassName('AMinusBar');
const BPlusBar = document.getElementsByClassName('BPlusBar'); // Corrected class name
const BBar = document.getElementsByClassName('BBar');
const BMinusBar = document.getElementsByClassName('BMinusBar');
const CPlusBar = document.getElementsByClassName('CPlusBar');
const CBar = document.getElementsByClassName('CBar');
const CMinusBar = document.getElementsByClassName('CMinusBar');
const DBar = document.getElementsByClassName('DBar');
const FBar = document.getElementsByClassName('FBar');


var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
  49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

function updateGrades(grades) {
  let APlusCount = 0;
  let ACount = 0;
  let AMinusCount = 0;
  let BPlusCount = 0;
  let BCount = 0;
  let BMinusCount = 0;
  let CPlusCount = 0;
  let CCount = 0;
  let CMinusCount = 0;
  let DCount = 0;
  let FCount = 0;
  const maxCount = Math.max(
    APlusCount, ACount, AMinusCount,
    BPlusCount, BCount, BMinusCount,
    CPlusCount, CCount, CMinusCount,
    DCount, FCount
  );
  for (grade of grades) {
    if (grade >= APlusBound && grade <= maxBound) {
      APlusCount++;
      updateBar(APlusBar, APlusCount);
    } else if (grade >= ABound && grade < APlusBound) {
      ACount++;
      updateBar(ABar, ACount);
    } else if (grade >= AMinusBound && grade < ABound) {
      AMinusCount++;
      updateBar(AMinusBar, AMinusCount);
    } else if (grade >= BPlusBound && grade < AMinusBound) {
      BPlusCount++;
      updateBar(BPlusBar, BPlusCount);
    } else if (grade >= BBound && grade < BPlusBound) {
      BCount++;
      updateBar(BBar, BCount);
    } else if (grade >= BMinusBound && grade < BBound) {
      BMinusCount++;
      updateBar(BMinusBar, BMinusCount);
    } else if (grade >= CPlusBound && grade < BMinusBound) {
      CPlusCount++;
      updateBar(CPlusBar, CPlusCount);
    } else if (grade >= CBound && grade < CPlusBound) {
      CCount++;
      updateBar(CBar, CCount);
    } else if (grade >= CMinusBound && grade < CBound) {
      CMinusCount++;
      updateBar(CMinusBar, CMinusCount);
    } else if (grade >= DBound && grade < CMinusBound) {
      DCount++;
      updateBar(DBar, DCount);
    } else if (grade >= FBound && grade <= DBound) {
      FCount++;
      updateBar(FBar, FCount);
    }
  }

}
updateGrades(grades);
function updateBar(barElements, barCount) {
  const barWidth = barCount * 4 + '%'; // Adjust the width factor as needed
  barElements[0].style.width = barWidth;
  barElements[0].textContent = barCount;
}



function isValidNumber(value, max, min) {
  
  return /^-?\d*\.?\d+$/.test(value) && (value <= max && value >= min);
}

function isValidBound() {
  maxBound = parseFloat(document.getElementById('maxBound').value);
  APlusBound = parseFloat(document.getElementById('A+Bound').value);
  ABound = parseFloat(document.getElementById('ABound').value);
  AMinusBound = parseFloat(document.getElementById('A-Bound').value);
  BPlusBound = parseFloat(document.getElementById('B+Bound').value);
  BBound = parseFloat(document.getElementById('BBound').value);
  BMinusBound = parseFloat(document.getElementById('B-Bound').value);
  CPlusBound = parseFloat(document.getElementById('C+Bound').value);
  CBound = parseFloat(document.getElementById('CBound').value);
  CMinusBound = parseFloat(document.getElementById('C-Bound').value);
  DBound = parseFloat(document.getElementById('DBound').value);
  FBound = parseFloat(document.getElementById('FBound').value);
  if (
    !isNaN(maxBound) && !isNaN(APlusBound) && !isNaN(ABound) && !isNaN(AMinusBound) &&
    !isNaN(BPlusBound) && !isNaN(BBound) && !isNaN(BMinusBound) &&
    !isNaN(CPlusBound) && !isNaN(CBound) && !isNaN(CMinusBound) &&
    !isNaN(DBound) && !isNaN(FBound)
  ) {
    if (
      maxBound >= APlusBound && APlusBound >= ABound && ABound >= AMinusBound &&
      AMinusBound >= BPlusBound && BPlusBound >= BBound && BBound >= BMinusBound &&
      BMinusBound >= CPlusBound && CPlusBound >= CBound && CBound >= CMinusBound &&
      CMinusBound >= DBound && DBound >= FBound
    ) {
      return true;
    }
  }
  
  return false;
}
function updateSaveStatus() {
  if (submitBtn.disabled) {
    saveStatus.textContent = "Saved";
    saveStatus.style.color = "green";
  } else {
    saveStatus.textContent = "Not Saved";
    saveStatus.style.color = "red";
    saveStatus.style.fontStyle = "italic";
  }
}
submitBtn.disabled = true;
function bindSubmitRequired() {
  const bounds = [
    'maxBound',
    'A+Bound',
    'ABound',
    'A-Bound',
    'B+Bound',
    'BBound',
    'B-Bound',
    'C+Bound',
    'CBound',
    'C-Bound',
    'DBound',
    'FBound'
  ];

  for (const bound of bounds) {
    const inputElement = document.getElementById(bound);
    inputElement.addEventListener('input', function() {
      submitBtn.disabled = false;
      updateSaveStatus();
    });
  }

  submitBtn.addEventListener('click', function() {
    if (isValidBound()) {
      submitBtn.disabled = true;
      updateGrades(grades);
    } else {
      alert('Invalid bound. Please enter valid bounds.');
    }
    updateSaveStatus();
  });

  newGradeInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      maxBound = parseFloat(document.getElementById('maxBound').value);
      FBound = parseFloat(document.getElementById('FBound').value);
      event.preventDefault();
      if (submitBtn.disabled) {
        const enteredValue = newGradeInput.value;
        if (isValidNumber(enteredValue, maxBound, FBound)) {
          grades.push(enteredValue);
          updateGrades(grades);
          newGradeInput.value = "";
        } else {
          alert("Invalid input. Please enter a valid number.");
        }
      } else {
        alert("Please save the bounds first by clicking the Save button.");
      }
    }
  });
}
bindSubmitRequired();