"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import * as React from "react";
import  prompts  from '@/components/prompt';


  
export default function PromptDialog({
    open,
    onOpenChange,
    promptHandler
}:{
    open: boolean
    onOpenChange: () => void,
    promptHandler: (prompt: string) => void
}){

    const [selectedPromptCategory, setSelectedPromptCategory] = React.useState<string>("Businesses");
    const [selectedPromptIndex, setSelectedPromptIndex] = React.useState<number>(0);

    const selectedCategoryIndex = prompts.findIndex(prompt => prompt.category === selectedPromptCategory);
    const selectedPrompt = prompts[selectedCategoryIndex]?.prompts[selectedPromptIndex] ?? "";


    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
            <Button 
                variant="outline"
                className={cn("text-primary text-xs border border-primary/[8%] bg-neutral-800 hover:bg-neutral-700 hover:text-primary cursor-pointer")}
                onClick={() => onOpenChange()}
            >
                Browse Prompts
            </Button>
        </DialogTrigger>
        <DialogContent className={cn("max-w-[1000px] flex flex-col")}>
          <DialogHeader>
              <DialogTitle>Example Prompts</DialogTitle>
              <DialogDescription>Select from these prompts to quickly get started.</DialogDescription>
          </DialogHeader>
          <div className="hidden md:block">
            <div className="flex flex-col md:flex-row w-full items-start justify-start border-t border-t-primary/[8%] overflow-auto">
                <div className="flex flex-col gap-1 md:w-3.5/12 self-stretch overflow-scroll border-b border-b-primary/[8%] md:border-b-0 md:border-r md:border-r-primary/[8%] pb-3 md:pb-0 pt-3 pr-3 max-h-[500px]">
                    {
                        prompts.map((prompt, index) => (
                            <div 
                                className={cn(`p-3 items-center rounded-md justify-start font-normal text-base text-primary-foreground hover:bg-primary/[8%] hover:text-primary cursor-pointer ${prompt.category === selectedPromptCategory && "bg-primary/[8%] text-primary"}`)}
                                key={index * Math.random()}
                                onClick={() => setSelectedPromptCategory(prompt.category)}
                            >
                                {prompt.category}
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-1 md:w-4/12 self-stretch overflow-y-auto border-b border-b-primary/[8%] md:border-b-0 md:border-r md:border-r-primary/[8%] p-3 pl-0 md:pl-3 md:pb-3 max-h-[500px]">
                    {
                        prompts.map((prompt) => (
                            selectedPromptCategory === prompt.category &&
                            (
                                prompt.titles.map((title, index) => (
                                    <div 
                                        className={cn(`p-3 items-center rounded-md jjustify-start font-normal text-base text-primary-foreground hover:bg-primary/[5%] hover:text-primary cursor-pointer ${index === selectedPromptIndex && "bg-primary/[8%] text-primary"}`)}
                                        key={index * Math.random()}
                                        onClick={() => setSelectedPromptIndex(index)}
                                    >
                                        {title}
                                    </div>
                                ))
                            )
                        ))
                    }
                </div>
                <div className="flex md:w-5/12 flex-col items-end self-stretch pr-0  max-h-[500px] p-3 pb-6 pl-0 md:pl-3 md:pb-3">
                    <div className="relative h-full w-full overflow-y-scroll whitespace-pre-wrap rounded-md bg-primary/[5%] p-3 text-primary-foreground">
                        <span className="sticky top-0 z-50 flex w-full bg-grey-100 pb-2 text-xs text-grey-400">PREVIEW (WORKSPACE PROMPT)</span>
                        <div className="mt-4">
                          {selectedPrompt}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex-grow"></div>
                <Button 
                  className="bg-primary/[8%] text-primary border border-primary/[8%] hover:bg-primary/[10%]"
                  onClick={() => {
                    promptHandler(selectedPrompt)
                    onOpenChange()
                  }}
                >
                  Use Prompt
                </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Accordion type="single" collapsible>
              {
                prompts.map((prompt, index) => (
                  <AccordionItem value={`item-${index}`} key={index * Math.random()}>
                    <AccordionTrigger
                      onClick={() => setSelectedPromptCategory(prompt.category)}
                    >
                        {prompt.category}
                    </AccordionTrigger>
                    {
                      prompts.map((prompt) => (
                        selectedPromptCategory === prompt.category &&
                        (
                            prompt.titles.map((title, index) => (
                              <AccordionContent 
                                key={index * Math.random()}
                                onClick={() => setSelectedPromptIndex(index)}
                                className={`${index === selectedPromptIndex && "text-primary"}`}
                              >
                                    {title}
                              </AccordionContent>
                            ))
                        )
                      ))
                    }
                  </AccordionItem>
                ))
              }
              <AccordionItem value="item-prompt-area" className="border-none">
                <div className="flex md:w-5/12 flex-col items-end self-stretch pr-0  max-h-[500px] p-3 pb-6 pl-0 md:pl-3 md:pb-3">
                  <div className="relative h-full w-full overflow-y-scroll whitespace-pre-wrap rounded-md bg-primary/[5%] p-3 text-primary-foreground">
                      <span className="sticky top-0 z-50 flex w-full bg-grey-100 pb-2 text-xs text-grey-400">PREVIEW (WORKSPACE PROMPT)</span>
                      <div className="mt-4">
                        {selectedPrompt}
                      </div>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-prompt-select" className="border-none">
                <div className="flex">
                  <div className="flex-grow"></div>
                  <Button 
                    className="bg-primary/[8%] text-primary border border-primary/[8%] hover:bg-primary/[10%]"
                    onClick={() => {
                      promptHandler(selectedPrompt)
                      onOpenChange()
                    }}
                  >
                    Use Prompt
                  </Button>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </DialogContent>
      </Dialog>
    )
}

