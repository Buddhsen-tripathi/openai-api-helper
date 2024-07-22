const axios = require('axios');

class OpenAIAPIHelper {
    /**
     * Creates an instance of OpenAIAPIHelper.
     * @param {string} apiKey - Your OpenAI API key.
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openai.com/v1/chat/completions';
    }

    /**
     * Calls the OpenAI API with the specified parameters.
     *
     * @param {string} model - The GPT model to use.
     * @param {string} prompt - The prompt to send to the model.
     * @param {number} [temperature=0.7] - (optional) The sampling temperature to use.
     * @param {resultType} [resultType = 1] - (optional) The type of result expected (0) for complete JSON response, (1) for output message string.
     * @returns {response} - The JSON response from the OpenAI API.
     */
    async call(model, prompt, temperature = 0.7, resultType = 1) {
        try {
            const response = await axios.post(
                this.baseUrl,
                {
                    model: model,
                    messages: [{ role: 'user', content: prompt }],
                    temperature: temperature
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (resultType == 0)
                return response;
            else if (resultType == 1)
                return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            throw error;
        }
    }
}

module.exports = OpenAIAPIHelper;
