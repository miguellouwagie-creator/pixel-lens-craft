import { Award, Clock, Search, Smartphone, Mail } from "lucide-react";

export interface ProcessItem {
  id: number;
  type: "result" | "process";
  icon: any;
  titleKey: string;
  descriptionKey: string;
}

export const processData: ProcessItem[] = [
  {
    id: 1,
    type: "result",
    icon: Award,
    titleKey: "stickyScroll.result1.title",
    descriptionKey: "stickyScroll.result1.description",
  },
  {
    id: 2,
    type: "result",
    icon: Clock,
    titleKey: "stickyScroll.result2.title",
    descriptionKey: "stickyScroll.result2.description",
  },
  {
    id: 3,
    type: "result",
    icon: Search,
    titleKey: "stickyScroll.result3.title",
    descriptionKey: "stickyScroll.result3.description",
  },
  {
    id: 4,
    type: "process",
    icon: Smartphone,
    titleKey: "stickyScroll.process1.title",
    descriptionKey: "stickyScroll.process1.description",
  },
  {
    id: 5,
    type: "process",
    icon: Mail,
    titleKey: "stickyScroll.process3.title",
    descriptionKey: "stickyScroll.process3.description",
  },
];
