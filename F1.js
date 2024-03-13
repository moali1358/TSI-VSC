const url = 'http://ergast.com/api/f1/2024/1/results';

try {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was invalid');
            }
            return res.text();
        })
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');

            // Extract information from the XML
            const raceNameElement = xmlDoc.querySelector('RaceName');
            const raceName = raceNameElement ? raceNameElement.textContent : '';
            const resultsList = Array.from(xmlDoc.querySelectorAll('Result'));

            // Convert resultsList to array of objects with info
            const formattedResults = resultsList.map(result => {
                return {
                    position: parseInt(result.getAttribute('position')),
                    driver: `${result.querySelector('Driver GivenName').textContent} ${result.querySelector('Driver FamilyName').textContent}`,
                    constructor: result.querySelector('Constructor Name').textContent,
                    laps: result.querySelector('Laps').textContent,
                    status: result.querySelector('Status').textContent,
                    time: result.querySelector('Time').textContent,
                    fastestLapTime: result.querySelector('FastestLap Time').textContent
                };
            });

            // Sort the formattedResults array based on position
            formattedResults.sort((a, b) => a.position - b.position);

            // Create HTML elements to display the information
            const container = document.getElementById('qualifyingResults');
            const raceHeading = document.createElement('h2');
            raceHeading.textContent = raceName;
            raceHeading.classList.add('centered');
            container.appendChild(raceHeading);

            const resultsTable = document.createElement('table');
            const headerRow = resultsTable.insertRow();
            ['Position', 'Driver', 'Constructor', 'Laps', 'Status', 'Time', 'Fastest Lap Time'].forEach(headerText => {
                const headerCell = document.createElement('th');
                headerCell.textContent = headerText;
                headerRow.appendChild(headerCell);
            });

            // Populate table with sorted results
            formattedResults.forEach(result => {
                const row = resultsTable.insertRow();
                Object.values(result).forEach(value => {
                    const cell = row.insertCell();
                    cell.textContent = value;
                });
            });

            container.appendChild(resultsTable);
        })
        .catch(error => {
            console.error('Fetch operation did not work:', error);
        });
} catch (error) {
    console.error('Error while fetching:', error);
}
