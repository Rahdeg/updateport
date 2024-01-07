"use client"
import { DataTable } from '@/components/ui/data-table';
import React, { useEffect, useState } from 'react'
import { columns } from './column';
import { db } from "@/config/firebase.config";
import { format } from 'date-fns'
import {
    getDocs,
    collection,
} from "firebase/firestore";
import { AnimatePresence } from 'framer-motion';
import Alert from '@/components/alert';
// import { AlertState } from '@/components/contact';
import { Loader2 } from 'lucide-react';
import { useAlertStore } from '@/hooks/use-notification';
import PubSub from 'pubsub-js';

const MessagePage = () => {

    const [data, setData] = useState<any[]>([]);
    const { alert, setAlert } = useAlertStore();

    const getData = async () => {
        const colRef = collection(db, "messages");
        const snapShots = await getDocs(colRef);
        const docs = snapShots.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id
            return data;
        });
        setData(docs)
        setAlert({
            isAlert: true,
            message: "Latest messages updated",
            status: "success",
        });

        setTimeout(() => {
            setAlert({
                isAlert: false,
                message: "",
                status: null,
            });
        }, 5000);
    }


    useEffect(() => {
        getData()
        const token = PubSub.subscribe('messageFetched', (msg, data) => {
            // Handle the new hub data, you might want to update the metrics
            // or trigger a fetch to get the updated data
            getData()
        });

        // Cleanup the subscription when the component unmounts
        return () => {
            PubSub.unsubscribe(token);
        };
    }, []);



    if (!data || data.length === 0) {
        return (<div className='w-full h-full items-center flex justify-center'>
            <Loader2 className=' text-white w-20 h-20 animate-spin   ' />
        </div>);
    }




    const formattedData: any[] = data.map((item, idx) => {
        const { seconds, nanoseconds } = item.date;
        const milliseconds = seconds * 1000 + nanoseconds / 1000000;
        const date = new Date(milliseconds);
        const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');

        return (
            {
                id: idx + 1,
                email: item.email,
                name: `${item.firstname} ${item.lastName}`,
                message: item.message,
                date: formattedDate,
                idx: item.id
            }
        )
    })

    return (
        <>
            <AnimatePresence>
                {
                    alert.isAlert && (
                        <Alert status={alert.status} message={alert.message} />
                    )
                }
            </AnimatePresence>
            <div className=' flex flex-col items-center justify-center'>
                <p className=' text-white text-5xl my-10'>My Messages</p>
                <DataTable columns={columns} data={formattedData} searchKey="email" />
            </div>
        </>

    )
}

export default MessagePage