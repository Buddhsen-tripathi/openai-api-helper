import axios, { AxiosResponse } from 'axios';

interface OpenAIAPIResponse {
    choices: { message: { content: string } }[];
}

class OpenAIAPIHelper {
    private apiKey: string;
    private baseUrl: string;

    /**
     * Creates an instance of OpenAIAPIHelper.
     * @param {string} apiKey - Your OpenAI API key.
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openai.com/v1/chat/completions';
    }

    /**
     * Calls the OpenAI API with the specified parameters.
     *
     * @param {string} model - The GPT model to use.
     * @param {string} prompt - The prompt to send to the model.
     * @param {number} [temperature=0.7] - (optional) The sampling temperature to use.
     * @param {number} [resultType=1] - (optional) The type of result expected (0 for complete JSON response, 1 for output message string).
     * @returns {Promise<AxiosResponse<OpenAIAPIResponse> | string>} - The JSON response or message content from the OpenAI API.
     */
    async call(model: string, prompt: string, temperature: number = 0.7, resultType: number = 1): Promise<AxiosResponse<OpenAIAPIResponse> | string> {
        try {
            const response: AxiosResponse<OpenAIAPIResponse> = await axios.post(
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
            if (resultType === 0) {
                return response;
            } else if (resultType === 1) {
                return response.data.choices[0].message.content;
            }
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            throw error;
        }
        return "Request completed."
    }
}

export default OpenAIAPIHelper;