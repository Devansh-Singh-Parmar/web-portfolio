"use client";

import ChatBubbleIcon from "@/components/svgs/ChatBubbleIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/expandable-chat";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatSuggestions } from "@/config/ChatPrompt";
import { heroConfig } from "@/config/Hero";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SendIcon from "../svgs/SendIcon";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
  isStreaming?: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm Devansh's portfolio assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const ChatBubble: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { triggerHaptic, isMobile } = useHapticFeedback();

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);
  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    if (isMobile()) {
      triggerHaptic("light");
    }
    const messageText = newMessage.trim();
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsLoading(true);

    const botMessageId = Date.now() + 1;
    const botMessage: Message = {
      id: botMessageId,
      text: "",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isStreaming: true,
    };
    setMessages((prev) => [...prev, botMessage]);
    await sendMessage(messageText, botMessageId);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (isMobile()) {
      triggerHaptic("selection");
    }
    setNewMessage(suggestion);
    const userMessage: Message = {
      id: Date.now(),
      text: suggestion,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const botMessageId = Date.now() + 1;
    const botMessage: Message = {
      id: botMessageId,
      text: "",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, botMessage]);

    sendMessage(suggestion, botMessageId);
  };
  const sendMessage = async (messageText: string, botMessageId: number) => {
    try {
      const history = messages.slice(-10).map((msg) => ({
        role: msg.sender === "user" ? ("user" as const) : ("model" as const),
        parts: [{ text: msg.text }],
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          history,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! the status is: ${response.status}`);
      }
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No response body/reader found");
      }
      let accumulatedText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data:")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.error) {
                throw new Error(data.error);
              }
              if (data.text) {
                accumulatedText += data.text;
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, text: accumulatedText, isStreaming: true }
                      : msg,
                  ),
                );
              }
              if (data.done) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, text: accumulatedText, isStreaming: false }
                      : msg,
                  ),
                );
                break;
              }
            } catch {
              continue;
            }
          }
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: "Sorry, something went wrong. Please try again later.",
                isStreaming: false,
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
      setNewMessage("");
    }
  };
  return;
};
