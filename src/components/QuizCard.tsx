import { Card, CardBody } from "@material-tailwind/react";

export function QuizCard({ children }: { children: React.ReactNode }) {
  return (
    <Card placeholder={""} className="mt-6 w-full">
      <CardBody placeholder={""}>{children}</CardBody>
    </Card>
  );
}
