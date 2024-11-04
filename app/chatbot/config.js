import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

// import Overview from "./widgets/Overview/Overview";
// import MessageParserDocs from "./widgets/docs/MessageParserDocs/MessageParserDocs";
// import ActionProviderDocs from "./widgets/docs/ActionProviderDocs/ActionProviderDocs";
// import Config from "./widgets/docs/Config/Config";
// import WidgetDocs from "./widgets/docs/WidgetDocs/WidgetDocs";
import GeneralOptions from "@/app/chatbot/widgets/options/GeneralOptions/GeneralOptions";
import {ChatbotTree} from "@/app/chatbot/ntree";

const botName = "K12Chatbot";
const url = "http://127.0.0.1:5000/data"





const testData = {
    content: "Welcome to K12 Center, what would you like to know about",
    choices: {
        programs: {
            content: "Programs\nPrograms at K12...",
            choices: {
                sponsorship1: {
                    content: "Sponserships\nMaybe...",
                    choices: {
                        testing1: {
                            content: "Testing\nTesting"
                        },
                        testing2: {
                            content: "Testing\nTesting"
                        }
                    }
                }
            }
        },
        cost: {
            content: "Cost\nA lot....",
            choices: {
                whatever1: {
                    content: "Whatever"
                },
                whatever2: {
                    content: "Whatever"
                }
            }
        }
    }
};


// const getRawData = async (url) => {
//     try {
//         const response = await fetch(url, { next: { revalidate: 3600 } });
//
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Fetch error:', error);
//         return testData; // your fallback data
//     }
// };
//
// const rawData = await getRawData(url);
// console.log(rawData);
// console.log("Whoopie")
//
// const chatbotData = new ChatbotTree(rawData)


const config = {
    botName: botName,
    lang: "no",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    initialMessages: [
        createChatBotMessage(
            "Hello!"
        ),
    ],
    state: {
        gist: "",
        infoBox: "",
        currDialogue: 0, // Pointer to curr node in tree,


    },
    customComponents: {},
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <GeneralOptions {...props} />,
            props: {},
            mapStateToProps: ["currDialogue"],
        },


    ],
};

export default config;