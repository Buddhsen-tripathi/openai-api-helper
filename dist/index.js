"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
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
     * @param {number} [resultType=1] - (optional) The type of result expected (0 for complete JSON response, 1 for output message string).
     * @returns {Promise<AxiosResponse<OpenAIAPIResponse> | string>} - The JSON response or message content from the OpenAI API.
     */
    call(model_1, prompt_1) {
        return __awaiter(this, arguments, void 0, function* (model, prompt, temperature = 0.7, resultType = 1) {
            try {
                const response = yield axios_1.default.post(this.baseUrl, {
                    model: model,
                    messages: [{ role: 'user', content: prompt }],
                    temperature: temperature
                }, {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (resultType === 0) {
                    return response;
                }
                else if (resultType === 1) {
                    return response.data.choices[0].message.content;
                }
            }
            catch (error) {
                console.error('Error calling OpenAI API:', error);
                throw error;
            }
            return "Request completed.";
        });
    }
}
exports.default = OpenAIAPIHelper;
