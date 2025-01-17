import axios from 'axios';

export const analyzeData = async (FetchData, query, apiKey) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
              our task is to analyze a Live_Student_Database, where all answers to user queries are already present in the data. The data contains information like Science Score, location, country and university and other student details. Your role is to process this data, interpret it, and respond to user questions in a natural, conversational tone, as if you're having a friendly discussion.

The data will be provided in the form of PostgreSQL queries or approximate data. You need to analyze the query results and generate human-readable responses that are clear, presentable, and engaging.
           Important#
              only if student data is empty, politly ask customer to provide relevant data for analysis. like 
              id 
  roll_no,
  science ,
  gender,
  locations ,
  university ,
  student,
  country
              Format your responses using Markdown:
              - Capitalize first character of each sentence
              - Use **bold** for important numbers and key insights
              - Use bullet points or numbered lists when appropriate
              - Add line breaks between different points


            `
          },
          {
            role: "user",
            content: `
              Here's the student data: ${JSON.stringify(FetchData)}. 
              User's question: "${query}".
              Please analyze the data and provide a short, to-the-point response. 
   
            `,
          },
        ],
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // return response.data.choices[0].message.content;
    return response;
  } catch (error) {
    console.error("Error analyzing data:", error);
    throw error;
  }
};

export default analyzeData;