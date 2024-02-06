import { OpenAI } from "openai";
import { NextResponse, type NextRequest } from 'next/server'

const openai = new OpenAI({
  apiKey: String(process.env['OPENAI_API_KEY']), // This is the default and can be omitted
});


export const POST = async (request: NextRequest): Promise<NextResponse> => {
  console.log('in api function');
  
  if (!request.body) return NextResponse.json('No request body provided.')
  const reqBody = await request.json()

  const description = reqBody.description
  if (!description)
    return NextResponse.json('No pdf URL provided.')


  try {
    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You will be provided with a block of text, and your task is to extract three concise sentences (think bullet points) from it",
    //     },
    //     {
    //       role: "user",
    //       content: description,
    //     },
    //   ],
    //   model: "gpt-3.5-turbo",
    //   max_tokens: 100,
    //   temperature: 0.7,
    // });
    // const result = completion.choices[0].message?.content || "";
    // if (result.length == 0) {
    //   throw Error("No result from OpenAI API");
    // }
    // // Split the text into sentences based on periods
    // const sentences = result.split(". ");
    // // Add periods back to each sentence
    // const sentencesWithPeriods = sentences.map(
    //   (sentence: string) => sentence + "."
    // );
    // // return sentencesWithPeriods;
    const stubResponse = ["Helena is great.", "Doug is great.", "Streamline is great."]
    return NextResponse.json(JSON.stringify(stubResponse), {status: 200});

  } catch (error) {
    const errorMessage = "Error generating bullet points:"
    console.error(errorMessage, error);
    return NextResponse.json({ error: errorMessage}, { status: 500 })
  }
};
