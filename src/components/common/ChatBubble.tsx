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
