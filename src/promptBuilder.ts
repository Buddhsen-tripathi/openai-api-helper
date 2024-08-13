/**
 * A builder class for constructing structured prompts to be sent to the OpenAI API.
 *
 * The `PromptBuilder` class provides a fluent interface for constructing prompts with various components
 * such as background, context, instructions, examples, and user input.
 */
export class PromptBuilder {
	private prompt: string;

	/**
	 * Creates an instance of PromptBuilder.
	 */
	constructor() {
		this.prompt = "";
	}

	/**
	 * Adds background information to the prompt.
	 * @param {string} background - A string describing the background context for the prompt.
	 * @returns {PromptBuilder} - Returns the instance of `PromptBuilder` for method chaining.
	 */
	addBackground(background: string): PromptBuilder {
		this.prompt += `Background: ${background}\n`;
		return this;
	}

	/**
	 * Adds context information to the prompt.
	 * @param {string} context - A string providing additional context for the prompt.
	 * @returns {PromptBuilder} - Returns the instance of `PromptBuilder` for method chaining.
	 */
	addContext(context: string): PromptBuilder {
		this.prompt += `Context: ${context}\n`;
		return this;
	}

	/**
	 * Adds specific instructions to the prompt.
	 * @param {string} instructions - A string detailing specific instructions for the AI to follow.
	 * @returns {PromptBuilder} - Returns the instance of `PromptBuilder` for method chaining.
	 */
	addInstructions(instructions: string): PromptBuilder {
		this.prompt += `Instructions: ${instructions}\n`;
		return this;
	}

	/**
	 * Adds examples to the prompt to guide the AI's responses.
	 * @param {string} examples - A string containing examples that illustrate the expected response format or content.
	 * @returns {PromptBuilder} - Returns the instance of `PromptBuilder` for method chaining.
	 */
	addExamples(examples: string): PromptBuilder {
		this.prompt += `Examples: ${examples}\n`;
		return this;
	}

	/**
	 * Adds user input to the prompt.
	 * @param {string} userInput - The main user input or query that the AI should respond to.
	 * @returns {PromptBuilder} - Returns the instance of `PromptBuilder` for method chaining.
	 */
	addUserInput(userInput: string): PromptBuilder {
		this.prompt += `${userInput}\n`;
		return this;
	}

	/**
	 * Builds the final prompt string by combining all added components.
	 * @returns {string} - The complete prompt ready to be sent to the OpenAI API.
	 *
	 * @example
	 * const prompt = new PromptBuilder()
	 *   .addBackground("This is a chatbot scenario.")
	 *   .addContext("The user is asking about the weather.")
	 *   .addInstructions("Respond in a friendly and concise manner.")
	 *   .addUserInput("What's the weather like today?")
	 *   .build();
	 * console.log(prompt);
	 */
	build(): string {
		return this.prompt.trim();
	}
}
