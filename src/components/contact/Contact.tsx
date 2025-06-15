"use client";
import * as motion from "motion/react-client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { contactFormData, contactFormSchema } from "@/schemas/contactSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useCardOpenStore } from "@/stores/cardOpen.store";
import { cn } from "@/lib/utils";

const motionVariants = {
  hidden: { opacity: 0, backgroundColor: "rgb(255, 255, 255)" },
  visible: { opacity: 1 },
};

const Contact = ({
  layoutId,
  className,
}: {
  layoutId: string;
  className: string;
}) => {
  const { setCardId } = useCardOpenStore();
  const form = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (data: contactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    if (result.success) {
      form.reset({
        name: "",
        email: "",
        message: "",
      });
      setCardId(null);
    }
  };
  return (
    <motion.div
      variants={motionVariants}
      initial="hidden"
      animate="visible"
      layoutId={layoutId}
      className={className}
    >
      <div className="h-full p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex h-full relative"
          >
            <div className="w-1/2 pr-4 h-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col h-full">
                    <FormLabel className="text-2xl self-start">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="md:text-2xl flex-grow rounded-none"
                        placeholder="Plz send your message. 💌"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 pl-4 border-l-2 border-black space-y-5 flex justify-end flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className={cn("border-0 border-b-2 rounded-b-none")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className={cn("border-0 border-b-2 rounded-b-none")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className={cn("absolute top-0 right-0")}>
              Send
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default Contact;
