import { AxiosResponse } from 'axios';
export { PromptBuilder } from './promptBuilder';
interface OpenAIAPIResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
}
declare class OpenAIAPIHelper {
    private apiKey;
    private baseUrl;
    /**
     * Creates an instance of OpenAIAPIHelper.
     * @param {string} apiKey - Your OpenAI API key.
     */
    constructor(apiKey: string);
    /**
     * Calls the OpenAI API with the specified parameters.
     *
     * @param {string} model - The GPT model to use.
     * @param {string} prompt - The prompt to send to the model.
     * @param {number} [temperature=0.7] - (optional) The sampling temperature to use.
     * @param {number} [resultType=1] - (optional) The type of result expected (0 for complete JSON response, 1 for output message string).
     * @returns {Promise<AxiosResponse<OpenAIAPIResponse> | string>} - The JSON response or message content from the OpenAI API.
     */
    call(model: string, prompt: string, temperature?: number, resultType?: number): Promise<AxiosResponse<OpenAIAPIResponse> | string>;
}
export default OpenAIAPIHelper;
