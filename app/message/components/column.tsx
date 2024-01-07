"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MessageColumn = {
    id: string
    email: string
    name: string
    message: string
    date: string
    idx: string
}

export const columns: ColumnDef<MessageColumn>[] = [
    {
        accessorKey: "id",
        header: "No",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "message",
        header: "Message",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        id: "action",
        cell: ({ row }) => <CellAction data={row.original} />
    }
]