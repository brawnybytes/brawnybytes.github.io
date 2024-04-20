
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
            throw new Error(await response.text()); // Throw the response text as error
        }

        return await response.text(); // Return the response text
    } catch (error) {
        throw new Error(error.message);
    }
}


export { sendEmail };