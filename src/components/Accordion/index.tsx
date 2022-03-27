import { Question } from "types";
import { AccordionItem } from "./AccordionItem";

type Props = {
  questions: Question[];
};

export const Accordion: React.FC<Props> = ({ questions }) => (
  <>
    {questions.map((question, i) => (
      <AccordionItem key={i} {...question} opened={i === 0} />
    ))}
  </>
);
