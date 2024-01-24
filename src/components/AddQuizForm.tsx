import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function AddQuizForm() {
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        Add Your Quiz!
      </Typography>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Here you can add your quiz
      </Typography>
      <form className="mt-8 mb-2 w-full">
        <div className="mb-1 grid grid-cols-2  gap-4">
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Question
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Description
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <Typography
                placeholder={""}
                variant="h6"
                color="blue-gray"
                className="mb-3"
              >
                Option {index + 1}
              </Typography>
              <Input
                crossOrigin={""}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          ))}
        </div>
        <div className="my-4">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="mb-3"
          >
            Correct Option
          </Typography>
          <Input
            crossOrigin={""}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button placeholder={""} className="mt-6" fullWidth>
          Add Quiz
        </Button>
      </form>
    </Card>
  );
}
