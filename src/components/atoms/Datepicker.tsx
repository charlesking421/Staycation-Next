"use client";

import { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import { Calendar } from "@/components/atoms/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";

export function DatePickerWithRange({
  className,
  howLong = 0,
}: React.HTMLAttributes<HTMLDivElement> & { howLong?: number }) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), howLong),
  });

  useEffect(() => {
    if (howLong > 0) {
      setDate(() => ({
        from: new Date(),
        to: addDays(new Date(), howLong - 1),
      }));
    }
  }, [howLong]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full relative justify-center py-6 font-normal text-center text-base text-cyan-800",
              !date && "text-muted-foreground"
            )}
          >
            <div className="absolute cursor-pointer left-0 bg-cyan-800 h-full px-4 flex justify-center items-center rounded-e-xl">
              <CalendarIcon size={26} className="text-white" />
            </div>

            {date?.from ? (
              date.to ? (
                <p className="lg:text-base text-sm ml-10">
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </p>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <p className=" lg:text-base text-sm text-cyan-800 mb-4">
                Pick a Date
              </p>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
