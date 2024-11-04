'use client'
import React, { useMemo } from "react";
import Options from "../Options/Options";
import { ChatbotTree } from "@/app/chatbot/ntree";


const GeneralOptions = (props) => {



    // Use componentId to differentiate between different instances
    const componentId = useMemo(() => Date.now(), []); // Stable across re-renders for this instance

    // Memoize options so they remain stable for this instance
    const options = useMemo(() => {


        return props.chatBotData.bfs(props.currDialogue).children.map((child) => ({
            name: child.title,
            content: child.content,
            handler: props.actionProvider.handleOptions,
            id: child.id,
        }));

    }, []);

    return <Options key={componentId} options={options} />;
};

export default React.memo(GeneralOptions);