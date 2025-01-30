import { namespaceWrapper } from "@_koii/namespace-wrapper";
import dotenv from "dotenv";
import OpenAI from "openai";

export async function task(roundNumber) {
  // Run your task and store the proofs to be submitted for auditing
  // The submission of the proofs is done in the submission function
  try {
    console.log(`EXECUTE TASK FOR ROUND ${roundNumber}`);
    // you can optionally return this value to be used in debugging

    // // initialize openai
    // const openai = new OpenAI({
    //   apiKey: dotenv.config().parsed.OPENAI_API_KEY,
    // });

    // // a question about where to camp in Nova Scotia
    // const prompt = "Where is the best place to camp in Nova Scotia?";

    // // use openai to answer the question
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: prompt }],
    //   stream: false,
    // });

    // // print the response
    // console.log(response.choices[0].message.content);

    // const responseText = response.choices[0].message.content;

    // // store the response in the namespace
    // await namespaceWrapper.storeSet("responseText", responseText);
  } catch (error) {
    console.error("EXECUTE TASK ERROR:", error);
  }
}
