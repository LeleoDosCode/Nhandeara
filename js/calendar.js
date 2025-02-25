const months = ["Outubro 2024", "Novembro 2024", "Dezembro 2024", "Janeiro 2025", "Fevereiro 2025", "Março 2025", "Até a eternidade"];
let currentMonthIndex = 0;
const monthName = document.getElementById("month-name");
const calendar = document.getElementById("calendar");
const infoCard = document.getElementById("info-card");
const infoTitle = document.getElementById("info-title");
const infoContent = document.getElementById("info-content");

function generateCalendar() {
    calendar.innerHTML = "";
    const currentMonth = months[currentMonthIndex];

    if (currentMonth === "Dezembro 2024" || currentMonth === "Janeiro 2025") {
        for (let i = 1; i <= 31; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'dayXonado';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfoXonado(i);
            calendar.appendChild(dayElement);
        }
    }
    else if (currentMonth === "Novembro 2024") {
        for (let i = 1; i <= 30; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'dayXonado';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfoXonado(i);
            calendar.appendChild(dayElement);
        }
    }
    else if (currentMonth === "Fevereiro 2025") {
        for (let i = 1; i <= 22; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'dayXonado';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfoXonado(i);
            calendar.appendChild(dayElement);
        }
        for (let i = 23; i <= 28; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'dayNamorando';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfoNamorando(i);
            calendar.appendChild(dayElement);
        }
    }
    else if (currentMonth === "Outubro 2024") {
        for (let i = 1; i <= 10; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfo(i);
            calendar.appendChild(dayElement);
        }
        for (let i = 11; i <= 31; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'dayXonado';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfoXonado(i);
            calendar.appendChild(dayElement);
        }
    }
    else if (currentMonth === "Março 2025") {
        for (let i = 1; i <= 31; i++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'dayNamorando';
            dayElement.textContent = i;
            dayElement.onclick = () => showInfoNamorando(i);
            calendar.appendChild(dayElement);
            if (calendar.classList.contains('secaoEterna')) {
                calendar.classList.remove('secaoEterna');
                calendar.classList.add('calendar');
            }
        }
    }
    else if (currentMonth === "Até a eternidade") {
        let eternElement = document.createElement('div');
        let fotosElement = document.createElement('div');
        const calendarElement = document.querySelector('.calendar');
        calendarElement.classList.remove('calendar');
        calendarElement.classList.add('secaoEterna');
        eternElement.className = 'etern';
        fotosElement.className = 'fotos';
        eternElement.innerHTML = '<a>❤️</a>';
        eternElement.onclick = () => showImages()
        calendar.appendChild(eternElement);
        eternElement.appendChild(fotosElement);
    }
}

function showImages() {
    for (let i = 1; i <= 10; i++) {
        let imgElement = document.createElement('img');
        imgElement.src = `img/${i}.jpg`;
        const fotosElement = document.querySelector('.fotos');
        fotosElement.appendChild(imgElement);
    }
}

function showInfo(day) {
    infoTitle.textContent = `Dia ${day}`;
    infoContent.innerHTML = "Triste por não ter a Nhandeara Moreno Mourão";
    infoCard.style.display = 'block';
    infoCard.classList.add('ChoroYLagrimas');
    infoCard.classList.remove('Xonado');
    infoCard.classList.remove('namorando');
}

function showInfoXonado(day) {
    infoTitle.textContent = `Dia ${day}`;
    infoContent.innerHTML = "Apaixonado pela Nhandeara Moreno Mourão";
    infoCard.style.display = 'block';
    infoCard.classList.add('Xonado');
    infoCard.classList.remove('ChoroYLagrimas');
    infoCard.classList.remove('namorando');
}

function showInfoNamorando(day) {
    infoTitle.textContent = `Dia ${day}`;
    infoContent.innerHTML = "Namorando com a Nhandeara Moreno Mourão";
    infoCard.style.display = 'block';
    infoCard.classList.add('namorando');
    infoCard.classList.remove('ChoroYLagrimas');
    infoCard.classList.remove('Xonado');
}

function changeMonth(direction) {
    currentMonthIndex += direction;
    if (currentMonthIndex < 0) currentMonthIndex = 0;
    if (currentMonthIndex >= months.length) currentMonthIndex = months.length - 1;
    monthName.textContent = months[currentMonthIndex];
    generateCalendar();
}

generateCalendar();