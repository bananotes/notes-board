import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto p-4 min-h-screen w-full flex flex-col bg-amber-50">
      <h1 className="text-4xl font-bold mb-4 text-center">My Notes</h1>
      <div className="mb-4 flex justify-center">
        <div className="w-1/4 pr-2 ">
          <Command className="w-full bg-yellow-50">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        <div className="w-3/4 pl-2">
          <div className="mb-4">
            <Button variant="outline" className="mr-2">All</Button>
            <Button variant="outline" className="mr-2">Work</Button>
            <Button variant="outline" className="mr-2">Personal</Button>
            <Button variant="outline">Important</Button>
          </div>
          
          <Separator className="my-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-yellow-100 w-full h-[300px]">
              <CardHeader>
                <CardTitle>Meeting Notes</CardTitle>
                <CardDescription>Team standup - 2023-04-15</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Discussed project timeline and assigned tasks for the week.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Work</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </CardFooter>
            </Card>
            <Card className="bg-yellow-100 w-full h-[300px]">
              <CardHeader>
                <CardTitle>Shopping List</CardTitle>
                <CardDescription>For weekend grocery run</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Milk</li>
                  <li>Eggs</li>
                  <li>Bread</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Personal</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </CardFooter>
            </Card>
            <Card className="bg-yellow-100 w-full h-[300px]">
              <CardHeader>
                <CardTitle>Project Ideas</CardTitle>
                <CardDescription>Brainstorming session - 2023-04-20</CardDescription>
              </CardHeader>
              <CardContent>
                <p>List of potential new features for our app.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Work</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </CardFooter>
            </Card>
            <Card className="bg-yellow-100 w-full h-[300px]">
              <CardHeader>
                <CardTitle>Workout Plan</CardTitle>
                <CardDescription>Weekly fitness routine</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Monday: Cardio, Tuesday: Strength, Wednesday: Yoga...</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Personal</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </CardFooter>
            </Card>
            <Card className="bg-yellow-100 w-full h-[300px]">
              <CardHeader>
                <CardTitle>Book Notes</CardTitle>
                <CardDescription>"The Innovator's Dilemma" by Clayton Christensen</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Key concepts and takeaways from the book.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Personal</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </CardFooter>
            </Card>
            <Card className="bg-yellow-100 w-full h-[300px]">
              <CardHeader>
                <CardTitle>Quarterly Goals</CardTitle>
                <CardDescription>Q2 2023 Objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <p>1. Launch new product feature 2. Increase user engagement by 20%...</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Work</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pb-4 mt-auto">
        <Pagination>
        <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}