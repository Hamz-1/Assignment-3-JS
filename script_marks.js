const subjects = ['Programming Fundamentals', 'ICT', 'Linear Algebra', 'HCI', 'English'];


function createTableRows() {
    const tbody = document.querySelector('#markTable tbody');

    subjects.forEach(subject => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${subject}</td>
            <td>100</td>
            <td><input type="number" class="obtainedMarks" required></td>
            <td class="percentage"></td>
            <td class="grade"></td>
        `;
        tbody.appendChild(tr);
    });
}

createTableRows();

function calculateResults() {
    const obtainedMarksElements = document.querySelectorAll('.obtainedMarks');
    let totalObtainedMarks = 0;
    let totalMarks = 0;

    obtainedMarksElements.forEach(element => {
        const obtainedMarks = parseInt(element.value) || 0;
        totalObtainedMarks += obtainedMarks;
        totalMarks += 100;

        const percentage = (obtainedMarks / 100) * 100;
        const grade = calculateGrade(percentage);

        const row = element.parentNode.parentNode;
        row.querySelector('.percentage').textContent = percentage.toFixed(2) + '%';
        row.querySelector('.grade').textContent = grade;
    });

    const totalPercentage = (totalObtainedMarks / totalMarks) * 100;
    const averagePercentage = totalPercentage / subjects.length;
    const totalGrade = calculateGrade(totalPercentage);

    document.getElementById('totalObtainedMarks').textContent = totalObtainedMarks;
    document.getElementById('totalPercentage').textContent = totalPercentage.toFixed(2) + '%';
    document.getElementById('grade').textContent = totalGrade;
    document.getElementById('resultContainer').style.display = 'block';
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return 'A+';
    } else if (percentage >= 80) {
        return 'A';
    } else if (percentage >= 70) {
        return 'B';
    } else if (percentage >= 60) {
        return 'C';
    } else if (percentage >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}
