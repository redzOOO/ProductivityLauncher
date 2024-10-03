document.addEventListener('DOMContentLoaded', () => {
    // API Variables
    const serviceDeskURL = 'https://watkinjones.sdpondemand.manageengine.com/api/v3/requests';
    const apiKey = 'your-api-key-here';  // Replace with your actual API key

    // Function to fetch tickets from ManageEngine Service Desk
    function fetchServiceDeskTickets() {
        fetch(serviceDeskURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            displayTickets(data.requests);  // Adjust according to ManageEngine API response structure
        })
        .catch(error => {
            console.error('Error fetching tickets:', error);
        });
    }

    // Function to display fetched tickets on the page
    function displayTickets(tickets) {
        const serviceDeskSection = document.getElementById('service-desk-content');
        serviceDeskSection.innerHTML = ''; // Clear existing content

        const ticketList = document.createElement('ul');
        ticketList.classList.add('ticket-list');

        tickets.forEach(ticket => {
            const ticketItem = document.createElement('li');
            ticketItem.innerHTML = `
                <strong>${ticket.subject}</strong> (Status: ${ticket.status.name})
                <p>Priority: ${ticket.priority.name}</p>
                <p>Assigned to: ${ticket.technician.name || 'Unassigned'}</p>
            `;
            ticketList.appendChild(ticketItem);
        });

        serviceDeskSection.appendChild(ticketList);
    }

    // Fetch tickets when the page loads
    fetchServiceDeskTickets();
});
