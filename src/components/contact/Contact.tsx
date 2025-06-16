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
import { AnimatedDivProps } from "@/types/motion";

const motionVariants = {
  hidden: { opacity: 0, backgroundColor: "rgb(255, 255, 255)" },
  visible: { opacity: 1 },
};

const Contact: React.FC<AnimatedDivProps> = ({ className }) => {
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
      // layoutId={layoutId}
      className={cn([className, "h-full font-red-hat-display"])}
    >
      <div className="h-full py-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col-reverse md:flex-row h-full relative"
          >
            <div className="w-full md:w-1/2 md:pr-4 h-full">
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
            <div className="w-2/3 mb-5 md:mb-0 md:w-1/2 md:pl-4 md:border-l-2 border-black space-y-5 flex justify-end flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FROM.</FormLabel>
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
                    <FormLabel>EMAIL</FormLabel>
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
              <div className="text-xl md:text-right">
                {new Date().getFullYear()}-{new Date().getMonth()}-
                {new Date().getDate()}
              </div>
            </div>
            <div className="absolute -top-4 md:top-0 right-0 bg-[url(/images/stamp.png)] bg-contain bg-no-repeat w-20 h-30 flex justify-end items-end">
              <Button
                type="submit"
                variant={"outline"}
                className="rounded-none w-[calc(100%-8px)]"
              >
                <span>Send It</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default Contact;
