# openai-api-helper

`openai-api-helper` is a user-friendly library designed to simplify interactions with the OpenAI API. With minimal setup, you can quickly start making requests to OpenAI's chat completions endpoint. This package provides a straightforward way to integrate OpenAI's powerful language models into your applications with just a few lines of code.

## Key Features

- **Easy Setup**: Initialize with your OpenAI API key and get started in minutes.
- **Simplified API Calls**: Use a single method to make requests and handle responses effortlessly.
- **Flexible Response Handling**: Choose between complete JSON responses or simplified message string outputs.
- **PromptBuilder (Beta)**: Efficiently construct prompts with background, context, instructions, and examples.

## Documentation

Click here for <a href = "https://buddhsen-tripathi.github.io/openai-api-helper/"> Documentation</a>

## Installation

Install `openai-api-helper` using npm:

```bash
npm install openai-api-helper
```

## Usage

### Basic Example

Here's how to use `openai-api-helper` to interact with the OpenAI API:

```javascript
const OpenAIAPIHelper = require("openai-api-helper").default;

async function main() {
	const apiKey = "YOUR_OPENAI_API_KEY";
	const model = "gpt-3.5-turbo"; // or your preferred model
	const prompt =
		"Explain the concept of artificial intelligence in simple terms.";

	const openai = new OpenAIAPIHelper(apiKey);

	try {
		const response = await openai.call(model, prompt, 0.7, 1);
		console.log("Response from OpenAI:", response);
	} catch (error) {
		console.error("Error:", error);
	}
}

main();
```

### TypeScript Example

```typescript
import OpenAIAPIHelper from "openai-api-helper";

const apiKey = "YOUR_OPENAI_API_KEY";
const openai = new OpenAIAPIHelper(apiKey);

async function test() {
	const model = "gpt-3.5-turbo";
	const prompt =
		"What are the main differences between machine learning and deep learning?";

	try {
		const response = await openai.call(model, prompt, 0.7, 1);
		console.log("Response from OpenAI:", response);
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
	}
}

test();
```

## PromptBuilder (Beta)

The `PromptBuilder` class allows users to construct prompts efficiently. It includes options for adding background, context, instructions, and examples combined with user input.

```javascript 
const { PromptBuilder } = require("openai-api-helper");

const builder = new PromptBuilder()
	.addBackground(
		"You are an AI assistant specialized in explaining technical concepts."
	)
	.addContext("The user is a beginner in computer science.")
	.addInstructions(
		"Explain the concept in simple terms, using analogies where appropriate."
	)
	.addExample(
		"Q: What is a variable?\nA: A variable is like a labeled box where you can store information. Just as you might put toys in a box labeled 'Toys', you can put data in a variable with a specific name."
	)
	.addUserInput("What is an algorithm?");

console.log(builder.build());
```

Refer to the test files in the repository for more detailed usage examples.

## API Reference

### `OpenAIAPIHelper`

#### Constructor

```javascript
new OpenAIAPIHelper(apiKey: string)
```

- `apiKey`: Your OpenAI API key.

#### Methods

```javascript
call(model: string, prompt: string, temperature?: number, responseType?: number): Promise<string | object>
```

- `model`: Specify the GPT model (e.g., 'gpt-3.5-turbo', 'gpt-4').
- `prompt`: Provide the text prompt for the model.
- `temperature` (optional): Adjust the randomness of the response (default is 0.7).
- `responseType` (optional): Format your response (0 for complete JSON response, 1 for message string response. Default is 1).

### `PromptBuilder`

#### Methods

- `addBackground(text: string): PromptBuilder`
- `addContext(text: string): PromptBuilder`
- `addInstructions(text: string): PromptBuilder`
- `addExample(text: string): PromptBuilder`
- `addUserInput(text: string): PromptBuilder`
- `build(): string`

## Testing

Sample usage files are available in the `test` directory:

- `test.js`: Example JavaScript code demonstrating how to use the `openai-api-helper` library.
- `test.ts`: Example TypeScript code demonstrating how to use the `openai-api-helper` library.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

Please ensure that your code follows the project's coding standards and includes appropriate tests.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/openai-api-helper/issues) on GitHub.

## Acknowledgements

This project is not officially associated with OpenAI. It is a community-driven effort to simplify the use of OpenAI's API.
