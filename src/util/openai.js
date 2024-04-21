// import OpenAI from "openai"

// const openai = new OpenAI({
//     organization: process.env.NEXT_PUBLIC_ORG_ID,
//     apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
//     dangerouslyAllowBrowser: true
// })

// // const openai = new OpenAIApi(configuration);
// const Calls = {
//         ask: async function(content, tokens = 50) {
//             const stream = await openai.chat.completions.create({
//                 model : "gpt-3.5-turbo",
//                 messages: [{ role: "user", content}],
//                 stream: true,
//                 max_tokens: tokens
//             });

//             return stream;
//         }
//     }

// export default Calls
