const OpenAIHelper = require('openai-helper');

async function main() {
    const apiKey = 'YOUR-OPENAI-AI-KEY';
    const model = 'gpt-4o-mini';
    const prompt = 'Your-prompt';

    const openai = new OpenAIHelper(apiKey);

    try {
        const response = await openai.call(model, prompt, 0.8,1);
        console.log('Response from OpenAI:', response);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();