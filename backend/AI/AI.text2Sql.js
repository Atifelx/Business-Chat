// utils/openai.js
import axios from 'axios';
import 'dotenv/config';

export const askOpenAI = async (query) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OpenAI API key is missing");

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
              you are an advanced SQL query generator. Given a natural language question, generate a PostgreSQL query that retrieves relevant data from the students database.

# Database Schema
students (
  id INTEGER,
  roll_no INTEGER,
  science INTEGER,
  gender VARCHAR,
  locations VARCHAR,
  university VARCHAR,
  student_name VARCHAR,
  country VARCHAR
)

# Instructions


#Ensure the query returns all columns from the relevant table(s) in the database.
#user may ask any question related to the students database, such as demographics, performance, or any other information.
# Important: Return Only SQL Query ,  Do not include any explanations, just return the PostGreSQL query.
#Convert to lower case before generating Quarries

Analyze the user's question to identify key entities, relationships, and the intent behind the query.
Generate a PostgreSQL query:



 question: "${query}". 
            `
          },
     
        ],
        temperature: 1
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0]?.message?.content || "Sorry, I couldn't analyze that.";
  } catch (error) {
    throw new Error(`OpenAI API Error: ${error.message}`);
  }
};

export default askOpenAI;

