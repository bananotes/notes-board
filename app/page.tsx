// part code generate by AI
"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
} from "@/components/ui/command";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
}

async function fetchNotes(): Promise<Note[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      title: "Work Meeting",
      content: "Discuss project timeline",
      category: "Work",
    },
    {
      id: 2,
      title: "Grocery List",
      content: "Milk, eggs, bread",
      category: "Personal",
    },
    {
      id: 3,
      title: "Deadline Reminder",
      content: "Submit report by Friday",
      category: "Work",
    },
    {
      id: 4,
      title: "Birthday Party",
      content: "Plan surprise party for mom",
      category: "Personal",
    },
    {
      id: 5,
      title: "Urgent Task",
      content: "Fix critical bug in production",
      category: "Important",
    },
  ];
}

export default function Home() {
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const itemsPerPage = 6;
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    // Get notes data
    fetchNotes().then((notes) => setAllNotes(notes));
  }, []);

  useEffect(() => {
    // carry out filter
    let filtered = allNotes;
    if (filter !== "All") {
      filtered = allNotes.filter((note) => note.category === filter);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredNotes(filtered.slice(startIndex, endIndex));
  }, [filter, currentPage, allNotes]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(
    (filter === "All"
      ? allNotes.length
      : allNotes.filter((note) => note.category === filter).length) /
      itemsPerPage
  );

  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setEditedContent(note.content);
  };

  const handleSave = (id: number) => {
    setAllNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, content: editedContent } : note
      )
    );
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col w-full">
      <h1 className="text-center text-4xl font-serif mb-8 text-amber-800 tracking-wide pt-4">
        My Notes
      </h1>
      <div className="mb-4 flex justify-center pr-4 pl-4">
        <div className="w-1/4 pr-2">
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
          <div className="mb-4 bg-yellow-50 rounded-md">
            {["All", "Work", "Personal", "Important"].map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`mr-2 ${filter === category ? "bg-orange-100" : ""}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-4">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="bg-yellow-100">
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                  <CardDescription>{note.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  {editingId === note.id ? (
                    <textarea
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    <p>{note.content}</p>
                  )}
                </CardContent>
                <CardFooter>
                  {editingId === note.id ? (
                    <Button
                      variant="outline"
                      className="border-0 mr-2 text-sm px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => handleSave(note.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="border-0 mr-2 text-sm px-3 py-1 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-100"
                      onClick={() => handleEdit(note)}
                    >
                      Edit
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-4 flex justify-center fixed bottom-4 left-1/2 transform -translate-x-1/2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant="outline"
                className={`mx-1 ${currentPage === page ? "bg-stone-100" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
