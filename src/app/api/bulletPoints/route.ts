import { OpenAI } from "openai";
import { NextResponse, type NextRequest } from 'next/server'

const openai = new OpenAI({
  apiKey: String(process.env['OPENAI_API_KEY']), // This is the default and can be omitted
});


export const POST = async (request: NextRequest): Promise<NextResponse> => {
  
  if (!request.body) return NextResponse.json('No request body provided.')
  const reqBody = await request.json()

  const description = reqBody.description
  if (!description)
    return NextResponse.json('No pdf URL provided.')

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You will be given a description of a grant's project specification. Your task is to return one sentence and three bullet points. The sentence should describe who the grant is targeting (maximum 15 words) and the bullet points should be very concise (no more than 7 words each). Do not use colons (:). Do not describe acronyms. Do not say `bullet points:`."
        },
        {
          role: "user",
          content: description,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 80,
      temperature: 0.7,
    });
    const result = completion.choices[0].message?.content || "";
    if (result.length == 0) {
      throw Error("No result from OpenAI API");
    }
    
    const grantObject: GrantObject = transformGrantTextToObject(result);
    const response = JSON.stringify(grantObject)
    console.log("Result from OpenAI API json string:", result);
    return NextResponse.json(response, {status: 200});

  } catch (error) {
    const errorMessage = "Error generating bullet points:"
    console.error(errorMessage, error);
    return NextResponse.json({ error: errorMessage}, { status: 500 })
  }
};


type GrantObject = {
  targetAudience: string;
  bulletPoints: string[];
};

const exampleGrantText = `
This grant is targeting individuals and organizations working in the field of environmental conservation.

- Funding available for projects focused on biodiversity conservation.
- Priority given to initiatives that address climate change.
- Grants available for both research and implementation.
`;

const transformGrantTextToObject = (text: string): GrantObject => {
  const lines = text.split('\n').filter((line) => line.trim() !== '');

  const targetAudience = lines[0].trim();
  const bulletPoints = lines.slice(1).map((line) => line.replace(/^- /, '').replace(/\.$/, '').trim());

  return {
    targetAudience,
    bulletPoints,
  };
};

