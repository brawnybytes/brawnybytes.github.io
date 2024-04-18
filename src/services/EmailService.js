
const BASE_URL = 'https://api.novaenigma.com';
// const BASE_URL = 'http://localhost:8080';

async function sendEmail(data) {
    try {
        const response = await fetch(`${BASE_URL}/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("I am here!")
        return await response.json();
    } catch (error) {
        throw new Error('Error while fetching data:', error);
    }
}

export { sendEmail };