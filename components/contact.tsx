/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import * as z from "zod"
import { collection, addDoc } from "firebase/firestore";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AnimatePresence, motion } from 'framer-motion'
// import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { db } from '@/config/firebase.config';
import Alert from './alert';
import { useRouter } from 'next/navigation';


const formSchema = z.object({
    firstname: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email().min(2).max(50),
    message: z.string().min(2).max(50),
})

type AlertState = {
    isAlert: boolean;
    message: string;
    status: string | null; // status can be either string or null
};




const ContactMe = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState<AlertState>(
        {
            isAlert: false,
            message: "",
            status: null,
        }
    )

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastName: "",
            email: "",
            message: "",
        },
    })

    const saveData = async (data: any) => {
        setLoading(true); // Set loading to true when action starts

        try {
            await addDoc(collection(db, "messages"), data);
            setAlert({
                isAlert: true,
                message: "Thanks for Contacting me",
                status: "success",
            });

            setTimeout(() => {
                setAlert({
                    isAlert: false,
                    message: "",
                    status: null,
                });
            }, 5000);
            router.refresh();
        } catch (err) {
            setAlert({
                isAlert: true,
                message: "Server error",
                status: "danger",
            });

            setTimeout(() => {
                setAlert({
                    isAlert: false,
                    message: "",
                    status: null,
                });
            }, 5000);
            router.refresh();
        } finally {
            setLoading(false); // Set loading back to false when action completes
        }
    };

    function onSubmit(values: z.infer<typeof formSchema>) {

        saveData(values)
        form.reset();


    }




    return (
        <section id='contact' className='flex items-center justify-center gap-12 flex-col my-12'>
            <AnimatePresence>
                {
                    alert.isAlert && (
                        <Alert status={alert.status} message={alert.message} />
                    )
                }
            </AnimatePresence>

            <div className='flex items-center justify-center w-full py-24'>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{
                        delay: 0.4
                    }}
                    className=' flex items-center justify-around w-52'>
                    <img src="Leaf.png" alt='dd' className=' w-6 h-auto object-contain' />
                    <p
                        className='text-transparent bg-clip-text text-texlight bg-gradient-to-r from-primary to-secondary '

                    >Projects</p>
                    <img src="/leaf2.png" alt='dd' className=' w-6 h-auto object-contain' />
                </motion.div>
            </div>
            <div className=' w-full flex flex-col items-center justify-start gap-4  '>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4 text-white'>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <input {...field} disabled={loading} placeholder='First Name' className='w-full px-4 py-3 rounded-md border border-[rgba(225,225,225,0.3)] bg-transparent outline-none focus:border-primary ' />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}

                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <input {...field} disabled={loading} placeholder='Last Name' className='w-full px-4 py-3 rounded-md border border-[rgba(225,225,225,0.3)] bg-transparent outline-none focus:border-primary' />

                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}

                            />

                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <input  {...field} disabled={loading} placeholder='Email' className='w-full px-4 py-3 rounded-md border border-[rgba(225,225,225,0.3)] bg-transparent outline-none focus:border-primary' />

                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <textarea {...field} disabled={loading} id='' cols={0} rows={10} title='text' placeholder='Message here.....' className='w-full px-4 py-3 rounded-md border border-[rgba(225,225,225,0.3)] bg-transparent outline-none focus:border-primary' />

                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}

                        />



                        <div className='w-full flex items-center justify-center lg:justify-end'>
                            <button type='submit' disabled={loading} className='px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-bg-black hover:border hover:border-primary hover:text-primary '>
                                {
                                    loading ? ("loading....") : ("Send")
                                }
                            </button>
                        </div>
                    </form>
                </Form>

            </div>
        </section>
    )
}

export default ContactMe