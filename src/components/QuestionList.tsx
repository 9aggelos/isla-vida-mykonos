import type { Question } from "../data/concierge";

export function QuestionList({ questions }: { questions: Question[] }) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {questions.map(({ question, answer }) => (
        <div key={question} className="grid gap-3 py-7 md:grid-cols-5 md:gap-10">
          <dt className="font-display text-xl font-semibold leading-snug text-foreground md:col-span-2 md:text-2xl">
            {question}
          </dt>
          <dd className="leading-relaxed text-muted-foreground md:col-span-3">{answer}</dd>
        </div>
      ))}
    </dl>
  );
}
