#!/usr/bin/env node

const { generativeai  } = require('@google/generative-ai');  // Correct way to import
const dotenv = require('dotenv');
const chalk = require('chalk');

// Load environment variables from .env file
dotenv.config();

// Initialize the GenerativeAIClient
// const client = new GenerativeAIClient({
//   apiKey: process.env.GOOGLE_API_KEY,  // You can pass your API key here if using key-based auth
//   // If using service account credentials, you can set it via GOOGLE_APPLICATION_CREDENTIALS env var
// });
const client = generativeai.v1beta3.GenerativeAIClient;

const askGeminiAI = async (question) => {
  try {
    // Ensure API Key is available
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      console.log(chalk.red("API key not set. Please add your Google API key to the .env file."));
      process.exit(1);
    }

    // Call the Generative AI API (Gemini model)
    const response = await client.generateText({
      prompt: question,
      maxOutputTokens: 150,  // You can adjust this based on Gemini's limits
    });

    // Return the answer from the AI response
    const answer = response.text;
    console.log(chalk.green("Gemini AI Answer: "), answer);
  } catch (error) {
    console.error(chalk.red("Error: Could not fetch response from Gemini AI."), error.message);
    process.exit(1);
  }
};

module.exports = askGeminiAI;

// Command line interface (CLI) setup using commander
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('gemini-cli')
//   .description('A CLI tool to interact with Gemini AI')
//   .version('1.0.0');

// program
//   .command('ask <question>')
//   .description('Ask a question to Gemini AI')
//   .action((question) => {
//     askGeminiAI(question);
//   });

// program.parse(process.argv);
