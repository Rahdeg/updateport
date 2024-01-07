"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MessageColumn } from "./column";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { doc, deleteDoc, query, collection, getDocs, where, CollectionReference, DocumentData } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { string } from "zod";
import { useAlertStore } from "@/hooks/use-notification";
import PubSub from 'pubsub-js';




// import AlertModal from "@/components/modals/alert-modal";

interface CellActionProps {
    data: MessageColumn;
}

// interface deleteDocumentProps {
//     collectionPath: string,
//     fieldName: string,
//     valueToDelete: string
// }


export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    // const [loading, setLoading] = useState(false);
    const { alert, setAlert } = useAlertStore();

    const router = useRouter();


    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        setAlert({
            isAlert: true,
            message: "Details copied successfully",
            status: "success",
        });

        setTimeout(() => {
            setAlert({
                isAlert: false,
                message: "",
                status: null,
            });
        }, 5000);
        // toast.success("Billboard Id copied to the clipboard")
    }

    const deleteDocs = () => {
        const docRef = doc(db, "messages", data.idx)
        deleteDoc(docRef).then(() => {
            router.refresh();
            PubSub.publish('messageFetched', data);
            setAlert({
                isAlert: true,
                message: "Details deleted successfully",
                status: "success",
            });

            setTimeout(() => {
                setAlert({
                    isAlert: false,
                    message: "",
                    status: null,
                });
            }, 5000);
        })
    }

    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className=" w-8 h-8 p-0">
                        <span className=" sr-only">Open menu</span>
                        <MoreHorizontal className=" h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => { onCopy(data.email) }} className=" cursor-pointer">
                        <Copy className="mr-2 w-4 h-4" />
                        Copy email
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={deleteDocs} className=" cursor-pointer">
                        <Trash className="mr-2 w-4 h-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>

    );
};