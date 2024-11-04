'use client'
import { createChatBotMessage } from 'react-chatbot-kit';
import GeneralOptions from '@/app/chatbot/widgets/options/GeneralOptions/GeneralOptions';
import { ChatbotTree } from '@/app/chatbot/ntree';
import Chatbot from 'react-chatbot-kit'
import config from '@/app/chatbot/config';
import MessageParser from '@/app/chatbot/MessageParser';
import ActionProvider from '@/app/chatbot/ActionProvider'
import React from "react";

const DEFAULT_DATA = {
    content: "Welcome to K12 Center, what would you like to know about",
    choices: {
        programs: {
            content: "Programs\nPrograms at K12...",
            choices: {
                sponsorship1: {
                    content: "Sponsorships\nMaybe...",
                    choices: {
                        testing1: { content: "Testing\nTesting" },
                        testing2: { content: "Testing\nTesting" }
                    }
                }
            }
        },
        cost: {
            content: "Cost\nA lot....",
            choices: {
                whatever1: { content: "Whatever" },
                whatever2: { content: "Whatever" }
            }
        }
    }
};

const ChatbotWrapper = ({ data = DEFAULT_DATA }) => {


    const chatBotData = new ChatbotTree(data);

    if (!chatBotData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Chatbot
                config={{
                    ...config,
                    initialMessages: [
                        createChatBotMessage(chatBotData.tree.content, {
                            withAvatar: true,
                            delay: 500,
                            widget: "options",
                        })
                    ],
                    widgets: [
                        {
                            widgetName: "options",
                            widgetFunc: (props) => <GeneralOptions {...props} />,
                            props: { chatBotData },
                            mapStateToProps: ["currDialogue"],
                        },
                    ],
                }}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default ChatbotWrapper;