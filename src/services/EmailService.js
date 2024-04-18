
const BASE_URL = 'https://api.novaenigma.com';

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

        return await response.json();
    } catch (error) {
        throw new Error('Error while fetching data:', error);
    }
}

export { sendEmail };